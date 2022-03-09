/* eslint-disable @next/next/no-img-element */
import { CircleImage } from "@Components"
import React from "react"
import { IoHeartOutline } from "react-icons/io5"
import { useMobileMenu } from "./MobileMenuContext"
import { MobileRecipiesNavigation } from "./MobileRecipiesMenu"

function MobileSavedRecipes() {
  return (
    <div className=" flex h-full w-full flex-col gap-4 bg-white pt-4">
      <div className=" flex h-full flex-col justify-between px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <div className=" flex items-center justify-between" key={item}>
              <CircleImage
                src="/images/savedItem.png"
                alt="savedItem"
                className="rounded-md border-0 w-10 h-10"
              />
              <div className=" flex flex-col items-center">
                <h1 className=" font-bold text-gray-600 text-sm">
                  Greek salad with Apricots{" "}
                </h1>
                <p className=" text-gray-500 text-xs">
                  Ryan Ebner . 25 Min Cook Time
                </p>
              </div>

              <button className=" border-0 focus:ring-0">
                <IoHeartOutline size="1.2rem" className=" text-gray-600" />
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
    <div className=" flex w-full items-center">
      <MobileRecipiesNavigation
        icon="./svg/SavedRecipies.svg"
        title="My Saved Recipes"
        goNagivation={setOpenState}
      />
    </div>
  )
}

export default MobileSavedRecipes
