import React from "react"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styled from "styled-components"

interface ISliderProps extends Settings {
  className?: string
}

function Sliderr() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://images.unsplash.com/photo-1644418515428-d7caeee2dc2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1644413435139-b61759212c29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" />
        </div>
      </Slider>
    </div>
  )
}

export const Slicklider = styled(Sliderr)``
