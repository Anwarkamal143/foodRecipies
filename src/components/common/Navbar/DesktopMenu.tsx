/* eslint-disable @next/next/no-img-element */
import { UnstyledLink } from "@components"
import { useAppDispatch } from "@hooks"
import { BurgerIcon, SearchIcon } from "@icons"
import { toggleSidebar } from "@reducers"
import React from "react"
import { BiBell } from "react-icons/bi"
import CommunityMenuDropDown from "./DesktopMenu/CommunityMenuDropDown"
import CooksMenuDropDown from "./DesktopMenu/CooksMenuDropDown"
import ProfileDropDown from "./DesktopMenu/ProfileDropDown"
import RecipesMenuDropDown from "./DesktopMenu/RecipesMenuDropDown"
import WishListDropDown from "./DesktopMenu/WishListDropDown"

function DesktopMenu() {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex items-center self-end mainNavigation">
        <div className="hidden lg:ml-6 lg:block mainNavigationWrap">
          <div className="flex space-x-8">
            <ul className="siteNavigation">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <li className="burgerMenu">
                <a className="flex items-center gap-2 border-primary-100 px-3 py-2 pb-5 text-sm font-medium text-gray-300 hover:border-b-2 hover:text-primary-100" href="#"><BurgerIcon/> Menu</a>
              </li>
              <li>
                <UnstyledLink
                  href="#"
                  className="px-3 py-2 pb-5 text-sm font-medium border-b-2 border-primary-100 text-primary-100"
                >
                  Home
                </UnstyledLink>
              </li>
              <li>
                <RecipesMenuDropDown />
              </li>
              <li>
                <CooksMenuDropDown />
              </li>
              <li>
                <CommunityMenuDropDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="block lg:ml-6 headerAdditionalLinks">
        <div className="flex items-center gap-x-10">
          <div className="items-center hidden gap-6 sm:flex">
            {/* <LanguageSelectDropDown /> */}
            {/* <AppStoreDropDown /> */}
            <span className="headerSearchForm" onClick={() => dispatch(toggleSidebar(true))}>
              <SearchIcon />
              <span className="text">Search...</span>
            </span>
            <WishListDropDown />
          </div>

          {/* Profile dropdown */}
          <div className="flex items-center gap-3 sm:gap-0">
            <span className="headerSearchForm sm:hidden" onClick={() => dispatch(toggleSidebar(true))}>
              <SearchIcon />
              <span className="text">Search...</span>
            </span>
            <div className="relative text-white sm:hidden">
              <BiBell
                size="1.4rem"
                aria-hidden="true"
                className="animate-shake"
              />
              <span className="absolute flex items-center justify-center w-3 h-3 p-1 text-xs text-white rounded-full -top-1 -right-1 bg-primary-50">
                4
              </span>
            </div>
            <ProfileDropDown />
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopMenu
