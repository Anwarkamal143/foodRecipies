import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon, Image } from "@components"
import { AngleRight, Tag, TimeDuraion } from "@icons"
import React from "react"
import styled from "styled-components"
type Props = {
  data?: any
  className?: string
  image?: string
  id?: string
  fvrtBy?: any
  time?: any
  state?: any
  subTitle?: string
  title?: string
  icon?: any
  footer?: boolean
}

const ItemCards = ({
  id,
  image,
  fvrtBy,
  time,
  state,
  title,
  className,
  icon,
  subTitle,
  footer = true,
}: Props) => {
  return (
    <div className={`${className} recipeItem`} key={id}>
      <div className="recipeItemImage">
        {!icon && (
          <>
            <Icon className="tagsIcon">
              <span>
                <Tag /> Vegan
              </span>
            </Icon>
            <Icon className="heartIcon">
              <HeartIconAnimtaed />
            </Icon>
          </>
        )}
        <img src={image || "/images/bbq.jpg"} alt="image" />
      </div>
      <div className="recipeItemTextbox">
        {title && <strong className="recipeTitle">{title}</strong>}
        {fvrtBy && (
          <span className="recipeAuthor">
            {fvrtBy} <AngleRight />
          </span>
        )}
        {subTitle && <span className="subTitle">{subTitle}</span>}
        {footer && (
          <div className="recipeMeta">
            <span className="recipeMetaBox">
              <TimeDuraion />
              {time}
            </span>
            <span className="recipeMetaBox">
              <Image src="/images/emoji.png" alt="waving hand" />
              {state}
            </span>
          </div>
        )}

        {icon && <span className="icon">{icon}</span>}
      </div>
    </div>
  )
}

export default styled(ItemCards)`
  .recipesSectionHolder .slick-slider {
    width: 100%;
  }
`
