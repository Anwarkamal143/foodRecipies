import { settings } from "data"
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

const SliderContent = ({ data, className, id }: Props) => {
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
        <Slider ref={sliderRef} {...settings}>
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
