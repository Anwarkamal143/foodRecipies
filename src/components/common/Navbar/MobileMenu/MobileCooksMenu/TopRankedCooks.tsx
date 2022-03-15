import { CircleImage, UnstyledLink } from "@components"
import React from "react"
import { TopCooksOfWeek } from "../../DesktopMenu/MenuData/MenuData"

function TopRankedCooks() {
  return (
    <div className="flex flex-col w-full h-full gap-4 px-4 py-4 bg-white ">
      <p className="text-sm font-bold text-gray-900 ">Top cooks this week</p>

      <ul className="flex flex-col gap-4 pl-6 overflow-y-scroll text-xs text-gray-500 list-decimal ">
        {TopCooksOfWeek.length
          ? TopCooksOfWeek.map(item => (
              <li key={item.id}>
                <UnstyledLink
                  href={item.href}
                  className="flex items-center justify-between ml-2 text-xs font-medium text-gray-500 rounded-md "
                >
                  <div className="flex items-center gap-2 ">
                    {/* <div className='flex items-center gap-2 '> */}
                    <CircleImage
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-5 h-5 border-none"
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
