/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnstyledLink } from "@Components"
import React, { useContext, useState } from "react"
import { FiChevronRight } from "react-icons/fi"

const MobileMenuProvider = React.createContext<any>(null)
MobileMenuProvider.displayName = "MobileMenuProvider"

function MobileMenuContext(props: any) {
  const [openState, setOpenState] = useState<string | null>(null)
  const handleState = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpenState(e.currentTarget.id)
  }
  const contextValue = { openState, handleState, setOpenState }

  return <MobileMenuProvider.Provider value={contextValue} {...props} />
}

export function MobileMenuItems() {
  const { handleState } = useMobileMenu()
  return (
    <>
      <ul className="flex flex-col gap-6 pb-4 mx-4 mt-6 border-b ">
        <li>
          <UnstyledLink
            href="/"
            className="flex items-center justify-between font-medium text-gray-500  hover:text-primary-50"
          >
            <div className="flex items-center gap-4 ">
              <img src="/svg/RecipiesOfTheDay.svg" alt="home" className="w-6" />
              <span>Home</span>
            </div>
            <FiChevronRight size="0.8rem " className="mr-2 " />
          </UnstyledLink>
        </li>

        <li>
          <UnstyledLink
            href="/"
            className="flex items-center justify-between font-medium text-gray-500  hover:text-primary-50"
            onClick={handleState}
            id="recipies"
          >
            <div className="flex items-center gap-4 ">
              <img
                src="/svg/ExploreNewRecipies.svg"
                alt="home"
                className="w-6"
              />
              <span>Recipies</span>
            </div>

            <FiChevronRight size="0.8rem " className="mr-2 " />
          </UnstyledLink>
        </li>

        <li>
          <UnstyledLink
            href="/"
            className="flex items-center justify-between font-medium text-gray-500  hover:text-primary-50"
            onClick={handleState}
            id="cooks"
          >
            <div className="flex items-center gap-4 ">
              <img
                src="/svg/RecipiesLeaderboard.svg"
                alt="home"
                className="w-6"
              />
              <span>Cooks</span>
            </div>

            <FiChevronRight size="0.8rem " className="mr-2 " />
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href="/"
            className="flex items-center justify-between font-medium text-gray-500  hover:text-primary-50"
            onClick={handleState}
            id="community"
          >
            <div className="flex items-center gap-4 ">
              <img src="/svg/RecipiesCat.svg" alt="home" className="w-6" />
              <span>Community</span>
            </div>

            <FiChevronRight size="0.8rem " className="mr-2 " />
          </UnstyledLink>
        </li>
      </ul>
      <ul className="flex flex-col gap-6 px-4 mt-6 ">
        <li>
          <UnstyledLink
            href="/"
            className="flex items-center justify-between font-medium text-gray-500  hover:text-primary-50"
            onClick={handleState}
            id="shoppingLists"
          >
            <div className="flex items-center gap-4 ">
              <img src="/svg/shoppingList.svg" alt="home" className="w-6" />
              <span>My Shopping Lists</span>
              <span className="px-2 py-1 text-xs text-blue-500 bg-blue-100 rounded-full ">
                215
              </span>
            </div>
            <FiChevronRight size="0.8rem " className="mr-2 " />
          </UnstyledLink>
        </li>

        <li>
          <UnstyledLink
            href="/"
            className="flex items-center justify-between font-medium text-gray-500  hover:text-primary-50"
            onClick={handleState}
            id="savedRecipes"
          >
            <div className="flex items-center gap-4 ">
              <img src="/svg/SavedRecipies.svg" alt="home" className="w-6" />
              <span>My Saved Recipes</span>
              <span className="px-2 py-1 text-xs text-blue-500 bg-blue-100 rounded-full ">
                215
              </span>
            </div>
            <FiChevronRight size="0.8rem " className="mr-2 " />
          </UnstyledLink>
        </li>
      </ul>
    </>
  )
}

export function useMobileMenu() {
  const context = useContext(MobileMenuProvider)
  if (!context)
    throw new Error(
      "useMobileMenu should use in between <MobileMenuContext> </MobileMenuContext>"
    )
  return context
}

export default MobileMenuContext
