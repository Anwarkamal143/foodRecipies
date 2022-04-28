import { ChevronRightIcon } from "@icons"
import { settings } from "data"
import React, { useRef, useState } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import SliderContent from "./sliderContent"
type Props = {
  data?: any
  className?: string
  title?: string
  discription?: string
  viewAllBtn?: boolean
  isNavSlider?: boolean
  isContentSlider?: boolean
  isContent?: boolean
  isNavBar?: boolean
  rightIcon?: boolean
}

const SliderNav = ({
  className,
  data = [],
  title,
  discription,
  rightIcon = true,
  isNavSlider = true,
  isContentSlider,
  isContent = true,
  isNavBar,
}: Props) => {
  const [active, setActive] = useState<any>("")
  const sliderRef = useRef(null)
  const [silderData, setSilderData] = useState<any>([])

  const handleContent = (_id: string) => {
    setActive(_id)
    const filterData = data.filter((e: any) => {
      if (e.category === _id) {
        setSilderData(e.data)
        return e.data
      }
    })
  }
  const TypeSlider = () => {
    return data?.map((e: any, ind) => {
      return (
        <div
          onClick={() => handleContent(e.category)}
          key={e?.category}
          className={`recipesCategoriesButton ${className} ${
            e.category === active ? "active" : "in-active"
          }`}
        >
          <span className="img">
            <img src={e.image} />
          </span>
          <span>{e.category}</span>
        </div>
      )
    })
  }
  return (
    <div className={className}>
      <header className="recipesSectionHeader">
        <strong className="recipesSectionTitle">{title}</strong>
        <div className="favorite-head">
          <span className="recipesSectionText">{discription}</span>
          {rightIcon && (
            <span className="feature-btn">
              View All Breakfast <ChevronRightIcon />{" "}
            </span>
          )}
        </div>
      </header>
      
      {isNavBar &&
        (isNavSlider ? (
          <div className="recipesCategoriesSlider">
            <Slider ref={sliderRef} {...settings}>
              {TypeSlider()}
            </Slider>
          </div>
        ) : (
          <div className="recipesCategories">
            <TypeSlider />
          </div>
        ))}
      {isContent && (
        <SliderContent
          isContentSlider={isContentSlider}
          data={isNavBar ? silderData || [] : data}
        />
      )}
    </div>
  )
}

export default styled(SliderNav)``
