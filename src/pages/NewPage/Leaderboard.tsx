import { Button, DropDown } from "@components"
import { Bell, Calander } from "@icons"
import { LeaderBoradCategoryData } from "data"
import React from "react"
import RecipesCard from "../../components/RecipiesCard"
import LeaderBoradCategory from "./leaderBoradCategory"
type Props = {
  data?: any
}

const Leaderboard = ({ data = [] }: Props) => {
  return (
    <div>
      <h2> Recipe Leaderboard</h2>
      <span>Ends in 10 Days 23 Hours 46 Minutes 26 Seconds</span>
      <div className="laederboard-head">
        <div>
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
      </div>
      <div className="items">
        <RecipesCard
          tag={false}
          heartIcon={false}
          discription={false}
          timeDuraion={false}
          data={data}
        />
        <LeaderBoradCategory data={LeaderBoradCategoryData} />
      </div>
    </div>
  )
}

export default Leaderboard
