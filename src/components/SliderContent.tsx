import { LeftSliderArrow, RightSliderArrow } from "@icons"
import React, { useRef } from "react"
import Slider from "react-slick"
import ItemCards from "src/components/CooksCard"
import styled from "styled-components"

type Props = {
  data?: any
  className?: string
  id?: string
  isContentSlider?: boolean
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
  draggable: true,
  swipe: true,
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
        arrows: false,
      },
    },
  ],
}
const SliderContent = ({ data, className, id, ...rest }: Props) => {
  const sliderRef = useRef(null)

  const Content = () => {
    return data?.map((e: any) => {
      return (
        <div className="recipesSectionCards" key={e.id}>
          <ItemCards
            image={e.image}
            id={id}
            fvrtBy={e.fvrtBy}
            time={e.time}
            state={e.state}
            title={e.title}
          />
        </div>
      )
    })
  }
  return (
    <div className={className}>
      <div className="recipesSectionHolder">
        <Slider ref={sliderRef} {...settings} {...rest}>
          {Content()}
        </Slider>
      </div>
    </div>
  )
}

export default styled(SliderContent)`
  .recipesSectionHolder .slick-slider {
    width: 100%;
  }
`
