import { LeftSliderArrow, RightSliderArrow } from "@icons"
import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"

type Props = {
  data?: any
  className?: string

  title?: string
  discription?: string


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

const OurCooksDetails = ({
  data = [],
  className,
  title,
  discription,
}: Props) => {

  const sliderRef = useRef(null)
  const users = () => {
    return data.map((e: any, index: any) => {
      return (
        <div className="cookItemBox" key={index}>
          <div className="image-holder">
            {e.type && <span className="videobtn"></span>}
            <img src={e.url} alt="video" />
          </div>
          <div className="textbox">
            <div className="profile-image">
              <img src={e.profile} alt="video" />
            </div>
            <div className="textinfo">
              <span className="uesername">{e.userName}</span>
              <span className="postby">{e.postby}</span>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className={`class ${className} recipesSection socialCooksblock align-center`}>
      <header className="recipesSectionHeader">
        <strong className="recipesSectionTitle">{title}</strong>
        <div className="favorite-head">
          <span className="recipesSectionText">{discription}</span>
        </div>
      </header>
      <Slider draggable={true} ref={sliderRef} {...settings}>
        {users()}
      </Slider>
    </div>
  )
}

export default styled(OurCooksDetails)``
