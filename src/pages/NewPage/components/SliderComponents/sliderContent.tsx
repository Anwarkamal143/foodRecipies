import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon, Image } from "@components"
import { AngleRight, Tag, TimeDuraion } from "@icons"
import { settings } from "data"
import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"
type Props = {
  //   index?: any
  data?: any
  className?: string
  isContentSlider?: boolean
}

const SliderContent = ({ data, className, isContentSlider = false }: Props) => {
  const sliderRef = useRef(null)

  const Content = () => {
    return data?.map((e: any, ind) => {
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
    })
  }
  return (
    <div className={className}>
      <div className="recipesSectionHolder">
        {isContentSlider ? (
          <Slider ref={sliderRef} {...settings}>
            {Content()}
          </Slider>
        ) : (
          <Content />
        )}
      </div>
    </div>
  )
}

export default styled(SliderContent)`
  .recipesSectionHolder .slick-slider {
    width: 100%;
  }
`
