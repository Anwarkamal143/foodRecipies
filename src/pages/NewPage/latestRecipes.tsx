import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon, Image } from "@components"
import { AngleRight, LeftSliderArrow, RightSliderArrow, Tag, TimeDuraion } from "@icons"
import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"

type Props = {
  className?: string
  data?: any
}
const settings = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <RightSliderArrow />,
  prevArrow: <LeftSliderArrow />,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 479,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
}
const LatestRecipesSlider = ({ data, className }: Props) => {
  const sliderRef = useRef(null)

  const LatestRecipes = () => {
    return data?.map((e: any, index: number) => {
      return (
        <div className={`item-${index} recipeItem`} key={e.id}>
          <div className="recipeItemImage">
            <Icon className="tagsIcon">
              <span>
                <Tag /> Vegan
              </span>
            </Icon>
            <Icon className="heartIcon">
              <HeartIconAnimtaed />
            </Icon>
            <Image src={e.image} alt="waving hand" />
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
      <Slider draggable={false} ref={sliderRef} {...settings}>
        {LatestRecipes()}
      </Slider>
    </div>
  )
}
export default styled(LatestRecipesSlider)`
  width: 100%;

  .slick-slider {
    .slick-slide {
      padding: 0 14px 5px 0;
    }
  }
`
