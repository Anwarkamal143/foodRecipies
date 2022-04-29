import React from "react"
import ItemCards from "src/components/CooksCard"
import styled from "styled-components"
type Props = {
  data?: any
  className?: string
  id?: string
}

const ItemContent = ({ data, id, className }: Props) => {
  return (
    <div className={className}>
      <div className="recipesSectionHolder">
        {data?.map((e: any) => {
          return (
            <ItemCards
              key={e.id}
              image={e.image}
              id={id || ""}
              fvrtBy={e.fvrtBy}
              time={e.time}
              state={e.state}
            />
          )
        })}
      </div>
    </div>
  )
}

export default styled(ItemContent)`
  .recipesSectionHolder .slick-slider {
    width: 100%;
  }
`
