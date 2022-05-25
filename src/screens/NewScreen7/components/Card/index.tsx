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
            <div>
              <img src={cardImg} alt="card" />
              <span>{tag}</span>
            </div>
            <span>{category}</span>
            <h4>{title}</h4>
            <span>${price}</span>
          </React.Fragment>
        )
      case "secondary":
        return (
          <React.Fragment>
            <div>
              <img src={cardImg} alt="card" />
              <PlayIcon />
            </div>
            <h4>{title}</h4>
            <div>
              <img src={profImg} alt="card" />
              <span>{category}</span>
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
