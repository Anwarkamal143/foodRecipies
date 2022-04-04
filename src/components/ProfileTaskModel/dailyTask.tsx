import { EnvelopIcon, LampIcon, Ticke } from "@icons"
import React from "react"

const days = ["1", "2", "3", "4", "5", "6", "7"]
const Data = [
  {
    status: "complete",
    title: "Master Cook",
    subtitle: "Upload more than 250 recipes",
  },
  {
    status: "complete",
    title: "Master Cook",
    subtitle: "Upload more than 250 recipes",
  },
  {
    status: "complete",
    title: "Master Cook",
    subtitle: "Upload more than 250 recipes",
  },
]
type Props = {}

function DailyTask({}: Props) {
  return (
    <div className="profileStatusModal">
      <div className="profileStatusWeekly">
        {days.map(e => {
          return (
            <>
              <span>{e}</span>
            </>
          )
        })}
        </div>
        <div className="receipeDetailsWrap">
          {(Data || [])?.map((u: any, i: number) => {
            return (
              <div className="receipeDetails" key={i}>
                <div className="recipeholder">
                  <span className="checkIcon">{u?.status === "complete" && <Ticke />}</span>
                  <span className="imageIcon">
                    <EnvelopIcon />
                  </span>
                  <div className="receipeTextbox">
                    <span className="recipename">{u.title}</span>
                    <div className="recipemeta">
                      <div className="receipeRatings">{u.subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="profileStatusModalButtons">
          <a href="#" className="btnStart">Start</a>
          <a href="#" className="btnIdeaLamp"><LampIcon /></a>
        </div>
    </div>
  )
}

export default DailyTask
