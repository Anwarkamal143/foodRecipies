import { DropDown } from "@components"
import {
  Calander,
  ChevronRightIcon,
  DairyFree,
  GlutenFree,
  NutFree,
  Vegan,
  Vegetarian
} from "@icons"
import { getPageLayout } from "@layouts"
import {
  categoryData,
  FavData,
  FavRecipeData, IngredientData, OnlineUsersData,
  ourCooks
} from "data"
import React, { useEffect, useState } from "react"
import { SearchHeader } from "src/components/AppSearch/Header"
import styled from "styled-components"
import RecipesCard from "../../components/RecipiesCard"
import { SearchedSections } from "./../../components/AppSearch/SearchedSections"
import Button from "./../../components/Button/Button"
import SilderComponent from "./components/SliderComponents"
import FollowUsers from "./FollowUsers"
import Footer from "./footer/footer"
import Leaderboard from "./Leaderboard"
import OurCooksDetails from "./OurCooksDetails"
import OurTiktoker from "./OurTiktoker"
import UserListSection from "./userListSection"
type Props = {
  className?: string
}

const NewPage = ({ className }: Props) => {
  const [newPageData, setNewPageData] = useState<any>([])
  const [searchText, setSearchText] = useState<any>("")

  useEffect(() => {
    setNewPageData(categoryData)
  }, [categoryData])
  return (
    <div className={`recipesPage ${className}`}>

        <div className="recipesContainer">
          <div className="recipesSection">
            {/* <AppSearch toggleSideBar={true} /> */}
            <div className="pageFiltersSearch">
              <div className="search">
                <SearchHeader
                  onSearch={(s?: string) => setSearchText(s)}
                  header={false}
                  filterOption={true}
                />
                {searchText && (
                  <SearchedSections isSearchingEnable={!!searchText} />
                )}
              </div>
              <div className="quickFind">
                <span className="lbl">Quick Find:</span>
                <DropDown
                  button={selected => (
                    <Button
                      shape="circle"
                      iconLeft={<Calander />}
                      className="buttonFilter"
                      size="small"
                      title="Monthly"
                      defaultValue={"By Diet"}
                    >
                      {selected}
                    </Button>
                  )}
                  items={[
                    { name: "Gluten-Free", icon: <GlutenFree /> },
                    { name: "Vegan", icon: <Vegan /> },
                    { name: "Vegetarian", icon: <Vegetarian /> },
                    { name: "Nut-Free", icon: <NutFree /> },
                    { name: "Dairy-Free", icon: <DairyFree /> },
                  ]}
                  renderItem={({ item, isActive, onClick }) => {
                    return (
                      <div
                        className={`${isActive} item`}
                        onClick={() => onClick(item.name)}
                      >
                        {item.icon}
                        {item.name}
                      </div>
                    )
                  }}
                />
                <DropDown
                  button={selected => (
                    <Button
                      shape="circle"
                      iconLeft={<Calander />}
                      className="buttonFilter"
                      size="small"
                      title="Monthly"
                      defaultValue={"By Cuisine"}
                    >
                      {selected}
                    </Button>
                  )}
                  items={[
                    {
                      name: "Italian",
                      icon: <img src="/images/italy.png" alt="side-dishes" />,
                    },
                    {
                      name: "American",
                      icon: <img src="/images/italy.png" alt="side-dishes" />,
                    },
                    {
                      name: "Mexican",
                      icon: <img src="/images/italy.png" alt="side-dishes" />,
                    },
                    {
                      name: "Asian",
                      icon: <img src="/images/italy.png" alt="side-dishes" />,
                    },
                    {
                      name: "Indian",
                      icon: <img src="/images/italy.png" alt="side-dishes" />,
                    },
                  ]}
                  renderItem={({ item, isActive, onClick }) => {
                    return (
                      <div
                        className={`${isActive} item`}
                        onClick={() => onClick(item.name)}
                      >
                        {item.icon}
                        {item.name}
                      </div>
                    )
                  }}
                />
              </div>
            </div>
            <SilderComponent
              data={categoryData}
              isContent={false}
              isNavBar={true}
              isNavSlider={true}
              rightIcon={false}
            />
            <header className="recipesSectionHeader">
              <strong className="recipesSectionTitle">Featured Recipes</strong>
              <div className="favorite-head">
                <span className="recipesSectionText">
                  A recipe is a set of instructions that describes how to
                  prepare or make.
                </span>
                <span className="feature-btn">
                  View All Featured <ChevronRightIcon />{" "}
                </span>
              </div>
            </header>
            <div className="recipesSectionHolder">
              <RecipesCard data={FavRecipeData} />
            </div>
          </div>
          <div className="recipesSection">
            <SilderComponent
              data={categoryData}
              isContentSlider={false}
              isContent={true}
              isNavBar={true}
              
              isNavSlider={true}
              title="Browse Recipes By Category"
              discription="A recipe is a set of instructions that describes how to prepare or make."
            />
          </div>
          <div className="recipesSection">
            <SilderComponent
              data={FavData}
              title="Latest Recipes"
              isContentSlider={true}
              isContent={true}
              isNavBar={false}
              discription="A recipe is a set of instructions that describes how to prepare or make."
            />
          </div>
          <Leaderboard data={FavData} />
          <div className="recipesSection">
            <SilderComponent
              data={IngredientData}
              title="Browse Recipes by Ingredient"
              isContentSlider={true}
              isContent={true}
              isNavBar={true}
              isNavSlider={false}
              discription="A recipe is a set of instructions that describes how to prepare or make."
            />
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
    className:"recipesPageWrapper", variant:"regular",
    sidebar: false
  }
}
export default styled(NewPage)`
  width: 100%;
`
