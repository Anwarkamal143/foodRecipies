import { CircleImage, UnstyledLink } from "@Components"
import React from "react"
import { TopCooksOfWeek } from "../../DesktopMenu/MenuData/MenuData"

function TopRankedCooks() {
  return (
    <div className=" flex h-full w-full flex-col gap-4 bg-white px-4 py-4">
      <p className=" text-sm font-bold text-gray-900">Top cooks this week</p>

      <ul className=" flex list-decimal flex-col gap-4 pl-6 text-xs text-gray-500 overflow-y-scroll">
        {TopCooksOfWeek.length
          ? TopCooksOfWeek.map(item => (
              <li key={item.id}>
                <UnstyledLink
                  href={item.href}
                  className=" ml-2  flex items-center justify-between rounded-md  text-xs font-medium text-gray-500"
                >
                  <div className=" flex items-center gap-2">
                    {/* <div className=' flex items-center gap-2'> */}
                    <CircleImage
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-5 w-5 border-none"
                    />
                    <p>{item.title}</p>
                    {/* </div> */}
                  </div>
                </UnstyledLink>
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

export default TopRankedCooks
