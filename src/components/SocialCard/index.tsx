import { Icon } from "@components"
import { RightAngle } from "@icons"
import classNames from "classnames"
import React, { useMemo } from "react"
import { FlagIcon, FlagIconCode } from "react-flag-kit"
import { BsArrowRight } from "react-icons/bs"
import styled from "styled-components"
import Button from "./../Button/Button"

interface Props {
  className?: string
  bgImage?: string
  profileImage?: string
  title?: string
  subTitle?: string
  countryFlag?: FlagIconCode
  options?: {
    hasImage?: boolean
    hasFlag?: boolean
  }
  date?: string
  icon?: {
    facebook: React.ReactNode
    youtube: React.ReactNode
    twitter: React.ReactNode
    instagram: React.ReactNode
  }
  footerValue?: {
    views?: string
    recipies?: string
    saves?: string
  }
  type: "primary" | "secondary"
}

const Card = ({
  className,
  bgImage,
  profileImage,
  title,
  type = "primary",
  date,
  icon,
  footerValue,
  options,
  subTitle,
  countryFlag,
}: Props) => {
  const getComponent = useMemo(() => {
    switch (type) {
      case "primary":
        return (
          <div className={classNames(className, "card-primary")}>
            <div className="card-primary-wrap">
              <div className="image-holder">
                <img src={bgImage} alt="bgCardImage" />
              </div>
              <div className="cook-profile-image">
                <img src={profileImage} alt="profCardImage" />
              </div>
              <div className="cook-details">
                <strong className="cook-name">
                  {title} <RightAngle />
                </strong>
                <span className="date">Member Since: {date}</span>
                <ul className="socialIcons">
                  <li>
                    <Icon className="socialIconsItem facebook">
                      {icon?.facebook}
                    </Icon>
                  </li>
                  <li>
                    <Icon className="socialIconsItem youtube">
                      {icon?.youtube}
                    </Icon>
                  </li>
                  <li>
                    <Icon className="socialIconsItem twitter">
                      {icon?.twitter}
                    </Icon>
                  </li>
                  <li>
                    <Icon className="socialIconsItem instagram">
                      {icon?.instagram}
                    </Icon>
                  </li>
                </ul>
              </div>
              <div className="cook-history">
                <div className="col-holder">
                  <strong className="col-heading">Views</strong>
                  <strong className="value">{footerValue?.views}</strong>
                </div>
                <div className="col-holder">
                  <strong className="col-heading">Recipes</strong>
                  <strong className="value">{footerValue?.recipies}</strong>
                </div>
                <div className="col-holder">
                  <strong className="col-heading">Saves</strong>
                  <strong className="value">{footerValue?.saves}</strong>
                </div>
              </div>
            </div>
          </div>
        )
      case "secondary":
        return (
          <div className={classNames(className, "card-secondary")}>
            <div className="card-secondary-wrap">
              <div className="red-color"></div>
              <div className="image-area">
                {options?.hasFlag && (
                  <div className="flag-holder">
                    <FlagIcon code={countryFlag as FlagIconCode} />
                  </div>
                )}
                {options?.hasImage && (
                  <div className="recipie-image-holder">
                    <img src={profileImage} alt="profCardImage" />
                  </div>
                )}
              </div>
              <strong className="name">
                {title} <RightAngle />
              </strong>
              <span className="sub-text">{subTitle}</span>
              <Button
                shape="circle"
                size="small"
                iconRight={<BsArrowRight className="arrow" />}
              >
                View All Recipes
              </Button>
            </div>
          </div>
        )
      default:
        break
    }
  }, [type])
  return <React.Fragment>{getComponent}</React.Fragment>
}

export const SocialCard = styled(Card)`
  .card-primary-wrap {
    border: 1px solid #f2f3f5;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 0px 3px 6px rgba(30, 30, 45, 0.05);

    &:hover {
      box-shadow: 0px 3px 6px rgba(30, 30, 45, 0.25);

      .cook-name {
        color: #e0464d;
      }
    }

    .image-holder {
      position: relative;

      img {
        width: 100%;
        height: auto;
      }
    }

    .cook-profile-image {
      width: 53px;
      height: 53px;
      border-radius: 100%;
      border: 3px solid #f2f3f5;
      margin: -26px auto 0;
      position: relative;
      z-index: 2;
      transition: all 0.4s ease;

      @media (max-width: 767px) {
        width: 37px;
        height: 37px;
        margin: -18px auto 0;
      }

      &:hover {
        transform: scale(1.08);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .cook-details {
      padding: 6px 15px 14px;
      text-align: center;

      @media (max-width: 1279px) {
        padding: 6px 10px 7px;
      }
    }

    .cook-name {
      color: #1e1e2d;
      font-size: 16px;
      line-height: 20px;
      display: block;
      padding: 0 0 0 11px;
      margin: 0 0 3px;
      font-weight: 700;
      transition: all 0.4s ease;
      cursor: pointer;

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 15px;
        margin: 0;
      }

      svg {
        display: inline-block;
        vertical-align: middle;
        transition: all 0.4s ease;
        opacity: 0;
        visibility: hidden;

        path {
          stroke: #e0464d;
        }
      }

      &:hover {
        svg {
          opacity: 1;
          visibility: visible;
          margin: 0 -5px 0 5px;
        }
      }
    }

    .date {
      display: block;
      font-size: 10px;
      line-height: 14px;
      color: rgba(141, 141, 150, 0.7);
      margin: 0 0 15px;

      @media (max-width: 767px) {
        font-size: 8px;
        line-height: 12px;
        margin: 0 0 10px;
      }
    }

    .socialIcons {
      .socialIconsItem {
        width: 28px;
        height: 28px;

        @media (max-width: 767px) {
          width: 20px;
          height: 20px;
        }
      }
    }

    .cook-history {
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-top: 1px solid #f2f3f5;
      padding: 12px 15px;

      @media (max-width: 1279px) {
        padding: 12px 10px;
      }

      .col-heading {
        display: block;
        font-size: 10px;
        line-height: 15px;
        color: #8d8d96;

        @media (max-width: 767px) {
          font-size: 8px;
          line-height: 12px;
        }
      }

      .value {
        display: block;
        font-size: 12px;
        line-height: 15px;
        color: #1e1e2d;
        font-weight: 700;

        @media (max-width: 767px) {
          font-size: 9px;
          line-height: 12px;
        }
      }
    }

    .col-holder {
      padding: 0 6%;
      text-align: center;
    }
  }

  .card-secondary-wrap {
    background: #fff;
    border: 1px solid #f9f9f9;
    border-radius: 10px;
    position: relative;
    padding: 30px 26px 26px;
    text-align: center;
    transition: all 0.4s ease;
    box-shadow: 0px 3px 6px rgba(30, 30, 45, 0.05);

    @media (max-width: 767px) {
      padding: 23px 15px 20px;
    }

    &:hover {
      box-shadow: 0px 3px 6px rgba(30, 30, 45, 0.25);

      .name {
        color: #e0464d;
      }
    }

    .red-color {
      background: #ff595f;
      height: 7px;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 10px 10px 0 0;

      @media (max-width: 767px) {
        height: 5px;
      }
    }

    .flag-holder {
      width: 45px;
      height: 45px;
      margin: 0 auto 22px;
      border-radius: 100%;
      overflow: hidden;

      @media (max-width: 767px) {
        width: 35px;
        height: 35px;
        margin-bottom: 17px;
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
        border-radius: 100%;
      }
    }

    .recipie-image-holder {
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      text-align: center;
      margin: 0 auto 12px;

      img {
        display: inline-block;
        max-height: 55px;
      }
    }

    .name {
      display: block;
      font-size: 12px;
      line-height: 1.5;
      color: #3e3e3e;
      margin: 0 0 1px;
      cursor: pointer;
      padding: 0 0 0 11px;

      svg {
        display: inline-block;
        vertical-align: middle;
        transition: all 0.4s ease;
        opacity: 0;
        visibility: hidden;

        path {
          stroke: #e0464d;
        }
      }

      &:hover {
        svg {
          opacity: 1;
          visibility: visible;
          margin: 0 -5px 0 5px;
        }
      }
    }

    .sub-text {
      display: block;
      font-size: 11px;
      line-height: 1.5;
      color: #999;
      margin: 0 0 25px;
      cursor: pointer;
      transition: all 0.4s ease;

      @media (max-width: 767px) {
        margin-bottom: 17px;
      }

      &:hover {
        color: #e0464d;
      }
    }

    .button.button-sm {
      background: transparent;
      border: 1px solid #e5e8ef;
      font-weight: 400;
      font-size: 9px;
      line-height: 14px;
      color: rgba(30, 30, 45, 0.7);

      @media (max-width: 767px) {
        min-width: 110px;
        padding: 4px 10px;
      }

      .arrow {
        font-size: 12px;
        margin: 0 0 0 5px;
        transition: all 0.4s ease-in-out;

        @media (max-width: 767px) {
          font-size: 10px;
        }
      }

      &:hover {
        color: #fff;
        background: #ff6067;
        border-color: #ff6067;

        .arrow {
          transform: translateX(4px);
        }
      }
    }
  }
`
