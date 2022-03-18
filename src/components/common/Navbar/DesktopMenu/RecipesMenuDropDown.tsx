/* eslint-disable @next/next/no-img-element */
import { UnstyledLink } from "@components"
import clsxm from "@lib/clsxm"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { FiChevronDown, FiChevronRight } from "react-icons/fi"
import MegaMenu, { MegaMenuButton, MegaMenuPanel } from "./MegaMenu"
import {
  ByCookingTime,
  ByIngredient,
  ByMealTypes,
  ByNutrition,
  ByRanking,
  ByWorld,
  recipies,
} from "./MenuData/MenuData"

function RecipesMenuDropDown() {
  return (
    <>
      <MegaMenu>
        <RecipesMegaMenu />
      </MegaMenu>
    </>
  )
}

function RecipesMegaMenu() {
  // const { handleClick, open } = useMegaMenuContext();

  return (
    <>
      <MegaMenuButton>
        <button
          // onClick={() => handleClick(open)}
          className={clsxm(
            "flex items-center gap-2 border-primary-100 px-3 py-2 pb-5 text-sm font-medium text-gray-300 hover:border-b-2 hover:text-primary-100 "
            // open ? 'border-b-2 text-primary-50' : ''
          )}
        >
          Recipes
          <FiChevronDown
            size="0.8rem"
            className="mt-1 transition-all transform  group-hover:rotate-180"
          />
        </button>
      </MegaMenuButton>
      <MegaMenuPanel className="-left-72 w-full lg:w-[90vw] xl:-left-96 xl:w-[70vw] 2xl:max-w-screen-lg">
        {/* <span className='block customArrow drop-shadow-md after:-top-3 after:left-52 '></span> */}

        <div className="flex ">
          {/*  Quick Access Recipies */}
          <div className="flex flex-col w-4/12 gap-6 p-6 pr-8 mb-4 text-left border-r ">
            <p className="ml-4 text-sm text-gray-500 ">Quick Access Recipies</p>
            <div className="flex flex-col">
              {recipies.length
                ? recipies.map(item => (
                    <div key={item.id}>
                      <UnstyledLink
                        href={item.href}
                        className="flex items-center justify-between p-4 text-sm font-medium text-gray-900 rounded-md  group hover:bg-blue-50"
                      >
                        <div className="flex items-center gap-4 ">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-6"
                          />
                          {item.title}
                        </div>
                        <BsArrowRight className="hidden mr-2  group-hover:block" />
                      </UnstyledLink>
                    </div>
                  ))
                : null}
            </div>
          </div>
          {/* By Meal Type */}
          <div className="grid w-8/12 grid-cols-2  xl:grid-cols-3">
            <div className="flex flex-col gap-4 p-6 text-left ">
              <UnstyledLink
                href="/"
                className="flex items-center gap-1 pb-2 ml-2 text-sm font-medium text-gray-900 border-b "
              >
                By Meal Type
                <FiChevronRight size="0.8rem " className="mt-1 " />
              </UnstyledLink>
              <div className="flex flex-col gap-1 ">
                {ByMealTypes.length
                  ? ByMealTypes.map(item => (
                      <div key={item.id}>
                        <UnstyledLink
                          href={item.href}
                          className="flex items-center justify-between p-2 text-xs font-medium text-gray-500 rounded-md  hover:bg-blue-50"
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

            <div className="flex flex-col gap-4 p-6 text-left ">
              <UnstyledLink
                href="/"
                className="flex items-center gap-1 pb-2 ml-2 text-sm font-medium text-gray-900 border-b "
              >
                By Infredient
                <FiChevronRight size="0.8rem " className="mt-1 " />
              </UnstyledLink>
              <div className="flex flex-col gap-1 ">
                {ByIngredient.length
                  ? ByIngredient.map(item => (
                      <div key={item.id}>
                        <UnstyledLink
                          href={item.href}
                          className="flex items-center justify-between p-2 text-xs font-medium text-gray-500 rounded-md  hover:bg-blue-50"
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

            <div className="flex flex-col gap-4 p-6 text-left ">
              <UnstyledLink
                href="/"
                className="flex items-center gap-1 pb-2 ml-2 text-sm font-medium text-gray-900 border-b "
              >
                By Nutrition
                <FiChevronRight size="0.8rem " className="mt-1 " />
              </UnstyledLink>
              <div className="flex flex-col gap-1 ">
                {ByNutrition.length
                  ? ByNutrition.map(item => (
                      <div key={item.id}>
                        <UnstyledLink
                          href={item.href}
                          className="flex items-center justify-between p-2 text-xs font-medium text-gray-500 rounded-md  hover:bg-blue-50"
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

            <div className="flex flex-col gap-4 p-6 text-left ">
              <UnstyledLink
                href="/"
                className="flex items-center gap-1 pb-2 ml-2 text-sm font-medium text-gray-900 border-b "
              >
                By World Cuisine
                <FiChevronRight size="0.8rem " className="mt-1 " />
              </UnstyledLink>
              <div className="flex flex-col gap-1 ">
                {ByWorld.length
                  ? ByWorld.map(item => (
                      <div key={item.id}>
                        <UnstyledLink
                          href={item.href}
                          className="flex items-center justify-between p-2 text-xs font-medium text-gray-500 rounded-md  hover:bg-blue-50"
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

            <div className="flex flex-col gap-4 p-6 text-left ">
              <UnstyledLink
                href="/"
                className="flex items-center gap-1 pb-2 ml-2 text-sm font-medium text-gray-900 border-b "
              >
                By Cooking Time
                <FiChevronRight size="0.8rem " className="mt-1 " />
              </UnstyledLink>
              <div className="flex flex-col gap-1 ">
                {ByCookingTime.length
                  ? ByCookingTime.map(item => (
                      <div key={item.id}>
                        <UnstyledLink
                          href={item.href}
                          className="flex items-center justify-between p-2 text-xs font-medium text-gray-500 rounded-md  hover:bg-blue-50"
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

            <div className="flex flex-col gap-4 p-6 text-left ">
              <UnstyledLink
                href="/"
                className="flex items-center gap-1 pb-2 ml-2 text-sm font-medium text-gray-900 border-b "
              >
                By Ranking
                <FiChevronRight size="0.8rem " className="mt-1 " />
              </UnstyledLink>
              <div className="flex flex-col gap-1 ">
                {ByRanking.length
                  ? ByRanking.map(item => (
                      <div key={item.id}>
                        <UnstyledLink
                          href={item.href}
                          className="flex items-center justify-between p-2 text-xs font-medium text-gray-500 rounded-md  hover:bg-blue-50"
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
        </div>
      </MegaMenuPanel>
    </>
  )
}

export default RecipesMenuDropDown
