import { Button, DropDown } from "@components"
import { Bell, Calander, TimeIcon } from "@icons"
import { LeaderBoradCategoryData } from "data"
import RecipesCard from "../../components/RecipiesCard"
import LeaderBoradCategory from "./leaderBoradCategory"
type Props = {
  data?: any
  title?: string
  description?: string
  showCategory?: boolean
}

const Leaderboard = ({
  data = [],
  title = " Recipe Leaderboard",
  description = " Ends in 10 Days 23 Hours 46 Minutes 26 Seconds",
  showCategory = true,
}: Props) => {
  return (
    <div className="leaderboardRecipesSection">
      <div className="recipesSection leaderboardRecipesBlock">
        <header className="recipesSectionHeader">
          <div className="recipesSectionTitlebox">
            <strong className="recipesSectionTitle"> {title}</strong>
            <span className="recipesSectionText">
              <TimeIcon /> {description}
            </span>
          </div>
          <div className="leaderboardFilters">
            <DropDown
              button={selected => (
                <Button
                  shape="circle"
                  iconLeft={<Bell />}
                  className="buttonFilter"
                  size="small"
                  title="All Recipes"
                >
                  {selected}
                </Button>
              )}
              items={[
                { name: "Most Popular" },
                { name: "Most Viewed" },
                { name: "Most Liked" },
                { name: "Most Trending" },
              ]}
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
                >
                  {selected}
                </Button>
              )}
              items={[
                { name: "This Week" },
                { name: "This Month" },
                { name: "This Year" },
                { name: "All Time" },
              ]}
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
        <div className="leaderboardRecipesHolder">
          <div className="leaderboardRecipesColumn">
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
          <div className="leaderboardRecipesColumn">
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
        </div>
      </div>
      {showCategory && (
        <div className="items">
          <LeaderBoradCategory data={LeaderBoradCategoryData} />
        </div>
      )}
    </div>
  )
}

export default Leaderboard
