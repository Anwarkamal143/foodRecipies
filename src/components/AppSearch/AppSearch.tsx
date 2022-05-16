import { SidebarAnimations } from "@animations"
import { useAppSelector } from "@hooks"
import { DRAWER } from "@utils/enums"
import { Fragment, useMemo, useState } from "react"
import styled from "styled-components"
import { NotificationDrawerC } from "../NotificationDrawer"
import { ProfileDrawerC } from "../ProfileDrawer"
import { SearchHeader } from "./Header"
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

const Drawers = () => {
  const DrawerType = useAppSelector(state => state.sidebar.type)
  const GetDrawer = useMemo(() => {
    switch (DrawerType) {
      case DRAWER.SEARCH:
        return <AppSearchC />
      case DRAWER.PROFILE:
        return <ProfileDrawerC />
      case DRAWER.NOTIFICATION:
        return <NotificationDrawerC />
      default:
        break
    }
  }, [DrawerType])

  return <Fragment>{GetDrawer}</Fragment>
}

const AppSearchSlider = (props: Props) => {
  const { className } = props
  return (
    <div className={className}>
      <SidebarAnimations>
        <Drawers />
      </SidebarAnimations>
    </div>
  )
}

export const AppSearch = styled(AppSearchSlider)``
