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
          <div className={classNames(className, "primary")}>
            <img src={bgImage} alt="bgCardImage" />
            <div>
              <img src={profileImage} alt="profCardImage" />
            </div>
            <span>
              <strong>{title}</strong>
            </span>
            <span>Member Since: {date}</span>
            <div>
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
            <div>
              <span>
                <strong>Views</strong>
                {footerValue?.views}
              </span>
              <span>
                <strong>Recipes</strong>
                {footerValue?.recipies}
              </span>

              <span>
                <strong>Saves</strong>
                {footerValue?.saves}
              </span>
            </div>
          </div>
        )
      case "secondary":
        return (
          <div className={classNames(className, "secondary")}>
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
        )
      default:
        break
    }
  }, [type])
  return <React.Fragment>{getComponent}</React.Fragment>
}

export const SocialCard = styled(Card)``
