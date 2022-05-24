import { Icon } from "@components"
import classNames from "classnames"
import React, { useMemo } from "react"
import Flag from "react-flags"
import { BsArrowRight } from "react-icons/bs"
import styled from "styled-components"
import Button from "./../Button/Button"

interface Props {
  className?: string
  bgImage?: string
  profileImage?: string
  title?: string
  subTitle?: string
  countryFlag?: string
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
                <strong className="cook-name">{title}</strong>
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
              <img src={bgImage} alt="bgCardImage" />
              <div>
                {options?.hasFlag && (
                  <Flag
                    name={countryFlag}
                    format="png"
                    pngSize={64}
                    shiny={true}
                    alt={`${countryFlag} Flag`}
                  />
                )}
                {options?.hasImage && (
                  <img src={profileImage} alt="profCardImage" />
                )}
              </div>
              <span>
                <strong>{title}</strong>
              </span>
              <span>{subTitle}</span>
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
    box-shadow: 0 3px 6px rgba(30, 30, 45, 0.25);
    border: 1px solid #f2f3f5;
    border-radius: 10px;
    overflow: hidden;

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

      @media (max-width: 767px) {
        width: 37px;
        height: 37px;
        margin: -18px auto 0;
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

      @media (max-width: 767px) {
        padding: 6px 15px 7px;
      }
    }

    .cook-name {
      color: #1e1e2d;
      font-size: 16px;
      line-height: 20px;
      display: block;
      margin: 0 0 3px;
      font-weight: 700;

      @media (max-width: 767px) {
        font-size: 12px;
        line-height: 15px;
        margin: 0;
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
`
