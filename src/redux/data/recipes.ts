import { Recipe } from "@apptypes/recipe"
import { setItemId } from "@utils"
import dayjs from "dayjs"
export const RecipesData = [
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
    rightDetails: [
      {
        _id: "1",
        category: "category",
        title: "Salads",
        icon: "/images/spoon.svg",
      },
      {
        _id: "2",
        category: "Total Time",
        title: "60 Min",
        icon: "/images/spoon.svg",
      },
      {
        _id: "3",
        category: "Difficulty",
        title: "Advanced",
        icon: "/images/spoon.svg",
      },
      {
        _id: "4",
        category: "calories",
        title: "150 kcal",
        icon: "/images/spoon.svg",
      },
      {
        _id: "5",
        category: "Cuisin",
        title: "india",
        icon: "/images/spoon.svg",
      },
    ],
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
    rightDetails: [
      {
        _id: "1",
        category: "category",
        title: "Salads",
        icon: "/images/spoon.svg",
      },
      {
        _id: "2",
        category: "Total Time",
        title: "60 Min",
        icon: "/images/spoon.svg",
      },
      {
        _id: "3",
        category: "Difficulty",
        title: "Advanced",
        icon: "/images/spoon.svg",
      },
      {
        _id: "4",
        category: "calories",
        title: "150 kcal",
        icon: "/images/spoon.svg",
      },
      {
        _id: "5",
        category: "Cuisin",
        title: "india",
        icon: "/images/spoon.svg",
      },
    ],
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
    rightDetails: [
      {
        _id: "1",
        category: "category",
        title: "Salads",
        icon: "/images/spoon.svg",
      },
      {
        _id: "2",
        category: "Total Time",
        title: "60 Min",
        icon: "/images/spoon.svg",
      },
      {
        _id: "3",
        category: "Difficulty",
        title: "Advanced",
        icon: "/images/spoon.svg",
      },
      {
        _id: "4",
        category: "calories",
        title: "150 kcal",
        icon: "/images/spoon.svg",
      },
      {
        _id: "5",
        category: "Cuisin",
        title: "india",
        icon: "/images/spoon.svg",
      },
    ],
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
    rightDetails: [
      {
        _id: "1",
        category: "category",
        title: "Salads",
        icon: "/images/spoon.svg",
      },
      {
        _id: "2",
        category: "Total Time",
        title: "60 Min",
        icon: "/images/spoon.svg",
      },
      {
        _id: "3",
        category: "Difficulty",
        title: "Advanced",
        icon: "/images/spoon.svg",
      },
      {
        _id: "4",
        category: "calories",
        title: "150 kcal",
        icon: "/images/spoon.svg",
      },
      {
        _id: "5",
        category: "Cuisin",
        title: "india",
        icon: "/images/spoon.svg",
      },
    ],
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
    rightDetails: [
      {
        _id: "1",
        category: "category",
        title: "Salads",
        icon: "/images/spoon.svg",
      },
      {
        _id: "2",
        category: "Total Time",
        title: "60 Min",
        icon: "/images/spoon.svg",
      },
      {
        _id: "3",
        category: "Difficulty",
        title: "Advanced",
        icon: "/images/spoon.svg",
      },
      {
        _id: "4",
        category: "calories",
        title: "150 kcal",
        icon: "/images/spoon.svg",
      },
      {
        _id: "5",
        category: "Cuisin",
        title: "india",
        icon: "/images/spoon.svg",
      },
    ],
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
    rightDetails: [
      {
        _id: "1",
        category: "category",
        title: "Salads",
        icon: "/images/spoon.svg",
      },
      {
        _id: "2",
        category: "Total Time",
        title: "60 Min",
        icon: "/images/spoon.svg",
      },
      {
        _id: "3",
        category: "Difficulty",
        title: "Advanced",
        icon: "/images/spoon.svg",
      },
      {
        _id: "4",
        category: "calories",
        title: "150 kcal",
        icon: "/images/spoon.svg",
      },
      {
        _id: "5",
        category: "Cuisin",
        title: "india",
        icon: "/images/spoon.svg",
      },
    ],
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
    rightDetails: [],
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
    rightDetails: [],
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
