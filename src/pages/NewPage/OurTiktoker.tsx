import { useOpenClose } from "@hooks"
import { ArrowRight, LeftSliderArrow, RightSliderArrow } from "@icons"
import React, { useRef, useState } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import ModalforTiktok from "./model/ModalforTiktok"
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

const OurTiktoker = ({ data = [], className, title, discription }: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [activeSlide, setActiveSlide] = useState(0)
  const sliderRef = useRef(null)
  const handlerSwiperOpen = (index: number) => {
    setActiveSlide(index)
    onOpenModel()
  }
  const hanldeClose = () => {
    onCloseModel()
  }
  const users = () => {
    return data.map((e: any, index: any) => {
      return (
        <div className="cookItemBox" key={index}>
          <div
            className="image-holder"
            onClick={() => handlerSwiperOpen(index)}
          >
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
    <div
      className={`class ${className} recipesSection socialCooksblock align-center`}
    >
      <header className="recipesSectionHeader">
        <strong className="recipesSectionTitle">{title}</strong>
        <div className="favorite-head">
          <span className="recipesSectionText">{discription}</span>
        </div>
        <a href="#" className="btnTikTok">
          <div>
            Latest
            <br />
            TikToks{" "}
            <span className="text">
              View All <ArrowRight />
            </span>
          </div>
        </a>
      </header>
      <Slider ref={sliderRef} {...settings}>
        {users()}
      </Slider>
      <ModalforTiktok
        isOpen={isOpenModel}

        items={data}
        onClose={hanldeClose}
        currentSlideIndex={activeSlide}
      />
    </div>
  )
}

export default styled(OurTiktoker)``
