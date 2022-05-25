import { Banner } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { categoryData, FavData, FavData1, FavRecipeData, ourCooks } from "data"
import { useEffect, useState } from "react"
import Lottie from "react-lottie"
import ItemContent from "src/components/ItemContent"
import NavBar from "src/components/NavBar"
import SliderContent from "src/components/SliderContent"
import SliderNav from "src/components/SliderNavBar"
import Footer from "src/pages/NewPage/footer/footer"
import Leaderboard from "src/pages/NewPage/Leaderboard"
import OurTiktoker from "src/pages/NewPage/OurTiktoker"
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
          <SliderNav
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

        <OurTiktoker
          discription="A recipe is a set of instructions that describes how to prepare or make something."
          title={"Our Cooks on Tiktok"}
          data={ourCooks}
        />
        <UserListSection title="Top Breakfast Cooks" />
        <div className="more-categories">
          <div className="category-col">
            <h2>Other Breakfast Categories</h2>
            <ul>
              <li>Appetizers</li>
              <li>Snacks</li>
              <li>Salads</li>
              <li>Soups, Stews, & Chili</li>
            </ul>
          </div>
          <div className="category-col">
            <h2>More Recipes By Type</h2>
            <li>Appetizers</li>
            <li>Snacks</li>
            <li>Salads</li>
            <li>Soups, Stews, & Chili</li>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const MyNewScreen5 = styled(NewScreen5)`
  .banner-area {
    margin: 0;

    &:after {
      display: none;
    }
  }

  .recipesSection {
    margin: 0 0 40px;
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
  }
`
