import { Button, DropDown } from "@components"
import { Bell, Calander, TimeDuraion } from "@icons"
import { LeaderBoradCategoryData } from "data"
import React from "react"
import RecipesCard from "../../components/RecipiesCard"
import LeaderBoradCategory from "./leaderBoradCategory"
type Props = {
  data?: any
}

const Leaderboard = ({ data = [] }: Props) => {
  return (
    <div className="leaderboardRecipesSection">
      <div className="recipesSection leaderboardRecipesBlock">
        <header className="recipesSectionHeader">
          <div className="recipesSectionTitlebox">
            <strong className="recipesSectionTitle"> Recipe Leaderboard</strong>
            <span className="recipesSectionText"><TimeDuraion /> Ends in 10 Days 23 Hours 46 Minutes 26 Seconds</span>
          </div>
          <div className="leaderboardFilters">
            <DropDown
              button={selected => (
                <Button
                  shape="circle"
                  iconRight={<Bell />}
                  className="buttonFilter"
                  size="small"
                  title="All Recipes"
                >
                  {selected}
                </Button>
              )}
              items={[{ name: "New" }, { name: "Most Popular" }]}
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
                  iconRight={<Calander />}
                  className="buttonFilter"
                  size="small"
                  title="Monthly"
                >
                  {selected}
                </Button>
              )}
              items={[{ name: "New" }, { name: "Most Popular" }]}
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
        </header>
        <div className="leaderboardRecipesList">
          <RecipesCard
            tag={false}
            heartIcon={false}
            discription={false}
            timeDuraion={false}
            data={data}
          />
        </div>
      </div>
      <div className="items">
        <LeaderBoradCategory data={LeaderBoradCategoryData} />
      </div>
    </div>
  )
}

export default Leaderboard
