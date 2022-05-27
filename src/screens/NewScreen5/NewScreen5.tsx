import { Banner } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { categoryData, FavData, FavData1, FavRecipeData } from "data"
import { useEffect, useState } from "react"
import Lottie from "react-lottie"
import ItemContent from "src/components/ItemContent"
import NavBar from "src/components/NavBar"
import SliderContent from "src/components/SliderContent"
import SliderNav from "src/components/SliderNavBar"
import Footer from "src/pages/NewPage/footer/footer"
import Leaderboard from "src/pages/NewPage/Leaderboard"
import UserListSection from "src/pages/NewPage/userListSection"
import styled from "styled-components"

interface Props {
  className?: string
}

const NewScreen5 = ({ className }: Props) => {
  const [newPageData, setNewPageData] = useState<any>([])
  const [id, setId] = useState<any>("")
  const [data, setSilderData] = useState<any>([])
  const [ingredientData, setIngredientData] = useState<any>([])
  useEffect(() => {
    setNewPageData(categoryData)
  }, [categoryData])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CookAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div className={`recipesPage ${className}`}>
      <div className="recipesContainer">
        <div className="recipesSection">
          {/* <AppSearch toggleSideBar={true} /> */}
          <Banner
            title="Breakfast & Brunch Recipes"
            subTitle="Looking for quick and easy breakfast recipes or planning on a leisurely brunch? Start your day off right with clever takes on French Toast and scrambled eggs, plus healthy mornign ideas with granola or sweet potatoes. View All Breakfast Recipes"
            lottieAnimation={
              <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
            }
          />
          <header className="food-sectionHeader">
            <ul className="organizedByList">
              <li>
                <strong className="title">Organized By:</strong>
              </li>
              <li>
                <a href="#" className="course">
                  Recipes By Course
                </a>
              </li>
              <li>
                <a href="#">Recipes By Cuisine</a>
              </li>
            </ul>
          </header>
        </div>
        <div className="recipesSection no-slider">
          <SliderNav rightIcon={false} title="Trending Breakfast Recipes" />
          <ItemContent data={FavRecipeData} />
        </div>

        <div className="recipesSection">
          <NavBar isNavBar={false} title="Latest Breakfast Recipes" />
          <SliderContent data={FavData} />
        </div>
        <Leaderboard
          showCategory={false}
          title="Top Breakfast Recipes"
          description="Ends in 10 Days 23 Hours 46 Minutes 26 Seconds"
          data={FavData1}
        />
        <div className="recipesSection">
          <div></div>
          <SliderNav
            searchBar={true}
            rightIconTitle={`View All ${id}`}
            title="Explore Breakfast Recipes"
            data={categoryData}
            handleSilderData={(data: any, id: string) => {
              if (data || id) {
                setSilderData(data)
                setId(id)
              }
            }}
          />
          <ItemContent data={data} id={id} />
        </div>
        <UserListSection title="Top Breakfast Cooks" />
        <div className="more-categories">
          <div className="category-col">
            <h2>Other Breakfast Categories</h2>
            <ul className="categories-list">
              <li>
                <span>Appetizers</span>
              </li>
              <li>
                <span>Snacks</span>
              </li>
              <li>
                <span>Salads</span>
              </li>
              <li>
                <span>Soups, Stews, & Chili</span>
              </li>
              <li>
                <span>Sandwiches</span>
              </li>
              <li>
                <span>Desserts</span>
              </li>
              <li>
                <span>Baked Goods</span>
              </li>
              <li>
                <span>Lunch</span>
              </li>
              <li>
                <span>Barbecue</span>
              </li>
            </ul>
          </div>
          <div className="category-col">
            <h2>More Recipes By Type</h2>
            <ul className="categories-list category-type">
              <li>
                <span>Appetizers</span>
              </li>
              <li>
                <span>Snacks</span>
              </li>
              <li>
                <span>Salads</span>
              </li>
              <li>
                <span>Soups, Stews, & Chili</span>
              </li>
              <li>
                <span>Sandwiches</span>
              </li>
              <li>
                <span>Desserts</span>
              </li>
              <li>
                <span>Baked Goods</span>
              </li>
              <li>
                <span>Lunch</span>
              </li>
              <li>
                <span>Barbecue</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const MyNewScreen5 = styled(NewScreen5)`
  .banner-area {
    margin: 20px 0 0;

    &:after {
      display: none;
    }
  }

  .recipesSection {
    margin: 0 0 40px;

    @media (max-width: 767px) {
      margin: 0;
    }
  }

  .no-slider {
    .recipesCategoriesSlider {
      margin: 0;
    }
  }

  .food-sectionHeader {
    margin: -1px 0 0;
  }

  .recipesSectionHeader {
    .favorite-head {
      width: auto;
    }
  }

  .class {
    .recipesSectionHeader {
      .favorite-head {
        width: 100%;
      }
    }
  }

  .more-categories {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    padding: 30px 0 80px;

    @media (max-width: 767px) {
      padding: 20px 0 30px;
    }

    .category-col {
      padding: 0 5%;
      width: 50%;

      @media (max-width: 1280px) {
        padding: 0 3%;
      }

      @media (max-width: 1023px) {
        padding: 0 5px;
      }

      @media (max-width: 767px) {
        width: 100%;
        padding: 0;
        margin: 0 0 30px;
      }
    }

    h2 {
      font-size: 20px;
      line-height: 26px;
      margin: 0 0 15px;
      font-weight: 500;
    }
  }

  .categories-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    &.category-type {
      li {
        span {
          background: rgba(99, 146, 255, 0.18);

          &:hover {
            background: rgba(99, 146, 255, 1);
          }
        }
      }
    }

    li {
      margin: 0 7px 14px;

      @media (max-width: 767px) {
        margin: 0 4px 8px;
      }

      span {
        padding: 4px 15px;
        font-size: 10px;
        line-height: 1.5;
        color: #3e3e3e;
        display: block;
        border-radius: 4px;
        background: #fde0e3;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        transition: all 0.25s ease-in-out;
        display: block;
        cursor: pointer;

        @media (max-width: 767px) {
          font-size: 7px;
          padding: 2px 10px;
        }

        &:hover {
          background: #ffb7be;
        }
      }
    }
  }
`
