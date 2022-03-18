/* eslint-disable @next/next/no-img-element */
import { CircleImage } from "@components"
import React from "react"
import { IoHeartOutline } from "react-icons/io5"
import { useMobileMenu } from "./MobileMenuContext"
import { MobileRecipiesNavigation } from "./MobileRecipiesMenu"

function MobileSavedRecipes() {
  return (
    <div className="flex flex-col w-full h-full gap-4 pt-4 bg-white ">
      <div className="flex flex-col justify-between h-full px-4 ">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <div className="flex items-center justify-between " key={item}>
              <CircleImage
                src="/images/savedItem.png"
                alt="savedItem"
                className="w-10 h-10 border-0 rounded-md"
              />
              <div className="flex flex-col items-center ">
                <h1 className="text-sm font-bold text-gray-600 ">
                  Greek salad with Apricots{" "}
                </h1>
                <p className="text-xs text-gray-500 ">
                  Ryan Ebner . 25 Min Cook Time
                </p>
              </div>

              <button className="border-0  focus:ring-0">
                <IoHeartOutline size="1.2rem" className="text-gray-600 " />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MobileSavedRecipesHeader() {
  const { setOpenState } = useMobileMenu()

  return (
    <div className="flex items-center w-full ">
      <MobileRecipiesNavigation
        icon="./svg/SavedRecipies.svg"
        title="My Saved Recipes"
        goNagivation={setOpenState}
      />
    </div>
  )
}

export default MobileSavedRecipes
