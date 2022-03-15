import { UnstyledLink } from "@components"
import React, { useEffect, useState } from "react"
import {
  ByCookingTime,
  ByIngredient,
  ByMealTypes,
  ByNutrition,
  ByRanking,
  ByWorld,
} from "../../DesktopMenu/MenuData/MenuData"
import { useMobileRecipiesMenu } from "./MobileRecipiesMenuContext"

function SelectedRecipesType() {
  const { mobileRecipiesOpenState } = useMobileRecipiesMenu()

  const [meal, setMeal] = useState(ByMealTypes)

  useEffect(() => {
    mobileRecipiesOpenState === "Recipes_By_Meal_Type"
      ? setMeal(ByMealTypes)
      : mobileRecipiesOpenState === "Recipes_By_Ingredient"
      ? setMeal(ByIngredient)
      : mobileRecipiesOpenState === "Recipes_By_Nutrition"
      ? setMeal(ByNutrition)
      : mobileRecipiesOpenState === "Recipes_By_Cuisine"
      ? setMeal(ByWorld)
      : mobileRecipiesOpenState === "Recipes_By_Cooking_Time"
      ? setMeal(ByCookingTime)
      : mobileRecipiesOpenState === "Recipes_By_Leaderboards"
      ? setMeal(ByRanking)
      : setMeal(ByMealTypes)
  }, [mobileRecipiesOpenState])

  return (
    <>
      <div className="flex flex-col gap-4 py-6 mb-6 text-left ">
        <p className="text-sm font-medium text-gray-900 ">
          By {mobileRecipiesOpenState.split("_").slice(1).join(" ")}
        </p>
        {meal.length
          ? meal.map(item => (
              <div key={item.id}>
                <UnstyledLink
                  href={item.href}
                  className="flex items-center justify-between text-xs font-medium text-gray-500 rounded-md "
                >
                  <div className="flex items-center gap-2 ">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-4"
                    />
                    <p>{item.title}</p>
                  </div>
                </UnstyledLink>
              </div>
            ))
          : null}
      </div>
    </>
  )
}

function Recipes_By() {
  const { setMobileRecipiesOpenState } = useMobileRecipiesMenu()

  return (
    <div className="w-full px-4 overflow-y-scroll ">
      <SelectedRecipesType />
      <div
        onClick={() => setMobileRecipiesOpenState("Recipes_By_All_Type")}
        className="flex items-center justify-center p-2 font-bold text-gray-600 bg-gray-100 rounded-full "
      >
        <span>See All Meal Type Categories</span>
      </div>
    </div>
  )
}

export default Recipes_By
