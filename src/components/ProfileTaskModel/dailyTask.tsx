import { EnvelopIcon, Ticke } from "@icons"
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
    <div>
      <div>
        {days.map(e => {
          return (
            <>
              <span>{e}</span>
            </>
          )
        })}
        {(Data || [])?.map((u: any, i: number) => {
          return (
            <div className="receipeDetails" key={i}>
              <div className="recipeholder">
                <span>{u?.status === "complete" && <Ticke />}</span>
                <EnvelopIcon />
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
    </div>
  )
}

export default DailyTask
