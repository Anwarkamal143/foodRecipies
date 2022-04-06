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
    <div className={`${className} ${cardClass} pop-card feedsWidget`}>
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
  background: #fff;
  border: 1px solid #f2f3f5;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 20px;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #525367;
  margin: 0 0 20px;

  @media (max-width: 1199px) {
    padding: 15px;
  }

  @media (max-width: 767px) {
    padding: 10px;
  }

  .feedsWidgetHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px;

    h2 {
      font-size: 16px;
      line-height: 20px;
      color: #1e1e2d;
    }

    .feedsWidgetSeeAll {
      font-size: 14px;
      line-height: 18px;
      color: #e0464d;
      cursor: pointer;
      position: relative;
      transition: all 0.25s ease-in-out;

      span {
        display: flex;
        align-items: center;
      }

      svg {
        fill: #b80a12;
        opacity: 0;
        visibilty: hidden;
        transition: all 0.25s ease-in-out;
        position: absolute;
        right: 0;
        top: 52%;
        transform: translateY(-50%);
      }

      &:hover {
        color: #b80a12;
        padding-right: 18px;

        svg {
          opacity: 1;
          visibilty: visible;
        }
      }
    }

    .feedsWidgetCount {
      font-size: 12px;
      line-height: 16px;

      a {
        background: #e6ecf5;
        border-radius: 10px;
        display: inline-block;
        padding: 2px 7px;
        color: #7474a9;
        text-decoration: none;
        transition: all 0.25s ease-in-out;

        &:hover {
          background: #cddef7;
        }
      }
    }
  }

  .userProfileWrapper {
    margin-top: -9px;
    position: relative;
  }

  .userProfile {
    padding: 9px 10px;
    margin: 0 -10px;
    display: flex;
    align-items: center;
    border-radius: 10px;

    
    .userProfileHolder {
      width: calc(100% - 20px);
      display: flex;
      align-items: center;
    }

    .userProfileImageWrap {
      position: relative;
      width: 48px;
      height: 48px;
      overflow: hidden;
      border-radius: 12px;
    }

    .userProfileImage {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
      border-radius: 12px;
    }

    .userProfileDetails {
      width: calc(100% - 48px);
      padding: 0 15px;
    }

    .userProfileName {
      display: block;
      font-size: 14px;
      line-height: 18px;
      color: #1e1e2d;
      font-weight: 700;
      margin: 0 0 2px;
    }

    .userProfileStatus {
      font-size: 12px;
      line-height: 20px;
      color: #7474a9;
      display: block;
    }

    .userProfileAction {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: -10px;
      display: none;

      button {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .userDropdown {
        top: 100%;
        z-index: 9;
        background: #fff;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
        
        > div {
          padding: 6px 16px;

          &:hover {
            background: rgb(229, 231, 235);
          }
        }
      }
    }

    &:hover {
      cursor: pointer;
      background: rgba(0,0,0,0.04);
    }
  }
`
