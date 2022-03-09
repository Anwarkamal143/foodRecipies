/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnstyledLink } from "@Components"
import React, { useContext, useState } from "react"
import { FiChevronRight } from "react-icons/fi"
import { recipies } from "../../DesktopMenu/MenuData/MenuData"

const MobileRecipiesMenuProvider = React.createContext<any>(null)
MobileRecipiesMenuProvider.displayName = "MobileRecipiesMenuProvider"

function MobileRecipiesMenuContext(props: any) {
  const [mobileRecipiesOpenState, setMobileRecipiesOpenState] = useState<
    string | null
  >(null)
  const handleState = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMobileRecipiesOpenState(e.currentTarget.id)
  }
  const contextValue = {
    mobileRecipiesOpenState,
    handleState,
    setMobileRecipiesOpenState,
  }

  return <MobileRecipiesMenuProvider.Provider value={contextValue} {...props} />
}

export function MobileRecipiesMenuItems() {
  const { handleState } = useMobileRecipiesMenu()
  return (
    <>
      <div className="flex flex-col">
        {recipies.length
          ? recipies.map(item => (
              <div key={item.id}>
                <UnstyledLink
                  href={item.href}
                  className=" flex items-center justify-between rounded-md p-4  text-sm font-medium text-gray-900 hover:bg-blue-50"
                  onClick={handleState}
                  id={item.title.split(" ").join("_")}
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
    </>
  )
}

export function useMobileRecipiesMenu() {
  const context = useContext(MobileRecipiesMenuProvider)
  if (!context)
    throw new Error(
      "useMobileRecipiesMenu should use in between <MobileRecipiesMenuContext> </MobileRecipiesMenuContext>"
    )
  return context
}

export default MobileRecipiesMenuContext
