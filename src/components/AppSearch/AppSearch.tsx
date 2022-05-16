import { SidebarAnimations } from "@animations"
import { useState } from "react"
import styled from "styled-components"
import { SearchHeader } from "../NotificationDrawer"
// import { SearchHeader } from "./Header"
import { SearchedSections } from "./SearchedSections"
type Props = {
  className?: string
}
const AppSearchC = ({ toggleSideBar }: { toggleSideBar?: any }) => {
  const [searchText, setSearchText] = useState<any>("")
  return (
    <div>
      <SearchHeader
        value={searchText}
        onClose={toggleSideBar}
        onSearch={(s?: string) => setSearchText(s)}
      />
      <SearchedSections
        isSearchingEnable={!!searchText}
        onClickClear={() => setSearchText("")}
      />
    </div>
  )
}
const AppSearchSlider = (props: Props) => {
  const { className } = props
  return (
    <div className={className}>
      <SidebarAnimations>
        {/* <AppSearchC /> */}
        <SearchHeader title="Notifications" />
      </SidebarAnimations>
    </div>
  )
}

export const AppSearch = styled(AppSearchSlider)``
