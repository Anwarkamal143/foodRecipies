/* eslint-disable @next/next/no-img-element */
import { UnstyledLink } from "@components"
import React from "react"
import {
  ByCookingTime,
  ByIngredient,
  ByMealTypes,
  ByNutrition,
  ByRanking,
  ByWorld,
} from "../../DesktopMenu/MenuData/MenuData"
import { useMobileRecipiesMenu } from "./MobileRecipiesMenuContext"

function AllMealTypeCategories() {
  const { setMobileRecipiesOpenState } = useMobileRecipiesMenu()
  return (
    <div className="flex flex-col w-full h-full bg-white ">
      <div className="w-full px-4 overflow-y-scroll ">
        <div className="flex flex-col gap-4 py-6 text-left ">
          <UnstyledLink href="/" className="text-sm font-medium text-gray-900 ">
            By Meal Type
          </UnstyledLink>
          {ByMealTypes.length
            ? ByMealTypes.map(item => (
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

        <div className="flex flex-col gap-4 py-6 text-left ">
          <UnstyledLink href="/" className="text-sm font-medium text-gray-900 ">
            By Infredient
          </UnstyledLink>
          {ByIngredient.length
            ? ByIngredient.map(item => (
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

        <div className="flex flex-col gap-4 py-6 text-left ">
          <UnstyledLink href="/" className="text-sm font-medium text-gray-900 ">
            By Nutrition
          </UnstyledLink>
          {ByNutrition.length
            ? ByNutrition.map(item => (
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

        <div className="flex flex-col gap-4 py-6 text-left ">
          <UnstyledLink href="/" className="text-sm font-medium text-gray-900 ">
            By World Cuisine
          </UnstyledLink>
          {ByWorld.length
            ? ByWorld.map(item => (
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

        <div className="flex flex-col gap-4 py-6 text-left ">
          <UnstyledLink href="/" className="text-sm font-medium text-gray-900 ">
            By Cooking Time
          </UnstyledLink>
          {ByCookingTime.length
            ? ByCookingTime.map(item => (
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

        <div className="flex flex-col gap-4 py-6 text-left ">
          <UnstyledLink
            href="/"
            className="text-sm font-medium text-gray-900 "
          >
            By Ranking
          </UnstyledLink>
          {ByRanking.length
            ? ByRanking.map(item => (
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
      </div>
    </div>
  )
}

export default AllMealTypeCategories
