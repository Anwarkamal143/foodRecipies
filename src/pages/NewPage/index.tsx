import { DropDown } from "@components"
import { Calander, ChevronRightIcon } from "@icons"
import { PageLayoutWrapper } from "@layouts"
import { categoryData, FavData, OnlineUsersData, ourCooks } from "data"
import React, { useEffect, useState } from "react"
import { SearchHeader } from "src/components/AppSearch/Header"
import styled from "styled-components"
import RecipesCard from "../../components/RecipiesCard"
import { SearchedSections } from "./../../components/AppSearch/SearchedSections"
import Button from "./../../components/Button/Button"
import CategoryTypes from "./categoryTypes"
import FollowUsers from "./FollowUsers"
import Footer from "./footer/footer"
import LatestRecipesSlider from "./latestRecipes"
import Leaderboard from "./Leaderboard"
import OurCooksDetails from "./OurCooksDetails"
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
      <PageLayoutWrapper className="recipesPageWrapper" variant={"regular"}>
        <div className="recipesContainer">
          <div className="recipesSection">
            {/* <AppSearch toggleSideBar={true} /> */}
            <div className="pageFiltersSearch">
              <div className="search">
                <SearchHeader onSearch={(s?: string) => setSearchText(s)} />
                <SearchedSections isSearchingEnable={!!searchText} />
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
                  items={[{ name: "By Diet" }, { name: "By Diet" }]}
                  renderItem={({ item, isActive, onClick }) => {
                    return (
                      <div
                        className={`${isActive} item`}
                        onClick={() => onClick(item.name)}
                      >
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
                  items={[{ name: "By Cuisine" }, { name: "By Cuisine" }]}
                  renderItem={({ item, isActive, onClick }) => {
                    return (
                      <div
                        className={`${isActive} item`}
                        onClick={() => onClick(item.name)}
                      >
                        {item.name}
                      </div>
                    )
                  }}
                />
              </div>
            </div>

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
              <RecipesCard data={FavData} />
            </div>
          </div>
          <div className="recipesSection">
            <CategoryTypes
              data={newPageData}
              title="Browse Recipes By Category"
              discription="A recipe is a set of instructions that describes how to prepare or make."
            />
          </div>
          <div className="recipesSection">
            <header className="recipesSectionHeader">
              <strong className="recipesSectionTitle">Latest Recipes</strong>
              <span className="feature-btn">
                View All <ChevronRightIcon />
              </span>
              <div className="favorite-head">
                <span className="recipesSectionText">
                  A recipe is a set of instructions that describes how to
                  prepare or make.
                </span>
              </div>
            </header>
            <LatestRecipesSlider data={FavData} />
          </div>
          <Leaderboard data={FavData} />
          <div className="recipesSection align-center ingredientBlock">
            <CategoryTypes
              data={newPageData}
              title="Browse Recipes by Ingredient"
              discription="A recipe is a set of instructions that describes how to prepare or make something."
              viewAllBtn={false}
            />
          </div>

          <OurCooksDetails
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
      </PageLayoutWrapper>
    </div>
  )
}

export default styled(NewPage)`
  width: 100%;
`
