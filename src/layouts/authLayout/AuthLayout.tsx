import { useAppDispatch } from "@hooks"
import { setUser } from "@redux/reducers"
import { removeLocalStorage } from "@utils"
import { Time } from "@utils/enums"
import request from "@utils/request"
import { useRouter } from "next/router"
import React, {
  ReactChild,
  ReactChildren,
  ReactElement,
  ReactNode,
  useEffect,
} from "react"
import { Cookies } from "react-cookie"
import styled from "styled-components"
import { AuthContainer } from "./authlayout.styled"

type IAuthProps = {
  children?:
    | ReactChild
    | ReactChildren
    | ReactNode
    | ReactElement
    | HTMLElement
    | JSX.Element
    | ReactNode[]
  className?: string
}
const cookies = new Cookies()
function AuthL(props: IAuthProps) {
  const { children, className = "" } = props
  const dispatch = useAppDispatch()
  const router = useRouter()

  async function loadUserFromCookies() {
    const token = cookies.get("token")
    console.log({ token })
    if (token) {
      console.log("Got a token in the cookies, let's see if it is valid")
      // api.defaults.headers.Authorization = `Bearer ${token}`
      const { data: user } = await request("/user")
      if (user) dispatch(setUser(user))
    } else {
      login("omer", "123456")
    }
    // setLoading(false)
  }
  useEffect(() => {
    loadUserFromCookies()
  }, [])
  const login = async (email: string, password: string) => {
    const { data: token } = await request("/auth/login", {
      data: {
        email,
        password,
      },
    })
    console.log({ token })
    if (token) {
      console.log("Got token")
      cookies.set("token", token, {
        path: "/",
        maxAge: 68 * Time.YEARS,
        sameSite: "lax",
      })
      loadUserFromCookies()
    }
  }

  const logout = () => {
    removeLocalStorage("user")
    cookies.remove("token", { path: "/" })

    router.push("/login")
  }

  return (
    <AuthContainer className={`${className} auth_layout`}>
      {children}
    </AuthContainer>
  )
}
export const AuthLayout = styled(AuthL)``
