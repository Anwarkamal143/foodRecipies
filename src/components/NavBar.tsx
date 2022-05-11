import { ArrowRight, ChevronRightIcon } from "@icons"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
type Props = {
  data?: any
  className?: string
  title?: string
  discription?: string
  viewAllBtn?: boolean
  isNavBar?: boolean
  rightIcon?: boolean
  handleSilderData?: any
}

const NavBar = ({
  className,
  data = [],
  title,
  discription,
  rightIcon = true,
  isNavBar = true,
  handleSilderData,
}: Props) => {
  const [active, setActive] = useState<any>("")
  const sliderRef = useRef(null)
  const [silderData, setSilderData] = useState<any>([])
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
        handleSilderData?.(e.data)
        return e.data
      }
    })
  }
  const NavBarData = () => {
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
      <header className="recipesSectionHeader">
        <strong className="recipesSectionTitle">{title}</strong>
        <div className="favorite-head">
          <span className="recipesSectionText">{discription}</span>
          {rightIcon && (
            <span className="feature-btn">
              View Latest Recipes{" "}
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
      </header>
      {isNavBar && (
        <div className="recipesCategories">
          {" "}
          <NavBarData />
        </div>
      )}
    </div>
  )
}

export default styled(NavBar)``
