import { Button } from "@components"
import { LeftSliderArrow, RightSliderArrow } from "@icons"
import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"

type Props = {
  className?: string
  title?: string
  discription?: string
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
const FollowUsers = ({ className, data = [], title, discription }: Props) => {
  const sliderRef = useRef(null)
  const Followlist = () => {
    return data.map((e: any) => {
      return (
        <div className="follow-list" key={e.Recipes}>
          <span className="close">X</span>
          <div className="img">
            <img src={e.profile} alt="" />
          </div>
          <span>{e.userName}</span>
          <div className="totle-recip">
            <img src="/images/Likes.png" alt="" />
            <span>{e.Recipes}</span>
          </div>
          <Button>Follow Cook</Button>
        </div>
      )
    })
  }
  return (
    <div className={className}>
      <div className="Followlist-head">
        <h2>{title}</h2>
        <span>{discription}</span>
      </div>
      <Slider draggable={true} ref={sliderRef} {...settings}>
        {Followlist()}
      </Slider>
    </div>
  )
}

export default styled(FollowUsers)``
