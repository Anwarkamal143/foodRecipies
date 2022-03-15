/* eslint-disable @next/next/no-img-element */
import { CircleImage } from "@components"
import { Disclosure } from "@headlessui/react"
import React from "react"
import { BiSearch } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { IoCloseOutline } from "react-icons/io5"
import MobileCommunityMenu, {
  MobileCommunityMenuHeader,
} from "./MobileMenu/MobileCommunityMenu"
import MobileCooksMenu, {
  MobileCooksMenuHeader,
} from "./MobileMenu/MobileCooksMenu"
import MobileMenuContext, {
  MobileMenuItems,
  useMobileMenu,
} from "./MobileMenu/MobileMenuContext"
import MobileNotificationMenu from "./MobileMenu/MobileNotificationMenu"
import MobileRecipiesMenu, {
  MobileRecipiesMenuHeader,
} from "./MobileMenu/MobileRecipiesMenu"
import MobileRecipiesMenuContext from "./MobileMenu/MobileRecipiesMenu/MobileRecipiesMenuContext"
import MobileSavedRecipes, {
  MobileSavedRecipesHeader,
} from "./MobileMenu/MobileSavedRecipes"

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div>
      <MobileRecipiesMenuContext>
        {isOpen && (
          <Disclosure.Panel
            static
            className="fixed top-0 z-20 w-full h-screen bg-gray-900 bg-opacity-60 lg:hidden"
          >
            {({ close }) => (
              <MobileMenuContext>
                <MobileMenuLogicalComponent close={close} />
              </MobileMenuContext>
            )}
          </Disclosure.Panel>
        )}
      </MobileRecipiesMenuContext>
    </div>
  )
}

function MobileMenuLogicalComponent({ close }: { close: () => void }) {
  const { openState, setOpenState } = useMobileMenu()
  return (
    <>
      <div className="relative w-10/12 h-full bg-white  md:w-6/12">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 ">
          {openState === "notification" ? (
            <MobileNotificationMenu />
          ) : openState === "recipies" ? (
            <MobileRecipiesMenuHeader />
          ) : openState === "cooks" ? (
            <MobileCooksMenuHeader />
          ) : openState === "community" ? (
            <MobileCommunityMenuHeader />
          ) : openState === "savedRecipes" ? (
            <MobileSavedRecipesHeader />
          ) : (
            <div className="flex items-center gap-4 ">
              {/* Header profile */}
              <CircleImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <div className="flex flex-col ">
                <p className="text-sm text-gray-400 ">Welcome Back 👋</p>
                <h3 className="text-sm font-bold text-gray-600 ">Ryan Ebner</h3>
              </div>
            </div>
          )}
          <span className="p-4" onClick={() => close()}>
            <IoCloseOutline size="1.5rem" className="text-red-600 " />
          </span>
        </div>
        {/* Search */}
        <div className="flex items-center gap-2 mx-4 mt-4 border-b ">
          <BiSearch size="1.2rem" className="text-gray-500 " />
          <input
            type="text"
            className="w-full px-0 border-0 focus:ring-0"
            placeholder="Search..."
          />
        </div>
        {openState === "notification" ? (
          <MobileNotificationMenu />
        ) : openState === "recipies" ? (
          <MobileRecipiesMenu />
        ) : openState === "cooks" ? (
          <MobileCooksMenu />
        ) : openState === "community" ? (
          <MobileCommunityMenu />
        ) : openState === "savedRecipes" ? (
          <MobileSavedRecipes />
        ) : (
          <MobileMenuItems />
        )}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 bg-gray-100">
          <div className="flex items-center gap-4 ">
            <div className="relative ">
              <CircleImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <span className="absolute bottom-0 right-0 block w-2 h-2 bg-green-600 rounded-full "></span>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-sm font-bold text-gray-600 ">Ryan Ebner</h3>
              <p className="text-sm text-gray-500 ">Admin</p>
            </div>
          </div>
          <BsThreeDotsVertical size="1rem" className="text-gray-500 " />
        </div>
      </div>
    </>
  )
}

export default MobileMenu
