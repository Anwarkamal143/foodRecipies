import { Image } from "@components"
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
      {data.map((u: any, i: number) => {
        return (
          <RecipesWrapper className="receipeDetails" key={i}>
            <RecipesDetailsWrapper className="recipeholder">
              <Image className="recipeImage" src={u.image} alt={u.name} />
              <RecipesDetails className="receipedetails">
                <RecipeName className="recipename">{u.name}</RecipeName>
                <div className="recipemeta">
                  <div>{u.rating}</div>
                  <div>
                    {u.views} <span>{u.status}</span>
                  </div>
                </div>
              </RecipesDetails>
            </RecipesDetailsWrapper>
          </RecipesWrapper>
        )
      })}
    </div>
  )
}

export const PerformingRecipe = styled(PerformingRecipes)``
