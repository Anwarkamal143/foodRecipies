import { ReactElement, ReactNode } from "react"
import styled from "styled-components"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

type ICardProps = {
  className?: string
  cardClass?: string
  children?: string | ReactElement | ReactNode | HTMLElement
  [key: string]: any
}

const Card = function ({ className, cardClass, children }: ICardProps) {
  return (
    <div className={`${className} ${cardClass} pop-card`}>
      <div className="card-main-body">{children}</div>
    </div>
  )
}

type IProfileCardHeaderProps = {
  title?: string
  subTitle?: string
  img?: string
  [key: string]: any
}

Card.Header = function (props: ICardProps & IProfileCardHeaderProps) {
  const { children, ...rest } = props
  if (!children) {
    return <CardHeader {...rest} />
  }
  return <div className={`card-Header ${rest.className}`}>{children}</div>
}

type IProfileCardBodyProps = {
  caption?: string | ReactElement | ReactNode | any
  bodyClass?: string
  [key: string]: any
}

Card.Body = function (props: ICardProps & IProfileCardBodyProps) {
  const { children, ...rest } = props

  return <CardBody {...rest}>{children}</CardBody>
}
type IProfileCardFooterProps = {
  footerCalss?: string
  [key: string]: any
}

Card.Footer = function (props: ICardProps & IProfileCardFooterProps) {
  const { children, ...rest } = props

  return <CardFooter {...rest}>{children}</CardFooter>
}

export default styled(Card)`
  background: #f6f8fc;
  border: 1px solid #e6ecf5;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 20px;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #525367;
  margin: 0 0 20px;
`
