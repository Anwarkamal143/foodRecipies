import {
  ArrowRight,
  ChevronRightIcon,
  LeftSliderArrow,
  RightSliderArrow,
} from "@icons"
import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import SearchBar from "./SearchBar"
type Props = {
  data?: any
  className?: string
  title?: string
  discription?: string
  viewAllBtn?: boolean
  isNavBar?: boolean
  rightIcon?: boolean
  header?: boolean
  searchBar?: boolean
  handleSilderData?: any
  rightIconTitle?: string
}
const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <RightSliderArrow />,
  prevArrow: <LeftSliderArrow />,
  draggable: true,
  swipe: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
}
const SliderNav = ({
  className,
  data = [],
  title,
  header = true,
  searchBar = false,
  discription,
  rightIcon = true,
  rightIconTitle = "View All Breakfast",
  isNavBar = true,
  handleSilderData,
  ...rest
}: Props) => {
  const [active, setActive] = useState<any>("")
  const sliderRef = useRef(null)
  useEffect(() => {
    if (data?.length) {
      setActive(data[0]?.category)
      handleSilderData?.(data[0]?.data, data[0]?.category)
    }
  }, [])
  const handleContent = (_id: string) => {
    setActive(_id)
    const filterData = data.filter((e: any) => {
      if (e.category === _id) {
        handleSilderData?.(e.data, _id)
        return e.data
      }
    })
  }
  const TypeSlider = () => {
    return data?.map((e: any) => {
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
      {header && (
        <header className="recipesSectionHeader">
          <strong className="recipesSectionTitle">{title}</strong>
          <div className="favorite-head">
            <span className="recipesSectionText">{discription}</span>
            {rightIcon && (
              <span className="feature-btn">
                {rightIconTitle}
                <span className="arrowIcon">
                  <span className="arrowShort">
                    <ChevronRightIcon />
                  </span>
                  <span className="arrowLong">
                    <ArrowRight />
                  </span>
                </span>{" "}
              </span>
            )}
          </div>
          {searchBar && (
            <SearchBar
              sortBy={[{ name: "Monthly" }]}
              placeholder="Search ..."
              options={{
                showSearchBar: true,
                showSwitchBox: false,
                showFilter: false,
                showSortBy: true,
              }}
            />
          )}
        </header>
      )}

      {isNavBar && (
        <div className="recipesCategoriesSlider">
          <Slider ref={sliderRef} {...settings} {...rest}>
            {TypeSlider()}
          </Slider>
        </div>
      )}
    </div>
  )
}

export default styled(SliderNav)``
