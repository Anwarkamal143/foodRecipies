/* eslint-disable @next/next/no-img-element */
import React from "react"
import { FiChevronLeft } from "react-icons/fi"
import { useMobileMenu } from "./MobileMenuContext"
import AllMealTypeCategories from "./MobileRecipiesMenu/AllMealTypeCategories"
import {
  MobileRecipiesMenuItems,
  useMobileRecipiesMenu,
} from "./MobileRecipiesMenu/MobileRecipiesMenuContext"
import Recipes_By from "./MobileRecipiesMenu/Recipes_By"

function MobileRecipiesMenu() {
  return <MobileRecipiesMenuLogicalComponent />
}

function MobileRecipiesMenuLogicalComponent() {
  const { mobileRecipiesOpenState } = useMobileRecipiesMenu()
  return (
    <>
      {mobileRecipiesOpenState === "Recipes_By_All_Type" ? (
        <AllMealTypeCategories />
      ) : mobileRecipiesOpenState !== null ? (
        <Recipes_By />
      ) : (
        <div className="flex flex-col w-full h-full gap-4 py-4 bg-white ">
          {/* <MobileRecipiesMenuHeader /> */}
          {/* <p className="mt-2 text-sm text-gray-500 ">Quick Access Recipies</p> */}
          <MobileRecipiesMenuItems />
        </div>
      )}
    </>
  )
}

export function MobileRecipiesMenuHeader() {
  const { setOpenState } = useMobileMenu()
  const { mobileRecipiesOpenState, setMobileRecipiesOpenState } =
    useMobileRecipiesMenu()

  return (
    <div className="flex items-center w-full ">
      {mobileRecipiesOpenState === "Recipes_By_All_Type" ? (
        <MobileRecipiesNavigation
          icon="/svg/ExploreNewRecipies.svg"
          title="Explore new recipies"
          goNagivation={setMobileRecipiesOpenState}
        />
      ) : mobileRecipiesOpenState === "Recipes_By_Meal_Type" ? (
        <MobileRecipiesNavigation
          icon="/svg/ExploreNewRecipies.svg"
          title="By Meal Type"
          goNagivation={setMobileRecipiesOpenState}
        />
      ) : mobileRecipiesOpenState === "Recipes_By_Ingredient" ? (
        <MobileRecipiesNavigation
          icon="/svg/ExploreNewRecipies.svg"
          title="By Ingredient"
          goNagivation={setMobileRecipiesOpenState}
        />
      ) : mobileRecipiesOpenState === "Recipes_By_Nutrition" ? (
        <MobileRecipiesNavigation
          icon="/svg/ExploreNewRecipies.svg"
          title="By Nutrition"
          goNagivation={setMobileRecipiesOpenState}
        />
      ) : mobileRecipiesOpenState === "Recipes_By_Cuisine" ? (
        <MobileRecipiesNavigation
          icon="/svg/ExploreNewRecipies.svg"
          title="By Cuisine"
          goNagivation={setMobileRecipiesOpenState}
        />
      ) : mobileRecipiesOpenState === "Recipes_By_Cooking_Time" ? (
        <MobileRecipiesNavigation
          icon="/svg/ExploreNewRecipies.svg"
          title="By Cooking Time"
          goNagivation={setMobileRecipiesOpenState}
        />
      ) : mobileRecipiesOpenState === "Recipes_By_Leaderboards" ? (
        <MobileRecipiesNavigation
          icon="/svg/ExploreNewRecipies.svg"
          title="By Leaderboards"
          goNagivation={setMobileRecipiesOpenState}
        />
      ) : (
        <MobileRecipiesNavigation
          icon="/svg/ExploreNewRecipies.svg"
          title="Recipies"
          goNagivation={setOpenState}
        />
      )}
    </div>
  )
}

export function MobileRecipiesNavigation({ goNagivation, title, icon }) {
  return (
    <>
      <span className="p-4 pl-0 " onClick={() => goNagivation(null)}>
        <FiChevronLeft size="1rem" className="text-gray-900" />
      </span>
      <div className="flex items-center justify-center w-full gap-4 ">
        <img src={icon} alt="home" className="w-6" />
        <span className="font-medium text-gray-900">{title}</span>
      </div>
    </>
  )
}

export default MobileRecipiesMenu
