import { ReactNode } from "react"
import {
  AddCircleIcon,
  DashboardIcon,
  HeartIcon,
  LogoutIcon,
  NotificationsIcon,
  PeoplesIcon,
  PerformanceIcon,
  ProfileCircleIcon,
  RecipesIcon,
  ReserveIcon,
  SettingsIcon,
  UserTick,
} from "@Icons"

export type INavItem = {
  name: string
  route?: string
  icon?: ReactNode
  exact?: boolean
  meta: {
    hasNotifications?: boolean
    divider?: boolean
    hasChilds: boolean
    name?: string
    route?: string
    rightIcon?: ReactNode
    routes?: INavItem[]
    [key: string]: any
  }
}

export const ROUTES: INavItem[] = [
  {
    name: "Main",
    icon: null,
    meta: {
      divider: true,
      hasChilds: false,
    },
  },
  {
    name: "Dashboard",
    icon: DashboardIcon,
    route: "/",
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: "Performance",
    icon: PerformanceIcon,
    route: "/performance",
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: "Content",
    icon: null,
    meta: {
      divider: true,
      hasChilds: false,
    },
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
    route: "/notifications",
    exact: true,
    meta: {
      hasChilds: false,
      hasNotifications: true,
    },
  },
  {
    name: "Recipies",
    icon: RecipesIcon,
    route: "/recipies",
    exact: false,
    meta: {
      hasChilds: true,
      routes: [
        {
          name: "View Recipes",
          route: "/recipies/view-recipes",
          exact: true,
          icon: null,
          // icon: ''
          meta: {
            hasChilds: false,
          },
        },
        {
          name: "Add New Recipe",
          route: "/recipies/add-recipe",
          exact: true,
          // icon: ''
          meta: {
            hasChilds: false,
            rightIcon: AddCircleIcon,
          },
        },
      ],
    },
  },
  {
    name: "Collections",
    icon: HeartIcon,
    route: "/collections",
    exact: false,
    meta: {
      hasChilds: true,
      routes: [
        {
          name: "View Collection",
          route: "/collections",
          icon: null,
          exact: true,
          // icon: ''
          meta: {
            hasChilds: false,
          },
        },
        {
          name: "Add New",
          route: "/collections/add-collection",
          exact: true,
          // icon: ''
          meta: {
            hasChilds: false,
            rightIcon: AddCircleIcon,
          },
        },
      ],
    },
  },
  {
    name: "Followers",
    icon: UserTick,
    route: "/followers",
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: "Orders",
    icon: ReserveIcon,
    route: "/orders",
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: "Customizations",
    icon: null,
    meta: {
      divider: true,
      hasChilds: false,
    },
  },
  {
    name: "Public Profile",
    icon: ProfileCircleIcon,
    route: "/public-profile",
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: "Connections",
    icon: PeoplesIcon,
    route: "/connections",
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    route: "/settings",
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
  {
    name: "Logout",
    icon: LogoutIcon,
    route: "/logout",
    exact: true,
    meta: {
      hasChilds: false,
    },
  },
]
