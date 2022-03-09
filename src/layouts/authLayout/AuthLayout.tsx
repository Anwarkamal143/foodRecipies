import { Slicklider } from "@Components"
import { AppleIcon, FacebookIcon, GoogleIcon, LinkedInIcon } from "@Icons"
import React, {
  cloneElement,
  isValidElement,
  ReactChild,
  ReactChildren,
  ReactElement,
  ReactNode,
} from "react"
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
function AuthL(props: IAuthProps) {
  const { children, className = "" } = props
  const getIcon = (title: string) => {
    switch (title) {
      case "google":
        return <GoogleIcon />
      case "linkedin":
        return <LinkedInIcon />
      case "apple":
        return <AppleIcon />

      case "facebook":
        return <FacebookIcon />
      default:
        break
    }
  }

  // console.log(isValidElement(children))
  // console.log({ children, child: React.Children })

  // return <p>hello theere</p>
  return (
    <AuthContainer className={`${className} auth_layout`}>
      <div className="react-slick">
        <Slicklider />
      </div>
      {children
        ? React.Children.map(children, (ch, i) => {
            if (isValidElement(ch)) {
              return cloneElement(ch as any, {
                key: i,
                // loading,
                // isLoading: loading,
                // files: acceptedFiles,
              })
            }

            return null
          })
        : null}
      {/* {cloneElement(children as any, {
        // loading,
        // isLoading: loading,
        // files: acceptedFiles,
      })} */}
    </AuthContainer>
  )
}
export const AuthLayout = styled(AuthL)``
