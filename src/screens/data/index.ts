import { setItemId } from "@utils"
import dayjs from "dayjs"
export const POSTSDATA = [
  {
    _id: setItemId(),

    description: `Credibly reinvent resource maximizing systems vis-a-vis value-added
        customer service. Authoritatively seize turnkey platforms without 24/365
        services. Enthusiastically fashion cross functional metrics via vertical
        ideas. Uniquely leverage existing enabled e-business whereas
        bleeding-edge content. Seamlessly incentivize optimal markets through
        scalable leadership.`,
    liked: false,
    likes: 20000,

    createdAt: dayjs(),
    person: {
      _id: setItemId(),
      name: "Amanda Miles",
      followed: false,
      profileImage: "/images/mock/slider1profile.png",
    },
    images: [
      "/images/mock/post1.png",
      "/images/mock/post2.png",
      "/images/mock/post3.png",
      "/images/mock/post1.png",
      "/images/mock/post2.png",
      "/images/mock/post3.png",
      "/images/mock/post1.png",
    ],
  },
  {
    _id: setItemId(),
    description: `Credibly reinvent resource maximizing systems vis-a-vis value-added
        customer service. Authoritatively seize turnkey platforms without 24/365
        services. Enthusiastically fashion cross functional metrics via vertical
        ideas. Uniquely leverage existing enabled e-business whereas
        bleeding-edge content. Seamlessly incentivize optimal markets through
        scalable leadership.`,
    liked: true,
    likes: 40000,

    createdAt: dayjs(),
    person: {
      _id: setItemId(),
      name: "Amelia James",
      followed: true,
      profileImage: "/images/mock/slider2profile.png",
    },
    images: ["/images/mock/post1.png"],
  },
]
export const RECEPESITEMS = [
  {
    _id: setItemId(),
    image: "/images/mock/post1.png",
    name: "Greek salad",
    rating: 4.5,
    views: 380,
    status: "20",
  },
  {
    _id: setItemId(),
    image: "/images/mock/post1.png",
    name: "Greek salad",
    rating: 4.5,
    views: 380,
    status: "10",
  },
  {
    _id: setItemId(),
    image: "/images/mock/post1.png",
    name: "Greek salad",
    rating: 4.5,
    views: 380,
    status: "15",
  },
  {
    _id: setItemId(),
    image: "/images/mock/post1.png",
    name: "Greek salad",
    rating: 4.5,
    views: 380,
    status: "20",
  },
  {
    _id: setItemId(),
    image: "/images/mock/post1.png",
    name: "Greek salad",
    rating: 4.5,
    views: 380,
    status: "24",
  },
]
