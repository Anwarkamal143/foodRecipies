import { Cancel } from "@icons"
import React, { ReactElement, ReactNode } from "react"
import { toast as rtoast, ToastContainer, ToastOptions } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"

const ToasterContainer: React.FC<any> = props => {
  const { className } = props
  return (
    <ToastContainer
      className={`${className} mahad`}
      position="bottom-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      limit={3}
      {...props}
    />
  )
}

const Element: React.FC<any> = ({
  Icon,
  message,
  title: customTitle,
}: {
  Icon?: ReactElement | ReactNode
  message: string
  title?: string
}) => {
  return (
    <div className="toaster-wrap">
      <span className="icon">{Icon}</span>
      <span className="title-text"> {customTitle}</span>
      <div className="description">{message}</div>
    </div>
  )
}
const error = (
  message: string,
  title?: string,
  options?: ToastOptions,
  Icon?: ReactElement | ReactNode
) => {
  rtoast.error(
    <Element type="error" message={message} title={title} Icon={<Cancel />} />,
    options
  )
}
const info = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.info(
    <Element type="info" message={message} title={title} Icon={<Cancel />} />,
    options
  )
}
const success = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.success(
    <Element
      type="success"
      message={message}
      title={title}
      Icon={<Cancel />}
    />,
    options
  )
}
const warning = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.warning(
    <Element
      type="success"
      message={message}
      title={title}
      Icon={<Cancel />}
    />,
    options
  )
}
const save = (
  message: string,
  title?: string,
  Icon?: ReactElement | ReactNode,
  options?: ToastOptions
) => {
  rtoast.warning(
    <Element
      message={message}
      title={title || "Recipe Saved"}
      Icon={<img src="images/SaveRecipe.png" alt="heart" />}
    />,
    options
  )
}

export const toast = { error, info, success, warning, save }

export default styled(ToasterContainer)``
