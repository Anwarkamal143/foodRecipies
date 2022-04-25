import { ChevronRightIcon } from "@icons"
import { PageLayoutWrapper } from "@layouts"
import { categoryData, FavData, OnlineUsersData, ourCooks } from "data"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import RecipesCard from "../../components/RecipiesCard"
import CategoryTypes from "./categoryTypes"
import FollowUsers from "./FollowUsers"
import LatestRecipesSlider from "./latestRecipes"
import Leaderboard from "./Leaderboard"
import OurCooksDetails from "./OurCooksDetails"
import UserListSection from "./userListSection"

type Props = {
  className?: string
}

const NewPage = ({ className }: Props) => {
  const [newPageData, setNewPageData] = useState<any>([])

  useEffect(() => {
    setNewPageData(categoryData)
  }, [categoryData])
  return (
    <div className={`recipesPage ${className}`}>
      <PageLayoutWrapper className="recipesPageWrapper" variant={"regular"}>
        <div className="recipesContainer">
          <div className="recipesSection">
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
            <LatestRecipesSlider />
          </div>
          <Leaderboard data={FavData} />
          <div className="recipesSection align-center">
            <CategoryTypes
              data={newPageData}
              title="Browse Recipes by Ingredient"
              discription="A recipe is a set of instructions that describes how to prepare or make something."
              viewAllBtn={false}
            />
          </div>
          <OurCooksDetails data={ourCooks} />
          <UserListSection />
          <OurCooksDetails data={ourCooks} />
          <FollowUsers data={OnlineUsersData} />
        </div>
      </PageLayoutWrapper>
    </div>
  )
}

export default styled(NewPage)`
  width: 100%;
`
