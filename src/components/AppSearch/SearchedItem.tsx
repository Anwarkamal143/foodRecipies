import { LinkArrowIcon } from "@icons"
import React from "react"
import styled from "styled-components"
import { Image } from "../Image"

type Props = {
  className?: string
  onArrowClick?: (...args: any) => void
  img: string
  id: string | number
  name: string
  newrecipes?: number
}

const SearchedItem = (props: Props) => {
  const { className, onArrowClick, img, id, name, newrecipes } = props
  return (
    <div className={className}>
      <div className="items">
        <div key={id} className="item">
          <Image src={img} alt={name} />
          <div className="itemTextbox">
            <p>{name}</p>
            {newrecipes && (
              <span className="btn-recipe btn-secondary">
                {newrecipes} new Recipes
              </span>
            )}
          </div>
          <span className="itemArrow">
            <LinkArrowIcon onClick={onArrowClick} />
          </span>
        </div>
      </div>
    </div>
  )
}

export const SearchedCookRecipeItem = styled(SearchedItem)`
  .item {
    display: flex;
    align-items: center;
    margin: 0 0 5px;
    padding: 7px 0;
    transition: all 0.4s ease;

    &:hover {
      background: #f3f5f8;
      padding: 7px 15px 7px 10px;
      border-radius: 6px;

      .itemTextbox {
        color: #ff6067;
      }

      svg {
        path {
          stroke: #ff6067;
        }
      }
    }

    path {
      transition: all 0.4s ease;
    }

    .userProfileImageWrap {
      width: 34px;
      height: 34px;
    }

    .itemTextbox {
      flex-grow: 1;
      flex-basis: 0;
      font-size: 14px;
      line-height: 18px;
      color: #1e1e2d;
      padding: 0 10px 0 15px;
      transition: all 0.4s ease;
      display: flex;
      align-items: center;
    }

    .btn-recipe {
      margin: 0 0 0 10px;
    }
  }
`
