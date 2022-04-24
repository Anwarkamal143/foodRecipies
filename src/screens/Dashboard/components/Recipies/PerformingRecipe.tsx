import { Recipe } from "@apptypes/recipe"
import { Image, Scrollbar } from "@components"
import { ChevronDownIndicator, ChevronUpIndicator } from "@icons"
import React from "react"
import styled from "styled-components"
import {
  RecipeName,
  RecipesDetails,
  RecipesDetailsWrapper,
  RecipesWrapper
} from "./recipes.styled"
interface IRecipeProps {
  className?: string
  data: Recipe[]
}

function PerformingRecipes(props: IRecipeProps) {
  const { data = [] } = props

  return (
    <div className="userProfileWrapper">
      <Scrollbar autoHeightMax={410} autoHeight>
        {data.map((u: Recipe, i: number) => {
          return (
            <RecipesWrapper className="receipeDetails" key={i}>
              <RecipesDetailsWrapper className="recipeholder">
                <div className="recipeprogress">
                  <span>{u?.views?.progress}</span> {u.views?.status === 'down' ? <ChevronDownIndicator /> : <ChevronUpIndicator />}
                </div>
                <a href="#">
                  <Image className="recipeImage" src={u?.images?.[0] || ''} alt={u.name} />
                </a>
                <RecipesDetails className="receipeTextbox">
                  <RecipeName className="recipename">
                    <a href="#">{u.name}</a>
                  </RecipeName>
                  {/* <div className="recipemeta">
                    <div className="receipeRatings">{u.rating}</div>
                    <div className="receipeStatus">
                      <a href="#">
                        {u?.views?.total} Views{" "}
                        <span>
                          {u?.views?.progress} <ProgressArrowUp />
                        </span>
                      </a>
                    </div>
                  </div> */}
                </RecipesDetails>
              </RecipesDetailsWrapper>
            </RecipesWrapper>
          )
        })}
      </Scrollbar>
      {/* <div className="weeklyReset">
        <Clock /> Resets Weekly:<span> 3 days 4 hours </span>
      </div> */}
    </div>
  )
}

export const PerformingRecipe = styled(PerformingRecipes)``
