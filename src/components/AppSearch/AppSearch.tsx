import { SidebarAnimations } from "@animations"
import { useAppDispatch, useAppSelector } from "@hooks"
import { toggleSidebar } from "@reducers"
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
  const dispatch = useAppDispatch()
  const DrawerType = useAppSelector(state => state.sidebar.type)
  const GetDrawer = useMemo(() => {
    const onClose = () => {
      dispatch(toggleSidebar({ isOpen: false, type: DrawerType }))
    }
    switch (DrawerType) {
      case DRAWER.SEARCH:
        return <AppSearchC toggleSideBar={onClose} />
      case DRAWER.PROFILE:
        return <ProfileDrawerC onClose={onClose} />
      case DRAWER.NOTIFICATION:
        return <NotificationDrawerC onClose={onClose} />
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
