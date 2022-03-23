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
    <div className="dashboardStatisticsColumn down">
      <h3>{title}</h3>
      <p className="dashboardStatisticsInfo">
        <strong>{count} </strong>
        <span>
          {trandingCount}
          {tranding === "up" ? <ProgressArrowUp /> : <ProgressArrowDown />}
        </span>
      </p>
      <p className="dashboardStatisticsTime">{reviewTime}</p>
    </div>
  )
}

export const StatisticsItem = styled(StatisticsIte)``
