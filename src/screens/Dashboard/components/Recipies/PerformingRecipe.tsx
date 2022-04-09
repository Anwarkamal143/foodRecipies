import { Image, Scrollbar } from "@components"
import { Clock, ProgressArrowUp } from "@icons"
import React from "react"
import styled from "styled-components"
import {
  RecipeName,
  RecipesDetails,
  RecipesDetailsWrapper,
  RecipesWrapper,
} from "./recipes.styled"
interface IRecipeProps {
  className?: string
  data: any[]
}

function PerformingRecipes(props: IRecipeProps) {
  const { data = [] } = props

  return (
    <div className="userProfileWrapper">
      <Scrollbar autoHeightMax={410} autoHeight>
        {data.map((u: any, i: number) => {
          return (
            <RecipesWrapper className="receipeDetails" key={i}>
              <RecipesDetailsWrapper className="recipeholder">
                <a href="#">
                  <Image className="recipeImage" src={u.image} alt={u.name} />
                </a>
                <RecipesDetails className="receipeTextbox">
                  <RecipeName className="recipename">
                    <a href="#">{u.name}</a>
                  </RecipeName>
                  <div className="recipemeta">
                    <div className="receipeRatings">{u.rating}</div>
                    <div className="receipeStatus">
                      <a href="#">
                        {u.views} Views{" "}
                        <span>
                          {u.status} <ProgressArrowUp />
                        </span>
                      </a>
                    </div>
                  </div>
                </RecipesDetails>
              </RecipesDetailsWrapper>
            </RecipesWrapper>
          )
        })}
      </Scrollbar>
      <div className="weeklyReset">
        <Clock /> Resets Weekly:<span> 3 days 4 hours </span>
      </div>
    </div>
  )
}

export const PerformingRecipe = styled(PerformingRecipes)``
