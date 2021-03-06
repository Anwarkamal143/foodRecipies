import { LeftSliderArrow, RightSliderArrow } from "@icons"
import { FormatNumber, setItemId } from "@utils"
export const Users = [
  {
    src: "/images/mock/slider1profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    status: "trending",
  },
  {
    src: "/images/mock/slider2profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    status: "trending",
  },
  {
    src: "/images/mock/slider3profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
  },
  {
    src: "/images/mock/slider4profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
  },
  {
    src: "/images/mock/slider5profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
  },
]
export const tableData = [
  {
    id: "#89325",
    status: "live",
    name: "Organic Vegetable with peas and chicken",
    view: [
      {
        rateing: "150",
        downrate: "20",
      },
    ],
    date: "02-1-2313",
  },
  {
    id: "#89325",
    status: "live",
    name: "Organic Vegetable with peas and chicken",
    view: [
      {
        rateing: "150",
        downrate: "20",
      },
    ],
    date: "02-1-2313",
  },
  {
    id: "#89325",
    status: "Draft",
    name: "Organic Vegetable with peas and chicken",
    view: [
      {
        rateing: "150",
        downrate: "20",
      },
    ],
    date: "02-1-2313",
  },
  {
    id: "#89325",
    status: "Scheduled",
    name: "Organic Vegetable with peas and chicken",
    view: [
      {
        rateing: "150",
        downrate: "20",
      },
    ],
    date: "02-1-2313",
  },
]
export const panCakeSliderData = [
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
]
export const reviewsComments = [
  {
    _id: setItemId(),
    name: "Amanda Miles",
    profileImage: "/images/mock/slider1profile.png",
    reviewsComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. repudiandae accusamus nisi? Enim ducimus quod iusto quia quos consequuntur tenetur nihil deserunt.",
    likes: 8,
    comments: 4,
  },
]
export const data = [
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
    title: "Total Followers",
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
export const LineChartData = [
  {
    month: "2021-03-09",
    // price: FormatNumber(4000),
    price: 0,
  },
  {
    month: "2021-03-10",
    price: 3000,
  },
  {
    month: "2021-03-11",
    price: 2000,
  },
  {
    month: "2021-03-12",
    price: 2780,
  },
  {
    month: "2021-03-13",
    price: 1890,
  },
  {
    month: "2021-03-14",
    price: 2390,
  },
  {
    month: "2021-03-15",
    price: 3490,
  },
]
export const chartData = [
  {
    day: "M",

    count: "50",
  },
  {
    day: "T",

    count: "60",
  },
  {
    day: "W",

    count: "70",
  },
  {
    day: "T",

    count: "1000",
  },
  {
    day: "F",

    count: "70",
  },
  {
    day: "S",

    count: "60",
  },
  {
    day: "S",

    count: "50",
  },
]
export const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <RightSliderArrow />,
  prevArrow: <LeftSliderArrow />,
  draggable: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2,
        arrows: false,
      },
    },
  ],
}
export const FavData = [
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
]
export const FavData1 = [
  {
    id: "asdk",
    image: "/images/veg.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "assddddd",
    image: "/images/veg.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/veg.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "assddddd",
    image: "/images/veg.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "asdk",
    image: "/images/veg.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
  {
    id: "assddddd",
    image: "/images/veg.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
    high: 2,
  },
]

export const FavRecipeData = [
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
  },
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
  },
  {
    id: "asdk",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
  },
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
  },
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
  },
]
export const categoryData = [
  {
    category: "Snacks",
    image: "/images/icon-lg01.png",
    data: [
      {
        id: "s",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
    ],
  },
  {
    category: "Breakfast",
    image: "/images/icon-lg02.png",
    data: [
      {
        id: "sss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
    ],
  },

  {
    category: "Sandwiches",
    image: "/images/icon-lg03.png",
    data: [],
  },
  {
    category: "BBQ",
    image: "/images/icon-lg04.png",
    data: [],
  },
  {
    category: "Healthy",
    image: "/images/icon-lg05.png",
    data: [],
  },
  {
    category: "Dinner",
    image: "/images/icon-lg06.png",
    data: [],
  },
  {
    category: "Dessert",
    image: "/images/icon-lg07.png",
    data: [],
  },
  {
    category: "Seafood",
    image: "/images/icon-lg08.png",
    data: [],
  },
  {
    category: "Appetizers",
    image: "/images/icon-lg09.png",
    data: [],
  },
  {
    category: "Pasta",
    image: "/images/icon-lg10.png",
    data: [],
  },
  {
    category: "Drinks",
    image: "/images/icon-lg11.png",
    data: [],
  },
  {
    category: "Soup",
    image: "/images/icon-lg12.png",
    data: [],
  },
  {
    category: "Baked Goods",
    image: "/images/icon-lg13.png",
    data: [],
  },
  {
    category: "Appetizers",
    image: "/images/icon-lg14.png",
    data: [],
  },
]
export const IngredientData = [
  {
    category: "Chicken",
    image: "/images/Chicken2.png",
    data: [
      {
        id: "s",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
    ],
  },
  {
    category: "Fish",
    image: "/images/salmon.png",
    data: [
      {
        id: "sss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
    ],
  },

  {
    category: "Pork",
    image: "/images/Pork.png",
    data: [],
  },
  {
    category: "Pasta",
    image: "/images/Pasta.png",
    data: [],
  },
  {
    category: "Beef",
    image: "/images/Beef.png",
    data: [
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
      {
        id: "ssss",
        image: "/images/bbq.jpg",
        title: "Organic Vegetable with Peas and  chicken Burrito",
        fvrtBy: "By Emma Olivia",
        time: "20 mins",
        state: "Easy",
      },
    ],
  },
]
export const LeaderBoradCategoryData = [
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
  },
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
  },
  {
    id: "assddddd",
    image: "/images/bbq.jpg",
    title: "Organic Vegetable with Peas and  chicken Burrito",
    fvrtBy: "By Emma Olivia",
    time: "20 mins",
    state: "Easy",
  },
]
export const ourCooks = [
  {
    url: "/images/img-food01.png",
    type: "video",
    userName: "Sam the Cooking Guy",
    postby: "Posted March 23rd",
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    url: "/images/img-food02.png",
    type: "video",
    userName: "Sam the Cooking Guy",
    postby: "Posted March 23rd",
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    url: "/images/img-food03.png",
    type: "video",
    userName: "Sam the Cooking Guy",
    postby: "Posted March 23rd",
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    url: "/images/img-food04.png",
    type: "video",
    userName: "Sam the Cooking Guy",
    postby: "Posted March 23rd",
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    url: "/images/img-food05.png",
    type: "video",
    userName: "Sam the Cooking Guy",
    postby: "Posted March 23rd",
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    url: "/images/img-food01.png",
    type: "video",
    userName: "Sam the Cooking Guy",
    postby: "Posted March 23rd",
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    url: "/images/img-food02.png",
    type: "video",
    userName: "Sam the Cooking Guy",
    postby: "Posted March 23rd",
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
]
export const userList = [
  {
    userName: "Sam the Cooking Guy",
    low: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    userName: "Sam the Cooking Guy",
    low: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    userName: "Sam the Cooking Guy",
    high: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    userName: "Sam the Cooking Guy",
    high: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    userName: "Sam the Cooking Guy",
    low: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    userName: "Sam the Cooking Guy",
    high: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    userName: "Sam the Cooking Guy",
    high: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    userName: "Sam the Cooking Guy",
    high: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
  {
    userName: "Sam the Cooking Guy",
    high: 2,
    profile:
      "https://i.pinimg.com/564x/6f/f0/55/6ff0557b423947563d39f570e36e6aab.jpg",
  },
]
export const OnlineUsersData = [
  {
    profile: "/images/img-cook01.png",
    userName: "Will Courtney",
    Recipes: 105,
  },
  {
    profile: "/images/img-cook02.png",
    userName: "Ralph Edwards",
    Recipes: 105,
  },
  {
    profile: "/images/img-cook03.png",
    userName: "Robert Fox",
    Recipes: 105,
  },
  {
    profile: "/images/img-cook04.png",
    userName: "Cameron Williamson",
    Recipes: 105,
  },
  {
    profile: "/images/img-cook01.png",
    userName: "Will Courtney",
    Recipes: 105,
  },
  {
    profile: "/images/img-cook02.png",
    userName: "Ralph Edwards",
    Recipes: 105,
  },
  {
    profile: "/images/img-cook03.png",
    userName: "Robert Fox",
    Recipes: 105,
  },
]
