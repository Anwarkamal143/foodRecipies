import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon, Image } from "@components"
import { AngleRight, Tag, TimeDuraion } from "@icons"
import React from "react"
import styled from "styled-components"

type Props = {
  data?: any
  className?: string
  tag?: boolean
  heartIcon?: boolean
  discription?: boolean
  timeDuraion?: boolean
}

const RecipesCard = ({
  data = [],
  tag = true,
  heartIcon = true,
  discription = true,
  timeDuraion = true,
  className,
}: Props) => {
  return (data || []).map((e: any) => {
    return (
      <div className={`${className} recipeItem`} key={e.id}>
        <div className="rate-info">
          {/* {e.high ||
            (e.low && (
              <div>
                <span className={`rate`}>{e.low ? e.low : e.high}</span>
                <span className={`rate-${e.low ? "low" : "heigh"}`}></span>
              </div>
            ))} */}


            <span className="rate">2</span>
            <span className="rate-heigh"></span>
        </div>
        <div className="recipeItemImage">
          {tag && (
            <Icon className="tagsIcon">
              <span>
                <Tag /> Vegan
              </span>
            </Icon>
          )}
          {heartIcon && (
            <Icon className="heartIcon">
              <HeartIconAnimtaed />
            </Icon>
          )}
          <img src={e.image} alt="image" />
        </div>
        <div className="recipeItemTextbox">
          <strong className="recipeTitle">{e.title}</strong>
          {discription && (
            <span className="recipeAuthor">
              {e.fvrtBy} <AngleRight />
            </span>
          )}

          {timeDuraion && (
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
          )}
        </div>
      </div>
    )
  })
}

export default styled(RecipesCard)``
