import { ProgressArrowDown, ProgressArrowUp } from "@icons"
import React from "react"
import styled from "styled-components"

type IStatisticsItemProps = {
  title?: string
  count?: number | string
  trandingCount?: number
  tranding?: "down" | "up"
  reviewTime?: string
}

const StatisticsIte = (props: IStatisticsItemProps) => {
  const { title, count, trandingCount = 0, tranding, reviewTime } = props
  return (
    <div>
      <h3>{title}</h3>
      <p>
        <strong>{count} </strong>
        <span>
          {trandingCount}
          {tranding === "up" ? <ProgressArrowUp /> : <ProgressArrowDown />}
        </span>
        <p>{reviewTime}</p>
      </p>
    </div>
  )
}

export const StatisticsItem = styled(StatisticsIte)``
