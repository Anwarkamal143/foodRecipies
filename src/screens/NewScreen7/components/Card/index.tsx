import classNames from "classnames"
import React, { useMemo } from "react"
import { BsArrowRight } from "react-icons/bs"
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
            <div className="recipie-primary-card">
              <div className="card-image">
                <img src={cardImg} alt="card" />
                <span className="tag">{tag}</span>
              </div>
              <div className="card-text-holder">
                <span className="category-type">{category}</span>
                <h4>
                  <span className="heading-text">
                    {title} <BsArrowRight className="arrow" />
                  </span>
                </h4>
                <strong className="amount">${price}</strong>
              </div>
            </div>
          </React.Fragment>
        )
      case "secondary":
        return (
          <React.Fragment>
            <div className="recipie-secondary-card">
              <div className="card-image">
                <img src={cardImg} alt="card" />
                <span className="btn-play"></span>
              </div>
              <div className="card-text-holder">
                <h4>
                  <span className="heading-text">
                    {title} <BsArrowRight className="arrow" />
                  </span>
                </h4>
                <div className="user-profile">
                  <div className="img-profile">
                    <img src={profImg} alt="card" />
                  </div>
                  <span className="category-name">{category}</span>
                </div>
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

export default styled(Card)`
  .recipie-primary-card {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    position: relative;
    overflow: hidden;

    .card-image {
      position: relative;

      img {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }

    .card-text-holder {
      padding: 10px 15px;
    }

    .category-type {
      display: block;
      color: #86909c;
      font-size: 10px;
      line-height: 12px;
      margin: 0 0 5px;
    }

    .amount {
      display: block;
      color: #2b6c41;
      font-size: 12px;
      line-height: 15px;
      font-weight: 700;
    }

    .tag {
      background: #1f2a43;
      color: #fff;
      padding: 8px 10px;
      font-size: 10px;
      line-height: 12px;
      position: absolute;
      right: 0;
      top: 30px;

      &:after {
        border-style: solid;
        border-width: 0 10px 14px 0;
        border-color: transparent #1f2a43 transparent transparent;
        position: absolute;
        top: 0;
        right: 100%;
        content: "";
      }

      &:before {
        border-style: solid;
        border-width: 0 0 14px 10px;
        border-color: transparent transparent #1f2a43 transparent;
        position: absolute;
        bottom: 0;
        right: 100%;
        content: "";
      }
    }
  }

  .recipie-secondary-card {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    position: relative;
    overflow: hidden;

    .card-image {
      position: relative;

      img {
        width: 100%;
        height: auto;
        vertical-align: top;
      }

      .btn-play {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 32px;
        height: 32px;
        border-radius: 100%;
        background: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        transition: all 0.4s ease;

        &:hover {
          background: rgba(255, 255, 255, 1);
        }

        &:after {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          content: "";
          border-style: solid;
          border-width: 5px 0 5px 10px;
          border-color: transparent transparent transparent #e0464d;
        }
      }
    }

    .card-text-holder {
      padding: 10px 15px;
    }

    .user-profile {
      display: flex;
      flex-direction: row;
      font-size: 9px;
      line-height: 12px;
      color: #6d6d6d;
      align-items: center;

      .img-profile {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        margin: 0 5px 0 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 100%;
        }
      }
    }
  }

  h4 {
    font-size: 11px;
    line-height: 14px;
    margin: 0 0 8px;
    font-weight: 700;
    color: #1e1e2d;
    cursor: pointer;

    &:hover {
      color: #e0464d;

      .arrow {
        opacity: 1;
        visibility: visible;
        margin: 0 0 0 5px;
      }
    }

    .heading-text {
      display: inline-block;
      vertical-align: top;
    }

    .arrow {
      display: inline-block;
      vertical-align: middle;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
    }
  }
`
