import { getPageLayout } from "@layouts"
import {
  categoryData,
  FavData,
  FavRecipeData,
  IngredientData,
  OnlineUsersData,
  ourCooks,
} from "data"
import React, { useEffect, useState } from "react"
import ItemContent from "src/components/ItemContent"
import NavBar from "src/components/NavBar"
import SliderContent from "src/components/SliderContent"
import SliderNav from "src/components/SliderNavBar"
import styled from "styled-components"
import FollowUsers from "./FollowUsers"
import Footer from "./footer/footer"
import Leaderboard from "./Leaderboard"
import OurCooksDetails from "./OurCooksDetails"
import OurTiktoker from "./OurTiktoker"
import SearchBar from "./SearchBar"
import UserListSection from "./userListSection"
type Props = {
  className?: string
}

const NewPage = ({ className }: Props) => {
  const [newPageData, setNewPageData] = useState<any>([])
  const [id, setId] = useState<any>("")
  const [data, setSilderData] = useState<any>([])
  const [ingredientData, setIngredientData] = useState<any>([])
  useEffect(() => {
    setNewPageData(categoryData)
  }, [categoryData])

  return (
    <div className={`recipesPage ${className}`}>
      <div className="recipesContainer">
        <div className="recipesSection">
          {/* <AppSearch toggleSideBar={true} /> */}
          <SearchBar />
          <div className="pageProductCategories">
            <SliderNav data={categoryData} header={false} />
          </div>
        </div>
        <div className="recipesSection no-slider">
          <SliderNav
            rightIconTitle="View All Seafood"
            title="Featured Recipes"
            discription="A recipe is a set of instructions that describes how to prepare or make."
          />
          <ItemContent data={FavRecipeData} />
        </div>
        <div className="recipesSection">
          <SliderNav
            rightIconTitle={`View All ${id}`}
            title="Browse Recipes By Category"
            discription="A recipe is a set of instructions that describes how to prepare or make."
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
        <div className="recipesSection">
          <NavBar
            isNavBar={false}
            title="Latest Recipes"
            discription="A recipe is a set of instructions that describes how to prepare or make."
          />
          <SliderContent data={FavData} />
        </div>
        <Leaderboard data={FavData} />
        <div className="recipesSection align-center ingredientBlock">
          <NavBar
            data={IngredientData}
            title="Browse Recipes by Ingredient"
            discription="A recipe is a set of instructions that describes how to prepare or make."
            handleSilderData={(data: any) => {
              if (data) {
                setIngredientData(data)
                // setId(id)
              }
            }}
          />
          <SliderContent data={ingredientData} />
        </div>
        <OurTiktoker
          discription="A recipe is a set of instructions that describes how to prepare or make something."
          title={"Our Cooks on Tiktok"}
          data={ourCooks}
        />
        <UserListSection />
        <div className="sectionYoutube">
          <OurCooksDetails
            discription="A recipe is a set of instructions that describes how to prepare or make something."
            title={"Our Cooks on Youtube"}
            data={ourCooks}
          />
        </div>
        <FollowUsers
          data={OnlineUsersData}
          discription="A recipe is a set of instructions that describes how to prepare or make something."
          title={"New Online Cooks"}
        />
      </div>
      <Footer />
    </div>
  )
}
NewPage.layout = {
  layout: getPageLayout,
  props: {
    className: "recipesPageWrapper",
    variant: "regular",
    sidebar: false,
  },
}
export default styled(NewPage)`
  width: 100%;

  .no-slider {
    .recipesCategoriesSlider {
      margin: 0;
    }
  }

  .close-header-search {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`
