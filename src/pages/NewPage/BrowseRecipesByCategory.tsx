import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon, Image } from "@components"
import { AngleRight, Tag, TimeDuraion } from "@icons"
import React from "react"
import styled from "styled-components"

type Props = {
  index?: any
  data?: any
  className?: string
}

const BrowseRecipesByCategory = ({ index, data = [], className }: Props) => {
  return (
    <div className={className}>
      <div className="recipesSectionHolder">
        {data[index || 0]?.data?.map((e: any) => {
          return (
            <div className="recipeItem" key={e.id}>
              <div className="recipeItemImage">
                <Icon className="tagsIcon">
                  <span>
                    <Tag /> Vegan
                  </span>
                </Icon>
                <Icon className="heartIcon">
                  <HeartIconAnimtaed />
                </Icon>
                <img src={e.image} alt="image" />
              </div>
              <div className="recipeItemTextbox">
                <strong className="recipeTitle">{e.title}</strong>
                <span className="recipeAuthor">
                  {e.fvrtBy} <AngleRight />
                </span>
                <div className="recipeMeta">
                  <span className="recipeMetaBox">
                    <TimeDuraion />
                    {e.time}
                  </span>
                  <span className="recipeMetaBox">
                    <Image src="/images/emoji.png" alt="waving hand" />
                    {e.state}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default styled(BrowseRecipesByCategory)``
