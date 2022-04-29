import { DropDown } from "@components"
import {
  Bell,
  Calander,
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
  FavRecipeData,
  IngredientData,
  OnlineUsersData,
  ourCooks
} from "data"
import React, { useEffect, useState } from "react"
import { SearchHeader } from "src/components/AppSearch/Header"
import ItemContent from "src/components/ItemContent"
import NavBar from "src/components/NavBar"
import SliderContent from "src/components/SliderContent"
import SliderNav from "src/components/SliderNavBar"
import styled from "styled-components"
import { SearchedSections } from "./../../components/AppSearch/SearchedSections"
import Button from "./../../components/Button/Button"
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
                    iconLeft={<Bell />}
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
                    icon: <img src="/images/american.png" alt="side-dishes" />,
                  },
                  {
                    name: "Mexican",
                    icon: <img src="/images/mexican.png" alt="side-dishes" />,
                  },
                  {
                    name: "Asian",
                    icon: <img src="/images/asian.png" alt="side-dishes" />,
                  },
                  {
                    name: "Indian",
                    icon: <img src="/images/india.png" alt="side-dishes" />,
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
          <div className="pageProductCategories">
            <SliderNav data={categoryData} header={false} />
          </div>
        </div>
        <div className="recipesSection">
          <SliderNav
            title="Featured Recipes"
            discription="A recipe is a set of instructions that describes how to prepare or make."
          />
          <ItemContent data={FavRecipeData} />
        </div>
        <div className="recipesSection">
          <SliderNav
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
`
