import { CircleImage, UnderlineLink, UnstyledLink } from "@Components"
import parse from "html-react-parser"
import React from "react"
import { FiChevronLeft } from "react-icons/fi"
import { IoSettingsOutline } from "react-icons/io5"
import { notifications } from "../DesktopMenu/MenuData/MenuData"
import { useMobileMenu } from "./MobileMenuContext"

function MobileNotificationMenu() {
  const { setOpenState } = useMobileMenu()
  return (
    <div className=" flex h-full w-full flex-col bg-white px-4 py-4">
      <div className=" flex w-full items-center">
        <span className=" p-4 pl-0" onClick={() => setOpenState(null)}>
          <FiChevronLeft size="1rem" className="text-gray-900" />
        </span>
        <p className=" w-full text-center font-medium text-gray-900">Saved</p>
      </div>
      <div className=" mb-4 mt-2 flex cursor-default items-center justify-between">
        <p className=" text-sm font-bold text-dark">Notifications</p>
        <IoSettingsOutline size="1rem" className=" text-dark" />
      </div>

      <div className=" flex h-full flex-col justify-between">
        <div className=" flex flex-col gap-2">
          {notifications.length
            ? notifications.map(item => (
                <UnstyledLink
                  href={item.href}
                  className="block rounded-md p-2 text-sm text-gray-700 hover:bg-gray-100"
                  key={item.id}
                >
                  <div className=" flex gap-4">
                    <CircleImage src={item.thumbnail} className=" mt-2" />
                    <div className=" flex flex-col justify-start gap-1">
                      <p className=" text-left text-xs font-normal text-gray-600">
                        {parse(item.title)}
                      </p>
                      <small className=" text-left">{item.time} ago</small>
                    </div>
                  </div>
                </UnstyledLink>
              ))
            : null}
        </div>
        <div className=" mt-2 flex justify-center">
          <UnderlineLink href="/" className=" text-red-500">
            See all
          </UnderlineLink>
        </div>
      </div>
    </div>
  )
}

export default MobileNotificationMenu
