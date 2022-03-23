import { CircularProgresWithChildren } from "@components"
import { FormatNumber } from "@utils"
import React from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import styled from "styled-components"
type IPerformanceProps = {
  totalInteractions: number
  remaining: number
  className?: string
}
const CircularProgressBar = (props: IPerformanceProps) => {
  const { remaining = 20, totalInteractions = 60, className } = props
  return (
    <div className={className}>
      <CircularProgresWithChildren
        value={20}
        circleRatio={0.5}
        parentClass="circularperformance"
        // strokeWidth={5}
        counterClockwise
        styles={buildStyles({
          pathColor: "#5EE2AD",
          trailColor: "#eee",
          strokeLinecap: "butt",
          rotation: 1 / 4,
        })}
      >
        <>
          <CircularProgressbar
            value={60}
            circleRatio={0.5}
            className="childprogess"
            strokeWidth={10}
            styles={buildStyles({
              pathColor: "#E0464D",
              trailColor: "transparent",
              strokeLinecap: "butt",
              rotation: 1 / -4,
            })}
          />
          <div className="text-children">
            <p className="textSubtitle">Interactions</p>
            <p className="textStatus">
              <strong>{FormatNumber(1370000)} </strong>{" "}
              <span>Of {FormatNumber(2000000)}</span>
            </p>
            <p className="textRamaining">{FormatNumber(6300000)} Remaining</p>
          </div>
        </>
        {/* Foreground path */}
      </CircularProgresWithChildren>
    </div>
  )
}
export const PerformanceBar = styled(CircularProgressBar)`
  .circularperformance
    [data-test-id=${"CircularProgressbarWithChildren__children"}] {
    /* Attribute has this exact value */
    margin-top: -101% !important;
    width: 107% !important;
    height: 102% !important;
    margin-left: -3.5%;

    .text-children {
      text-align: center;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`
