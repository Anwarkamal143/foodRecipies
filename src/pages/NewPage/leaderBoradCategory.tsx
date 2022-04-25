import { ChevronRightIcon } from "@icons"
import React from "react"
import RecipesCard from "../../components/RecipiesCard"

type Props = {
  data?: any
}

const LeaderBoradCategory = ({ data }: Props) => {
  console.log(data, 'data={data}')
  return (
    <div className="leaderboardRecipesColumns">
      <div className="Confort-Food">
        <div className="leaderboardSubHead">
          <h2>Confort Food</h2>
          <span className="feature-btn">View All <ChevronRightIcon /></span>
        </div>
        <div className="items">
          <RecipesCard tag={false} data={data} />
        </div>
      </div>
      <div className="Confort-Food">
        <div className="leaderboardSubHead">
          <h2>30 Minutes or less</h2>
          <span className="feature-btn">View All <ChevronRightIcon /></span>
        </div>
        <div className="items">
          <RecipesCard tag={false} data={data} />
        </div>
      </div>
      <div className="Confort-Food">
        <div className="leaderboardSubHead">
          <h2>5 Ingredients or Less</h2>
          <span className="feature-btn">View All <ChevronRightIcon /></span>
        </div>
        <div className="items">
          <RecipesCard tag={false} data={data} />
        </div>
      </div>
    </div>
  )
}

export default LeaderBoradCategory
