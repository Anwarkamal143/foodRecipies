import { CircleImage, UnderlineLink, UnstyledLink } from "@components"
import parse from "html-react-parser"
import React from "react"
import { FiChevronLeft } from "react-icons/fi"
import { IoSettingsOutline } from "react-icons/io5"
import { notifications } from "../DesktopMenu/MenuData/MenuData"
import { useMobileMenu } from "./MobileMenuContext"

function MobileNotificationMenu() {
  const { setOpenState } = useMobileMenu()
  return (
    <div className="flex flex-col w-full h-full px-4 py-4 bg-white ">
      <div className="flex items-center w-full ">
        <span className="p-4 pl-0 " onClick={() => setOpenState(null)}>
          <FiChevronLeft size="1rem" className="text-gray-900" />
        </span>
        <p className="w-full font-medium text-center text-gray-900 ">Saved</p>
      </div>
      <div className="flex items-center justify-between mt-2 mb-4 cursor-default ">
        <p className="text-sm font-bold  text-dark">Notifications</p>
        <IoSettingsOutline size="1rem" className=" text-dark" />
      </div>

      <div className="flex flex-col justify-between h-full ">
        <div className="flex flex-col gap-2 ">
          {notifications.length
            ? notifications.map(item => (
                <UnstyledLink
                  href={item.href}
                  className="block p-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                  key={item.id}
                >
                  <div className="flex gap-4 ">
                    <CircleImage src={item.thumbnail} className="mt-2 " />
                    <div className="flex flex-col justify-start gap-1 ">
                      <p className="text-xs font-normal text-left text-gray-600 ">
                        {parse(item.title)}
                      </p>
                      <small className="text-left ">{item.time} ago</small>
                    </div>
                  </div>
                </UnstyledLink>
              ))
            : null}
        </div>
        <div className="flex justify-center mt-2 ">
          <UnderlineLink href="/" className="text-red-500 ">
            See all
          </UnderlineLink>
        </div>
      </div>
    </div>
  )
}

export default MobileNotificationMenu
