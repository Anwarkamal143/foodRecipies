import { PlayIcon } from "@icons"
import classNames from "classnames"
import React, { useMemo } from "react"
import styled from "styled-components"

interface Props {
  className?: string
  title?: string
  category?: string
  price?: string
  cardImg?: string
  profImg?: string
  tag?: string
  isVideo?: boolean
  type?: "primary" | "secondary"
  onClick?: (...args: any) => void
}
const Card = (props: Props) => {
  const {
    className,
    cardImg,
    category,
    title,
    price,
    isVideo = false,
    onClick,
    profImg,
    tag,
    type,
  } = props
  const getComponent = useMemo(() => {
    switch (type) {
      case "primary":
        return (
          <React.Fragment>
            <div className="card-image">
              <img src={cardImg} alt="card" />
              <span>{tag}</span>
            </div>
            <div className="card-text-holder">
              <span>{category}</span>
              <h4>{title}</h4>
              <span>${price}</span>
            </div>
          </React.Fragment>
        )
      case "secondary":
        return (
          <React.Fragment>
            <div className="card-image">
              <img src={cardImg} alt="card" />
              <PlayIcon />
            </div>
            <div className="card-text-holder">
              <h4>{title}</h4>
              <div className="user-profile">
                <div className="img-profile">
                  <img src={profImg} alt="card" />
                </div>
                <span className="category-name">{category}</span>
              </div>
            </div>
          </React.Fragment>
        )
      default:
        break
    }
  }, [type])
  return (
    <div onClick={onClick} className={classNames(className)}>
      {getComponent}
    </div>
  )
}

export default styled(Card)``
