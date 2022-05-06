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
  title?: string
}

const ItemCards = ({
  id,
  image,
  fvrtBy,
  time,
  state,
  title,
  className,
}: Props) => {
  return (
    <div className={`${className} recipeItem`} key={id}>
      <div className="recipeItemImage">
        <Icon className="tagsIcon">
          <span>
            <Tag /> Vegan
          </span>
        </Icon>
        <Icon className="heartIcon">
          <HeartIconAnimtaed />
        </Icon>
        <img src={image} alt="image" />
      </div>
      <div className="recipeItemTextbox">
        <strong className="recipeTitle">{title} Organic Vegetable with Peas and  chicken Burrito</strong>
        <span className="recipeAuthor">
          {fvrtBy} <AngleRight />
        </span>
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
      </div>
    </div>
  )
}

export default styled(ItemCards)`
  .recipesSectionHolder .slick-slider {
    width: 100%;
  }
`
