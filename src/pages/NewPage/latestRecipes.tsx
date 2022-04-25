import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import Image, { Icon } from "@components"
import { LeftSliderArrow, RightSliderArrow, Tag, TimeDuraion } from "@icons"
import { FavData } from "data"
import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"

type Props = {
  className?: string
}

const LatestRecipesSlider = ({ className }: Props) => {
  const sliderRef = useRef(null)

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
  const LatestRecipes = () => {
    return FavData.map((e, index) => {
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
            <img src={e.image} alt="image" />
          </div>
          <div className="recipeItemTextbox">
            <strong className="recipeTitle">{e.title}</strong>
            <span className="recipeAuthor">{e.fvrtBy} </span>
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
