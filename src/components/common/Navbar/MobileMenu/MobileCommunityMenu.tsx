/* eslint-disable @next/next/no-img-element */
import { UnstyledLink } from "@Components"
import React from "react"
import { FiChevronRight } from "react-icons/fi"
import { communites } from "../DesktopMenu/MenuData/MenuData"
import { useMobileMenu } from "./MobileMenuContext"
import { MobileRecipiesNavigation } from "./MobileRecipiesMenu"

function MobileCommunityMenu() {
  const { setOpenState } = useMobileMenu()
  return (
    <div className=" flex h-full w-full flex-col gap-4 bg-white pt-4">
      <div className=" flex h-full flex-col justify-between">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          {communites.length
            ? communites.map(item => (
                <div key={item.id}>
                  <UnstyledLink
                    href={item.href}
                    className=" flex items-center justify-between rounded-md p-4  text-sm font-medium text-gray-900 hover:bg-blue-50"
                    // onClick={handleState}
                    // id={item.title.split(' ').join('_')}
                  >
                    <div className=" flex items-center gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-6"
                      />
                      {item.title}
                    </div>
                    <FiChevronRight size="0.8rem " className=" mr-2" />
                  </UnstyledLink>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}

export function MobileCommunityMenuHeader() {
  const { setOpenState } = useMobileMenu()

  return (
    <div className=" flex w-full items-center">
      <MobileRecipiesNavigation
        icon="./svg/RecipiesCat.svg"
        title="Community"
        goNagivation={setOpenState}
      />
    </div>
  )
}

export default MobileCommunityMenu
