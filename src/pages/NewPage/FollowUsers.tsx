import { Button } from "@components"
import { AddCookIcon, AngleRight, LeftSliderArrow, RightSliderArrow } from "@icons"
import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import { toast } from "src/components/toaster"

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
    }
  ],
}

const FollowUsers = ({ className, data = [], title, discription }: Props) => {

  const sliderRef = useRef(null)
  const Followlist = () => {
    return data.map((e: any) => {
      return (
        <div className="onlineCookBox" key={e.Recipes}>
          <span className="close">X</span>
          <div className="image">
            <img src={e.profile} alt="" />
          </div>
          <div className="textbox">
            <span className="userName"><a href="#">{e.userName} <AngleRight /></a></span>
            <div className="totle-recip">
              <ul className="likeImagesList">
                <li><a href="#"><img src="/images/img-like01.png" alt="" /></a></li>
                <li><a href="#"><img src="/images/img-like02.png" alt="" /></a></li>
              </ul>
              <a className="recepiesCont" href="#">{e.Recipes} Recipes <AngleRight /></a>
            </div>
            <Button onClick={()=> toast.follow('You followed Sam The Cooking Guy')}><AddCookIcon /> Follow Cook</Button>
          </div>
        </div>
      )
    })
  }
  return (
    <div className={`${className} recipesSection align-center onlineCookBlock`}>
      <header className="recipesSectionHeader">
        <strong className="recipesSectionTitle">{title}</strong>
        <div className="favorite-head">
          <span className="recipesSectionText">{discription}</span>
        </div>
      </header>
      <Slider draggable={true} ref={sliderRef} {...settings}>
        {Followlist()}
      </Slider>
    </div>
  )
}

export default styled(FollowUsers)``
