/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnstyledLink } from "@Components"
import React, { useContext, useState } from "react"
import { FiChevronRight } from "react-icons/fi"
import { CoocksMenu } from "../../DesktopMenu/MenuData/MenuData"

const MobileCooksMenuProvider = React.createContext<any>(null)
MobileCooksMenuProvider.displayName = "MobileCooksMenuProvider"

function MobileCooksMenuContext(props: any) {
  const [mobileCooksOpenState, setMobileCooksOpenState] = useState<
    string | null
  >(null)
  const handleState = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMobileCooksOpenState(e.currentTarget.id)
  }
  const contextValue = {
    mobileCooksOpenState,
    handleState,
    setMobileCooksOpenState,
  }

  return <MobileCooksMenuProvider.Provider value={contextValue} {...props} />
}

export function MobileCooksMenuItems() {
  const { handleState } = useMobileCooksMenu()
  return (
    <>
      <div className="flex flex-col">
        {CoocksMenu.length
          ? CoocksMenu.map(item => (
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

export function useMobileCooksMenu() {
  const context = useContext(MobileCooksMenuProvider)
  if (!context)
    throw new Error(
      "useMobileCooksMenu should use in between <MobileCooksMenuContext> </MobileCooksMenuContext>"
    )
  return context
}

export default MobileCooksMenuContext
