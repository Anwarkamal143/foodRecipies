import React from "react"
import RecipesCard from "../../components/RecipiesCard"

type Props = {
  data?: any
}

const LeaderBoradCategory = ({ data }: Props) => {
  console.log(data, 'data={data}')
  return (
    <div>
      <div className="Confort-Food">
        <h2>Confort Food</h2>
        <span>View All </span>
        <div className="items">
          <RecipesCard tag={false} data={data} />
        </div>
      </div>
      <div className="Confort-Food">
        <h2>30 Minutes or less</h2>
        <span>View All </span>
        <div className="items">
          <RecipesCard tag={false} data={data} />
        </div>
      </div>
      <div className="Confort-Food">
        <h2>5 Ingredients or Less</h2>
        <span>View All </span>
        <div className="items">
          <RecipesCard tag={false} data={data} />
        </div>
      </div>
    </div>
  )
}

export default LeaderBoradCategory
