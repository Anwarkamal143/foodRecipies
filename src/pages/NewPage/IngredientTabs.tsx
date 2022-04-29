import { ChevronRightIcon } from "@icons"
import React, { useRef, useState } from "react"
import styled from "styled-components"

type Props = {
  data?: any
  className?: string
  title?: string
  discription?: string
  viewAllBtn?: boolean
}

const IngredientTabs = ({
  className,
  data = [],
  title,
  discription,
  viewAllBtn = true,
}: Props) => {
  const [index, setIndex] = useState<any>(0)
  const sliderRef = useRef(null)
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className={className}>
      <header className="recipesSectionHeader">
        <strong className="recipesSectionTitle">{title}</strong>
        <div className="favorite-head">
          <span className="recipesSectionText">{discription}</span>
          {viewAllBtn && (
            <span className="feature-btn">
              View All Breakfast <ChevronRightIcon />{" "}
            </span>
          )}
        </div>
      </header>
    </div>
  )
}

export default styled(IngredientTabs)``
