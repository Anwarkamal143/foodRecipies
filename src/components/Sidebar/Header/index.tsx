import { useAppDispatch, useOpenClose } from "@hooks"
import { ProfileTogglerIcon } from "@icons"
import { useAppSelector } from "@redux/hooks"
import { setUser } from "@redux/reducers"
import { useEffect, useState } from "react"
import { CircleImage } from "src/components/common"
import { DropDown } from "src/components/DropDown"
import styled from "styled-components"
import ProfileTaskModel from "../../ProfileTaskModel/ProfileTaskModel"
import { DropDownItem } from "./header.styled"
export type ISidebarHeaderProps = {
  className?: string
  onSideBarToggle?: (isClosed: boolean) => void
  // isSi
  isSidebarOpen?: boolean
  [key: string]: any
}
const Header = ({
  className,
  onSideBarToggle,
  isSidebarOpen = false,
}: ISidebarHeaderProps) => {
  const [sideBarToggler, setSideBarToggler] = useState(isSidebarOpen)
  const dispatch = useAppDispatch()
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const user = useAppSelector(state => state.user)
  console.log({ user })
  const handleToggle = () => {
    setSideBarToggler(!sideBarToggler)
    onSideBarToggle?.(!sideBarToggler)
  }
  useEffect(() => {
    setSideBarToggler(isSidebarOpen)
  }, [isSidebarOpen])
  return (
    <div className="flex items-center justify-between">
      {/* <Link href="#">
        <a
          // className="bg-blue-600 p-1.5 rounded flex items-center justify-center focus:outline-none
          //         focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          className="flex items-center justify-center p-1.5 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <NavHeaderBtnSVG className="w-5 h-5 text-white stroke-current" />
        </a>
      </Link> */}
      <div className="userWidget">
        <div className="userWidgetWrap">
          <CircleImage
            className="userWidgetImage"
            src="/images/profile-img.png"
            alt="default profile imag"
          />
          <div className="userWidgetText">
            <p className="userWidgetName">{user.name || "Omer E"}</p>
            <span className="userWidgetDesignation">
              {user.status || "Founder Cook"}
            </span>
          </div>
        </div>
        <div className="ml-auto">
          <DropDown
            items={[
              { id: 1, name: "Omer E", status: "Founder Cook", role: "cook" },
              { id: 1, name: "Javed M", status: "Admin Cook", role: "admin" },
            ]}
            renderItem={({ item, isActive, onClick }) => {
              return (
                <DropDownItem
                  className={`${isActive} item`}
                  onClick={() => {
                    dispatch(setUser({ ...item }))
                  }}
                >
                  {item.name}
                </DropDownItem>
              )
            }}
            button={() => {
              return <ProfileTogglerIcon onClick={onOpenModel} />
            }}
          />
          <ProfileTaskModel isOpen={isOpenModel} onCancel={onCloseModel} />
        </div>
      </div>
      {/* <button
        onClick={handleToggle}
        title="toggle side bar"
        type="button"
        className="flex items-center justify-center p-0.5 rounded bg-gray-800 focus:outline-none 
                        focus:ring-1 focus:ring-gray-500"
      >
        <NavHeaderToggleSVG
          className={`w-3 h-3 transition text-gray-300 stroke-current ${
            sideBarToggler ? "" : "rotate-180"
          }`}
        />
      </button> */}
      {/* <NavHeaderToggleSVG className="w-4 h-4 bg-gray-800 cursor-pointer hover:bg-gray-700 " /> */}
    </div>
  )
}

export default styled(Header)``
