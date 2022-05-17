import { ArrowRight, ChevronRightIcon, LinkArrowIcon } from "@icons"
import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { SearchCooksMockData, SearchRecipesMockData } from "./data"
import { SearchedCookRecipeItem } from "./SearchedItem"

type Props = {
  className?: string
  onClickClear?: (...args: any) => void
  isSearchingEnable?: boolean
}

const SearchedRecipesAndCooks = (props: Props) => {
  const { className, onClickClear, isSearchingEnable = false } = props

  return (
    <div className={`${className} searchPopup`}>
      <div className="searchHeaderSection">
        {isSearchingEnable ? (
          <>
            <p className="section_title">Recipes</p>{" "}
            <span className="section_title" onClick={onClickClear}>
              <span>Clear</span> <ArrowRight className="iconArrow" />
            </span>
          </>
        ) : (
          <>
            <p className="section_title">Popular Recipes</p>{" "}
            <span onClick={onClickClear}>
              {" "}
              <Button
                shape="circle"
                className="custom-button buttonViewAll"
                size="small"
              >
                View All
                <span className="arrowIcon"><span className="arrowShort"><ChevronRightIcon /></span><span className="arrowLong"><ArrowRight /></span></span>
              </Button>{" "}
            </span>{" "}
          </>
        )}
      </div>

      <div className="searchRecipes">
        {SearchRecipesMockData.map(recipe => {
          return <SearchedCookRecipeItem {...recipe} key={recipe.id} />
        })}
      </div>
      <div className="searchHeaderSection">
        {isSearchingEnable ? (
          <>
            <p className="section_title">Cooks</p>{" "}
          </>
        ) : (
          <>
            <p className="section_title">Trending Cooks</p>{" "}
            <span onClick={onClickClear}>
              {" "}
              <Button
                shape="circle"
                className="custom-button buttonViewAll"
                size="small"
              >
                View All
                <span className="arrowIcon"><span className="arrowShort"><ChevronRightIcon /></span><span className="arrowLong"><ArrowRight /></span></span>
              </Button>{" "}
            </span>{" "}
          </>
        )}
      </div>

      <div className="searchCooks">
        {SearchCooksMockData.map(recipe => {
          return <SearchedCookRecipeItem {...recipe} key={recipe.id} />
        })}
      </div>

      {!isSearchingEnable ? (
        <div>
          <div className="searchHeaderSection">
            <p className="section_title">What We’re Into Right Now</p>
          </div>
          <div className="selection">
            <div className="selection-category">
              <div className="image-hold">
                <img src="/images/side-dishes.svg" alt="side-dishes" />
              </div>
              <div className="itemTextbox">#Chicken</div>
              <span className="itemArrow">
                <LinkArrowIcon />
              </span>
            </div>
            <div className="selection-category">
              <div className="image-hold">
                <img src="/images/italy.png" alt="side-dishes" />
              </div>
              <div className="itemTextbox">#Gluten-Free</div>
              <span className="itemArrow">
                <LinkArrowIcon />
              </span>
            </div>
            <div className="selection-category">
              <div className="image-hold">
                <img src="/images/glutenFree.svg" alt="side-dishes" />
              </div>
              <div className="itemTextbox">#Gluten-Free</div>
              <span className="itemArrow">
                <LinkArrowIcon />
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export const SearchedSections = styled(SearchedRecipesAndCooks)`
  .searchHeaderSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 10px;
    border-bottom: 1px solid #e6e6e6;
    margin: 0 0 10px;

    .section_title {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 18px;
      color: #8d8d96;

      svg {
        width: 10px;
        height: 10px;
        margin: 0 0 0 5px;
        position: relative;
        top: 2px;
        right: 0;
        transition: all 0.25s ease;
        display: none;

        path {
          stroke: #e0464d;
        }
      }
    }

    span.section_title {
      color: #e0464d;
      cursor: pointer;

      &:hover {
        svg {
          right: -3px;
        }
      }
    }

    .buttonViewAll {
      font-size: 10px;
      line-height: 14px;
      min-width: 70px;
      color: #8d8d96;
      padding: 4px 10px;
      background: #fff;
      border: 1px solid #e5e8ef;
      display: flex;
      align-items: center;
      justify-content: center;

      .text-button {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .arrowIcon {
        position: relative;
        width: 12px;
        right: 0;
        margin: 0 -3px 0 5px;
        transition: all 0.25s ease-in-out;
      }

      .arrowShort {
        position: absolute;
        left: 55%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.25s ease-in-out;
      }

      .arrowLong {
        display: block;
        opacity: 0;
        transition: all 0.25s ease-in-out;

        svg {
          width: 8px;
          height: 8px;

          path {
            stroke: #8d8d96;
          }
        }
      }

      &:hover {
        color: #fff;
        background: #ff6067;
        border-color: #ff6067;

        .arrowIcon {
          right: -3px;
        }

        path {
          fill: #fff;
        }

        .arrowShort {
          opacity: 0;
        }

        .arrowLong {
          opacity: 1;

          svg {
            path {
              fill: transparent;
              stroke: #fff;
            }
          }
        }
      }
    }
  }

  .searchRecipes,
  .searchCooks {
    overflow: hidden;
    margin: 0 0 30px;
  }

  .selection {
    .selection-category {
      display: flex;
      align-items: center;
      margin: 0 0 5px;
      padding: 5px 0;
      transition: all 0.4s ease;

      &:hover {
        background: #f3f5f8;
        padding: 5px;
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

      .image-hold {
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
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
  }
`
