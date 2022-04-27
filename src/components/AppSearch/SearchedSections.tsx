import { ChevronRightIcon } from "@icons"
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
              Clear
            </span>
          </>
        ) : (
          <>
            <p className="section_title">Popular Recipes</p>{" "}
            <span onClick={onClickClear}>
              {" "}
              <Button
                shape="circle"
                iconRight={<ChevronRightIcon />}
                className="custom-button buttonViewAll"
                size="small"
              >
                View All
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
                iconRight={<ChevronRightIcon />}
                className="custom-button buttonViewAll"
                size="small"
              >
                View All
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
            </div>
            <div className="selection-category">
              <div className="image-hold">
                <img src="/images/italy.png" alt="side-dishes" />
              </div>
              <div className="itemTextbox">#Gluten-Free</div>
            </div>
            <div className="selection-category">
              <div className="image-hold">
                <img src="/images/glutenFree.svg" alt="side-dishes" />
              </div>
              <div className="itemTextbox">#Gluten-Free</div>
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
      display: block;
      font-size: 12px;
      line-height: 18px;
      color: #8d8d96;
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

      svg {
        margin: 0 -3px 0 3px;

        path {
          transition: all 0.4s ease;
        }
      }

      &:hover {
        color: #fff;
        background: #ff6067;
        border-color: #ff6067;

        path {
          fill: #fff;
        }
      }
    }
  }

  .searchRecipes,
  .searchCooks {
    overflow: hidden;
    margin: 0 0 30px;
  }

  .searchCooks {
    .itemArrow {
      display: none !important;
    }
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

        .itemTextbox {
          color: #ff6067;
        }

        svg {
          path {
            fill: #ff6067;
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
        font-size: 11px;
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
