import { Image } from "@components"
import { Clock, ProgressArrowUp } from "@icons"
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
  data: any[]
}

function PerformingRecipes(props: IRecipeProps) {
  const { data = [] } = props

  return (
    <div className="userProfileWrapper">
      {data.map((u: any, i: number) => {
        return (
          <RecipesWrapper className="receipeDetails" key={i}>
            <RecipesDetailsWrapper className="recipeholder">
              <Image className="recipeImage" src={u.image} alt={u.name} />
              <RecipesDetails className="receipeTextbox">
                <RecipeName className="recipename">{u.name}</RecipeName>
                <div className="recipemeta">
                  <div className="receipeRatings">{u.rating}</div>
                  <div className="receipeStatus">
                    {u.views} Views <span>{u.status} <ProgressArrowUp /></span>
                  </div>
                </div>
              </RecipesDetails>
            </RecipesDetailsWrapper>
          </RecipesWrapper>
        )
      })}
      <div className="weeklyReset">
        <Clock /> Resets Weekly:<span> 3 days 4 hours </span>
      </div>
    </div>
  )
}

export const PerformingRecipe = styled(PerformingRecipes)``
