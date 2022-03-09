import React from "react"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styled from "styled-components"
import { SliderItem, SliderItemContentWrapper } from "./slider.styled"

interface ISliderProps extends Settings {
  className?: string
}

function Sliderr(props: ISliderProps) {
  const settings: Settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    className: "slider",

    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],

    ...props,
  }
  return (
    <div className={props.className}>
      <Slider {...settings}>
        <SliderItem>
          <img src="/images/mock/slider1.png" />
          <SliderItemContentWrapper>
            <img
              src="/images/mock/slider1profile.png"
              alt="slider one profile"
            />
            <span>Samira Brown</span>
          </SliderItemContentWrapper>
        </SliderItem>
        <SliderItem>
          <img src="/images/mock/slider2.png" />

          <SliderItemContentWrapper>
            <img
              src="/images/mock/slider2profile.png"
              alt="slider one profile"
            />
            <span>Samira Brown</span>
          </SliderItemContentWrapper>
        </SliderItem>
        <SliderItem>
          <img src="/images/mock/slider3.png" />
          <SliderItemContentWrapper>
            <img
              src="/images/mock/slider3profile.png"
              alt="slider one profile"
            />
            <span>Samira Brown</span>
          </SliderItemContentWrapper>
        </SliderItem>
        <SliderItem>
          <img src="/images/mock/slider4.png" />
          <SliderItemContentWrapper>
            <img
              src="/images/mock/slider4profile.png"
              alt="slider one profile"
            />
            <span>Samira Brown</span>
          </SliderItemContentWrapper>
        </SliderItem>
        <SliderItem>
          <img src="/images/mock/slider5.png" />
          <SliderItemContentWrapper>
            <img
              src="/images/mock/slider5profile.png"
              alt="slider one profile"
            />
            <span>Samira Brown</span>
          </SliderItemContentWrapper>
        </SliderItem>
        <SliderItem>
          <img src="/images/mock/slider1.png" />
          <SliderItemContentWrapper>
            <img
              src="/images/mock/slider1profile.png"
              alt="slider one profile"
            />
            <span>Samira Brown</span>
          </SliderItemContentWrapper>
        </SliderItem>
        <SliderItem>
          <img src="/images/mock/slider2.png" />
          <SliderItemContentWrapper>
            <img
              src="/images/mock/slider2profile.png"
              alt="slider one profile"
            />
            <span>Samira Brown</span>
          </SliderItemContentWrapper>
        </SliderItem>
      </Slider>
    </div>
  )
}

export const FeedsSlider = styled(Sliderr)`
  /* width: calc(100% - 28px); */
  width: 900px;
  @media (max-width: 600px) {
    width: 280px;
  }
  .slick-slide {
    padding: 0.5rem;
    /* width: 135px !important; */
  }
`
