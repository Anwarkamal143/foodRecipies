import { User } from "@apptypes/user"
import { FormatNumber } from "@utils"
export const Users: User[] = [
  {
    profileImg: "/images/mock/slider1profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    status: "trending",
    roles: ["admin", "cook"],
  },
  {
    profileImg: "/images/mock/slider2profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    status: "trending",
    roles: ["admin", "cook"],
  },
  {
    profileImg: "/images/mock/slider3profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    roles: ["admin", "cook"],
  },
  {
    profileImg: "/images/mock/slider4profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    roles: ["admin", "cook"],
  },
  {
    profileImg: "/images/mock/slider5profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    roles: ["admin", "cook"],
  },
]

export const DashboardAnalytics = [
  {
    title: "Recipe Views",
    count: FormatNumber(1200),
    status: "up",
    trandingCount: "50k",
    reviewTime: "Views ( 30 days )",
  },
  {
    title: "Recipe Saves",
    count: FormatNumber(1100000),
    status: "down",
    trandingCount: "45k",
    reviewTime: "Saves ( 30 days )",
  },
  {
    title: "Recipe Reviews",
    count: FormatNumber(1100),
    status: "up",
    trandingCount: "23",
    reviewTime: "Followers ( 30 days )",
  },
  {
    title: "Profile Visits",
    count: FormatNumber(11500000),
    status: "up",
    trandingCount: "23",
    reviewTime: "Visits ( 30 days )",
  },
]
