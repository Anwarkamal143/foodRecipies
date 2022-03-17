import axios, { AxiosRequestConfig } from "axios"
// import { toast } from "components/toaster"

import { Cookies } from "react-cookie"
import { removeLocalStorage } from "@utils"
// import { API_URL } from "../config"

const cookies = new Cookies()

// const baseURL = API_URL?.concat("/api")
const baseURL = ""?.concat("/api")

const CancelToken = axios.CancelToken
const pendingRequests = new Map()

axios.interceptors.response.use(
  response => response,
  (error = {}) => {
    const { status, config } = error.response || {}
    const { url } = config || {}
    if (status === 401) {
      if (url.includes("/api/order/get-video")) {
        return Promise.reject(error)
      }
      removeLocalStorage("user")
      cookies.remove("token", { path: "/" })
      window.location.href = "/"
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

const codeMessage: { [key: string]: string } = {
  200: "The request has succeeded",
  201: "New resource has been created ",
  202: "The request has been received",
  204: "No Content",
  // 400: 'The server could not understand the request due to invalid syntax.',
  401: "Unauthorized Operation",
  403: "You do not have access rights to the content",
  404: "Not Found",
  406: "Not Acceptable",
  410: "The request content is not longer available",
  422: "The request was well-formed but was unable to be followed due to semantic errors.",
  500: "The server has encountered a situation it doesn't know how to handle",
  502: "Bad Gateway",
  503: "The server is not ready to handle the request",
  504: "Timeout",
}

type CustomResponse = {
  success?: boolean
  errorHandled?: boolean
  reason?: string
} & Partial<Response>

const errorHandler = (
  error: { response: CustomResponse },
  custom: { showError?: boolean; statusCodes?: [number] }
): CustomResponse => {
  const { statusCodes = [] } = custom
  if (error instanceof axios.Cancel) {
    return {
      success: false,
      errorHandled: true,
      reason: "cancelled",
      ...error,
    }
  }

  const { response } = error
  const isServer = typeof window === "undefined"
  if (isServer) {
    response.success = false
    return response
  }

  if (response && response.status && codeMessage[response.status]) {
    response.success = false
    response.errorHandled = true
    const errorText = codeMessage[response.status] || response.statusText
    if (
      !statusCodes?.length ||
      (statusCodes?.length &&
        !codeMessage[
          statusCodes?.find(stcode => response.status === stcode) || ""
        ])
    ) {
      //   toast.error(errorText || "Sorry something went wrong")
    }
  } else if (!response) {
    // toast.error("Please check your internet connection")

    return { success: false, errorHandled: true }
  }

  return { ...response, success: false, errorHandled: true, reason: "network" }
}

/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 *
 * Note Don't add anymore params if needed add a object type called 'extra' or something
 * can tell me what's the need for includeAuthHead?
 */
type IRequestProps = {
  url?: string
  options?: AxiosRequestConfig
  cookies?: any
  includeAuthHeader?: boolean
  handleError?: boolean
  token?: string
  customError?: {
    showError?: boolean
    statusCodes?: number[]
  }
}
export const request1 = (props: IRequestProps) => {
  const {
    url = "",
    options = {},
    cookies = null,
    includeAuthHeader = true,
    handleError = true,
    customError,
    token,
  } = props
  return apiRequest(
    url,
    options,
    cookies,
    includeAuthHeader,
    handleError,
    customError,
    token
  )
}
const apiRequest = (
  url: string,
  options: AxiosRequestConfig = {},
  _ = null,
  includeAuthHeader = true,
  handleError = true,
  customError = {},
  token?: string
) => {
  const headers: any = {}

  if (includeAuthHeader && (cookies.get("token") || token)) {
    headers["Authorization"] = token
      ? `Bearer ${token}`
      : `Bearer ${cookies.get("token")}`
  }
  let opts = options

  opts = {
    ...opts,
    headers: { ...headers, ...options.headers },
  }

  return axios((options.baseURL || baseURL) + url, opts)
    .then(json => {
      if (json?.data?.length > -1) {
        return { success: true, data: json.data }
      }
      return { success: true, ...json?.data }
    })
    .catch(e => {
      if (handleError) {
        return errorHandler(e, customError)
      } else {
        throw e
      }
    })
}
const request = (
  url: string,
  options: AxiosRequestConfig = {},
  _ = null,
  includeAuthHeader = true,
  handleError = true,
  token = ""
) => {
  return apiRequest(url, options, _, includeAuthHeader, handleError, {}, token)
}
// const request = (
//   url: string,
//   options: AxiosRequestConfig = {},
//   _ = null,
//   includeAuthHeader = true,
//   handleError = true,
// ) => {
//   const headers: any = {};

//   if (includeAuthHeader && cookies.get('token')) {
//     headers['Authorization'] = `Bearer ${cookies.get('token')}`;
//   }
//   let opts = options;

//   opts = {
//     ...opts,
//     headers: { ...headers, ...options.headers },
//   };

//   return axios((options.baseURL || baseURL) + url, opts)
//     .then((json) => {
//       if (json?.data?.length > -1) {
//         return { success: true, data: json.data };
//       }
//       return { success: true, ...json?.data };
//     })
//     .catch((e) => {
//       if (handleError) {
//         return errorHandler(e);
//       } else {
//         throw e;
//       }
//     });
// };

export const cancellableRequest1 = async ({
  requestId = "",
  url = "",
  options = {},
  cookies = null,
  handleError = true,
  customError = { showError: true },
}: {
  requestId: string
  url?: string
  options?: AxiosRequestConfig
  cookies?: any
  handleError?: boolean
  customError?: { showError?: boolean; statusCodes?: [number] }
}) => {
  if (pendingRequests.has(requestId)) {
    pendingRequests.get(requestId).cancel()
    pendingRequests.delete(requestId)
  }

  const cancelToken = new CancelToken(cancel => {
    pendingRequests.set(requestId, { url, cancel })
  })
  return await request1({
    url,
    options: {
      ...options,
      cancelToken,
    },
    cookies,
    includeAuthHeader: true,
    handleError,
    customError,
  }).then(response => {
    if (
      response.success ||
      (!response.success && response.reason !== "cancelled")
    ) {
      pendingRequests.delete(requestId)
    }
    return response
  })
}
export const cancellableRequest = async (
  requestId: string,
  url: string,
  options: any = {},
  cookies = null,
  handleError = true
) => {
  if (pendingRequests.has(requestId)) {
    pendingRequests.get(requestId).cancel()
    pendingRequests.delete(requestId)
  }

  const cancelToken = new CancelToken(cancel => {
    pendingRequests.set(requestId, { url, cancel })
  })
  return await request(
    url,
    {
      ...options,
      cancelToken,
    },
    cookies,
    true,
    handleError
  ).then(response => {
    if (
      response.success ||
      (!response.success && response.reason !== "cancelled")
    ) {
      pendingRequests.delete(requestId)
    }
    return response
  })
}

export default request
