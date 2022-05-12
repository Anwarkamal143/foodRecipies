/* eslint-disable @next/next/no-img-element */
import { UnstyledLink } from "@components"
import { DairyFree, GlutenFree, NutFree, Vegan, Vegetarian } from "@icons"
import clsxm from "@lib/clsxm"
import React from "react"
import { BsArrowRight, BsPlus } from "react-icons/bs"
import { FiChevronDown, FiChevronRight } from "react-icons/fi"
import MegaMenu, { MegaMenuButton, MegaMenuPanel } from "./MegaMenu"
import {
  ByCookingTime,
  ByIngredient,
  ByMealTypes,
  ByNutrition,
  ByRanking,
  ByWorld,
  recipies
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
      <MegaMenuPanel className="-left-72 w-full lg:w-[90vw] xl:-left-96 xl:w-[70vw] 2xl:max-w-screen-lg headerMegaMenu">
        {/* <span className='block customArrow drop-shadow-md after:-top-3 after:left-52 '></span> */}
        <div className="megaMenuWrapper">
          <div className="menuLeftColumn">
            <div className="menuBox smallStyle">
              <strong className="title">Recipe Quick Access</strong>
              <ul className="menuBoxItems">
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon01.png" alt="" width={13} /></div>
                    <div className="text">
                      <strong className="subtite">My Food Feed +</strong>
                      <span className="subtext">Curated For Easy Browsing</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon02.png" alt="" width={12} /></div>
                    <div className="text">
                      <strong className="subtite">Recipe Leaderboards</strong>
                      <span className="subtext">What’s Trending Now?</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon03.png" alt="" width={11} /></div>
                    <div className="text">
                      <strong className="subtite">Recipe Video Tutorials</strong>
                      <span className="subtext">Browse Cooking Videos</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menuBox smallStyle">
              <strong className="title">My Favorites</strong>
              <ul className="menuBoxItems">
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon04.png" alt="" width={12} /></div>
                    <div className="text">
                      <strong className="subtite">My Favorite Recipes</strong>
                      <span className="subtext">Browse Saved Recipes</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon05.png" alt="" width={13} /></div>
                    <div className="text">
                      <strong className="subtite">My Favorite Cooks</strong>
                      <span className="subtext">View Followed Cooks</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="icon"><img src="/images/nav-icon06.png" alt="" width={12} /></div>
                    <div className="text">
                      <strong className="subtite">My Shopping Lists</strong>
                      <span className="subtext">Ready to cook?</span>
                    </div>
                    <BsArrowRight className="arrow"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="menuRightColumn">
            <div className="menuNavBoxHolder">
              <div className="menuNavBox">
                <a href="#" className="buttonView">See All <FiChevronRight /></a>
                <strong className="title">By Meal Type <FiChevronRight className="iconArrow" /><BsPlus className="iconPlus"/></strong>
                <ul className="menuNavList">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg01.png" alt="" width={13} /></div>
                      <div className="text">Appetizers</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg07.png" alt="" width={12} /></div>
                      <div className="text">Deserts</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg02.png" alt="" width={16} /></div>
                      <div className="text">Breakfast</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg06.png" alt="" width={14} /></div>
                      <div className="text">Dinner</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg13.png" alt="" width={13} /></div>
                      <div className="text">Baked Goods</div>
                    </a>
                  </li>
                </ul>
                <ul className="menuNavList visibleMobile">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg01.png" alt="" width={13} /></div>
                      <div className="text">Appetizers</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg07.png" alt="" width={12} /></div>
                      <div className="text">Deserts</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg02.png" alt="" width={16} /></div>
                      <div className="text">Breakfast</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg06.png" alt="" width={14} /></div>
                      <div className="text">Dinner</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/icon-lg13.png" alt="" width={13} /></div>
                      <div className="text">Baked Goods</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menuNavBox">
                <a href="#" className="buttonView">See All <FiChevronRight /></a>
                <strong className="title">By Ingredient  <FiChevronRight className="iconArrow" /><BsPlus className="iconPlus"/></strong>
                <ul className="menuNavList">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon07.png" alt="" width={13} /></div>
                      <div className="text">Beef</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon08.png" alt="" width={14} /></div>
                      <div className="text">Chicken</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon09.png" alt="" width={13} /></div>
                      <div className="text">Pasta</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon10.png" alt="" width={13} /></div>
                      <div className="text">Pork</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon11.png" alt="" width={10} /></div>
                      <div className="text">Fish</div>
                    </a>
                  </li>
                </ul>
                <ul className="menuNavList visibleMobile">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon07.png" alt="" width={13} /></div>
                      <div className="text">Beef</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon08.png" alt="" width={14} /></div>
                      <div className="text">Chicken</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon09.png" alt="" width={13} /></div>
                      <div className="text">Pasta</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon10.png" alt="" width={13} /></div>
                      <div className="text">Pork</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon11.png" alt="" width={10} /></div>
                      <div className="text">Fish</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menuNavBox">
                <a href="#" className="buttonView">See All <FiChevronRight /></a>
                <strong className="title">By Diet <FiChevronRight className="iconArrow" /><BsPlus className="iconPlus"/></strong>
                <ul className="menuNavList">
                  <li>
                    <a href="#">
                      <div className="icon"><Vegetarian /></div>
                      <div className="text">Vegetarian</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><GlutenFree /></div>
                      <div className="text">Gluten Free</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><DairyFree /></div>
                      <div className="text">Dairy Free</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><Vegan /></div>
                      <div className="text">Vegan</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><NutFree /></div>
                      <div className="text">Nut Free</div>
                    </a>
                  </li>
                </ul>
                <ul className="menuNavList visibleMobile">
                  <li>
                    <a href="#">
                      <div className="icon"><Vegetarian /></div>
                      <div className="text">Vegetarian</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><GlutenFree /></div>
                      <div className="text">Gluten Free</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><DairyFree /></div>
                      <div className="text">Dairy Free</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><Vegan /></div>
                      <div className="text">Vegan</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><NutFree /></div>
                      <div className="text">Nut Free</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menuNavBox">
                <a href="#" className="buttonView">See All <FiChevronRight /></a>
                <strong className="title">By World Cuisine <FiChevronRight className="iconArrow" /><BsPlus className="iconPlus"/></strong>
                <ul className="menuNavList">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/italy.png" alt="" width={13} /></div>
                      <div className="text">Italian</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/asian.png" alt="" width={13} /></div>
                      <div className="text">Asian</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/american.png" alt="" width={13} /></div>
                      <div className="text">American</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/mexican.png" alt="" width={13} /></div>
                      <div className="text">Mexican</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/india.png" alt="" width={13} /></div>
                      <div className="text">Indian</div>
                    </a>
                  </li>
                </ul>
                <ul className="menuNavList visibleMobile">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/italy.png" alt="" width={13} /></div>
                      <div className="text">Italian</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/asian.png" alt="" width={13} /></div>
                      <div className="text">Asian</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/american.png" alt="" width={13} /></div>
                      <div className="text">American</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/mexican.png" alt="" width={13} /></div>
                      <div className="text">Mexican</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/india.png" alt="" width={13} /></div>
                      <div className="text">Indian</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menuNavBox">
                <a href="#" className="buttonView">See All <FiChevronRight /></a>
                <strong className="title">By Ingredient <FiChevronRight className="iconArrow" /><BsPlus className="iconPlus"/></strong>
                <ul className="menuNavList">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon12.png" alt="" width={13} /></div>
                      <div className="text">&#60; 30 Minutes</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon13.png" alt="" width={13} /></div>
                      <div className="text">&#60; 5 Ingredients</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon14.png" alt="" width={13} /></div>
                      <div className="text">Slow Cooker</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon15.png" alt="" width={13} /></div>
                      <div className="text">Easy Recipes</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon16.png" alt="" width={14} /></div>
                      <div className="text">Kid-Friendly</div>
                    </a>
                  </li>
                </ul>
                <ul className="menuNavList visibleMobile">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon12.png" alt="" width={13} /></div>
                      <div className="text">30 Minutes or Less</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon13.png" alt="" width={13} /></div>
                      <div className="text">5 Ingredients or Less</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon14.png" alt="" width={13} /></div>
                      <div className="text">Slow Cooker</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon15.png" alt="" width={13} /></div>
                      <div className="text">Easy Recipes</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon16.png" alt="" width={14} /></div>
                      <div className="text">Kid-Friendly</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menuNavBox">
                <a href="#" className="buttonView">See All <FiChevronRight /></a>
                <strong className="title">By Ranking <FiChevronRight className="iconArrow" /><BsPlus className="iconPlus"/></strong>
                <ul className="menuNavList">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon17.png" alt="" width={13} /></div>
                      <div className="text">Top Rated</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon18.png" alt="" width={15} /></div>
                      <div className="text">Recently Added</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon19.png" alt="" width={14} /></div>
                      <div className="text">Most Liked</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon20.png" alt="" width={13} /></div>
                      <div className="text">Most Viewed</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon21.png" alt="" width={14} /></div>
                      <div className="text">Featured</div>
                    </a>
                  </li>
                </ul>
                <ul className="menuNavList visibleMobile">
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon17.png" alt="" width={13} /></div>
                      <div className="text">Top Rated</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon18.png" alt="" width={15} /></div>
                      <div className="text">Recently Added</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon19.png" alt="" width={14} /></div>
                      <div className="text">Most Liked</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon20.png" alt="" width={13} /></div>
                      <div className="text">Most Viewed</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon"><img src="/images/nav-icon21.png" alt="" width={14} /></div>
                      <div className="text">Featured</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex display-none">
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
