// import {
//     Analytics,
//     ChartBar,
//     ChartLine,
//     Envelope,
//     FeedBack,
//     Home,
//     Manage,
//     Messages,
//     Store,
//     Transactions,
//     UserThumbail,
// } from "@icons"

import { Scrollbar } from "@Components"
import Link from "next/link"
import {
  ListContainer,
  ListItem,
  SidebarContainer,
  SidebarMenu,
  SidebarWrapper,
  Title,
} from "./sidebar.styled"
type ISidebarProps = {
  className?: string
}

export function Sidebar(props: ISidebarProps) {
  const { className } = props
  return (
    <SidebarContainer className={`app-sidebar ${className}`}>
      <Scrollbar>
        <SidebarWrapper>
          <SidebarMenu>
            <Title>Personal Dashboard </Title>
            <ListContainer>
              <Link href="/myfeeds">
                <ListItem>
                  {/* <UserThumbail
                                    color="gray"
                                    className="sidebar_icon"
                                /> */}
                  My Food Feed
                </ListItem>
              </Link>
              <Link href="/users">
                <ListItem>
                  {/* <Store color="gray" className="sidebar_icon" /> */}
                  Store
                </ListItem>
              </Link>
              <Link href="/users">
                <ListItem>
                  {/* <Transactions
                                    color="gray"
                                    className="sidebar_icon"
                                /> */}
                  Transactions
                </ListItem>
              </Link>
              <Link href="/users">
                <ListItem>
                  {/* <ChartBar
                                    color="gray"
                                    className="sidebar_icon"
                                /> */}
                  Reports
                </ListItem>
              </Link>
            </ListContainer>
          </SidebarMenu>

          <SidebarMenu>
            <Title>Staff </Title>
            <ListContainer>
              <Link href="/users">
                <ListItem>
                  {/* <Manage color="gray" className="sidebar_icon" /> */}
                  Manage
                </ListItem>
              </Link>
              <Link href="/users">
                <ListItem>
                  {/* <Analytics
                                    color="gray"
                                    className="sidebar_icon"
                                /> */}
                  Analytics
                </ListItem>
              </Link>
              <Link href="/users">
                <ListItem>
                  {/* <ChartBar
                                    color="gray"
                                    className="sidebar_icon"
                                /> */}
                  Reports
                </ListItem>
              </Link>
            </ListContainer>
          </SidebarMenu>
        </SidebarWrapper>
      </Scrollbar>
    </SidebarContainer>
  )
}
