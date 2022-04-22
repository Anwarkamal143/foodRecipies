import { Image } from "@components"
import { useAppDispatch } from "@hooks"
import { setSliderAttachments, toggleSlider } from "@reducers"
import React from "react"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styled from "styled-components"
import { SliderItem, SliderItemContentWrapper } from "./slider.styled"

interface ISliderProps extends Settings {
  className?: string
}
const Images = [
  {
    path: "/images/mock/slider1.png",
    type: "image",
    profileImage: "/images/mock/slider1profile.png",
    name: "Samira Brown",
    stories: ["/images/mock/slider1.png", "/images/mock/slider2.png"],
  },
  {
    path: "/images/mock/slider2.png",
    type: "image",
    profileImage: "/images/mock/slider2profile.png",
    name: "Samira Brown",
    stories: [
      "/images/mock/slider1.png",
      // "/images/mock/slider1profile.png",
      "/images/mock/slider2.png",
      // "/images/mock/slider2profile.png",
      "/images/mock/slider3.png",
      // "/images/mock/slider3profile.png",
      "/images/mock/slider4.png",
      // "/images/mock/slider4profile.png",
    ],
  },
  {
    path: "/images/mock/slider3.png",
    type: "image",
    profileImage: "/images/mock/slider3profile.png",
    name: "Samira Brown",
    stories: ["/images/mock/slider5.png", "/images/mock/slider1.png"],
  },
  {
    path: "/images/mock/slider4.png",
    type: "image",
    profileImage: "/images/mock/slider4profile.png",
    name: "Samira Brown",
    stories: ["/images/mock/slider1.png", "/images/mock/slider3.png"],
  },
  {
    path: "/images/mock/slider5.png",
    type: "image",
    profileImage: "/images/mock/slider5profile.png",
    name: "Samira Brown",
    stories: ["/images/mock/slider4.png", "/images/mock/slider2.png"],
  },
]

function Sliderr(props: ISliderProps) {
  const dispatch = useAppDispatch()
  const settings: Settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
    dots: false,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    ...props,
  }
  return (
    <div className={props.className}>
      <Slider {...settings}>
        {Images.map(i => (
          <SliderItem
            key={i.path}
            onClick={() => {
              dispatch(
                setSliderAttachments({
                  items: Images || [],
                  active: i,
                })
              )
              dispatch(toggleSlider(true))
            }}
          >
            <Image src={i.path} alt="slider one profile" />
            <SliderItemContentWrapper>
              <Image src={i.profileImage} alt="slider one profile" />
              <span>{i.name}</span>
            </SliderItemContentWrapper>
          </SliderItem>
        ))}
      </Slider>
    </div>
  )
}

export const FeedsSlider = styled(Sliderr)`
  width: 100%;
  overflow: hidden;

  .slick-slider {
    flex-grow: 0;
    flex-basis: inherit;
    width: 100%;
  }

  .image-comp {
    transition: all 0.4s ease;
  }

  .slick-slide {
    width: 134px;
    padding: 0 7px;
    outline: none !important;
    box-shadow: none !important;
    /* width: 135px !important; */

    &:hover {
      .image-comp {
        transform: scale(1.05);
      }
    }
  }
`
