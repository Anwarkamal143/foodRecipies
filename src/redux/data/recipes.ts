import { Recipe } from "@apptypes/recipe"
import { setItemId } from "@utils"
import dayjs from "dayjs"
export const RecipesData: Recipe[] = [
  {
    _id: setItemId(),
    status: "live", // 'live' | 'draft' | 'scheduled'
    name: "Organic Peas with Chicken  and Broccoli",
    isDeleted: false,
    description: `Credibly reinvent resource maximizing systems vis-a-vis value-added
        customer service. Authoritatively seize turnkey platforms without 24/365
        services. Enthusiastically fashion cross functional metrics via vertical
        ideas. Uniquely leverage existing enabled e-business whereas
        bleeding-edge content. Seamlessly incentivize optimal markets through
        scalable leadership.`,
    likes: 20000,
    views: {
      total: 450,
      progress: 20,
      status: "up", // 'up' | 'down'
    },
    tags: [],
    createdAt: dayjs(),
    updatedAt: dayjs(),
    creator: {
      _id: setItemId(),
      name: "Amelia James",
      profileImage: "/images/mock/slider2profile.png",
      socialAccounts: [], //array of social accounts urls
    },
    person: {
      _id: setItemId(),
      name: "Amanda Miles",
      followed: false, // is person followed the creator
      profileImage: "/images/mock/slider1profile.png",
      liked: true, // is person liked the recipe
      isRecipeSaved: true, // is person saved recipe,
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
    status: "draft",
    name: "Organic Peas with Chicken and Broccoli",
    isDeleted: false,
    description: `Credibly reinvent resource maximizing systems vis-a-vis value-added
      customer service. Authoritatively seize turnkey platforms without 24/365
        services. Enthusiastically fashion cross functional metrics via vertical
        ideas. Uniquely leverage existing enabled e-business whereas
        bleeding-edge content. Seamlessly incentivize optimal markets through
        scalable leadership.`,
    likes: 40000,
    createdAt: dayjs(),
    views: {
      total: 450,
      progress: 20,
      status: "down", // 'up' | 'down'
    },
    tags: [],
    creator: {
      _id: setItemId(),
      name: "Amelia James",
      profileImage: "/images/mock/slider2profile.png",
      socialAccounts: [], //array of social accounts urls
    },
    person: {
      _id: setItemId(),
      name: "Amelia James",
      followed: true, // is person followed the creator
      profileImage: "/images/mock/slider2profile.png",
      liked: true, // is person liked the recipe
      isRecipeSaved: true, // is person saved recipe
    },
    images: ["/images/mock/post1.png"],
  },
]
