import { ProfileTogglerIcon } from "@Icons"
import { useEffect, useState } from "react"
import { CircleImage } from "src/components/common"
import ProfileDropDown from "../components/HeaderProfilesDropdown"
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
      <div className="flex items-center justify-between w-full p-3 border-2 rounded-lg">
        <div className="flex items-center">
          <CircleImage
            src="/images/profile-img.png"
            alt="default profile imag"
          />
          <div className="pl-2">
            <p>Omer E</p>
            <span>Founder Cook</span>
          </div>
        </div>
        <div className="ml-auto">
          <ProfileDropDown>
            <ProfileTogglerIcon />
          </ProfileDropDown>
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

export default Header
