import { EnvelopIcon, LampIcon, Loader, Ticke } from "@icons"
import React, { useState } from "react"


const DataTwo = [
  {
    day: 1,
    data: [
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
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
      },
    ],
  },
  {
    day: 2,
    data: [
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
    ],
  },
  {
    day: 3,
    data: [
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
      },
    ],
  },
  {
    day: 4,
    data: [],
  },
  {
    day: 5,
    data: [
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
    ],
  },
  {
    day: 6,
    data: [
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
    ],
  },
  {
    day: 7,
    data: [
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
      },
    ],
  },
]
type Props = {}

function DailyTask({}: Props) {
  const [taskData, setTaskData] = useState<any>([])
  const DaliyTaskData = (item: any) => {
    setTaskData(item)
    return true
  }
  console.log(taskData, "DataTwo[item]")
  return (
    <div className="profileStatusModal">
      <div className="profileStatusWeekly">
        {DataTwo.map((e, ele) => {
          return (
            <>
              <span
                onClick={() => {
                  DaliyTaskData(ele)
                }}
              >
                {e.day}
              </span>
            </>
          )
        })}
      </div>
      <div className="receipeDetailsWrap">
        {(DataTwo[taskData]?.data || []).map((u: any, i: number) => {
          return (
            <div className="receipeDetails" key={i}>
              <div className="recipeholder">
                <span className="checkIcon">
                  {u?.status === "complete" && <Ticke />}
                </span>
                <span className="imageIcon">
                  <EnvelopIcon />
                </span>
                <div className="receipeTextbox">
                  <span className="recipename">{u.title}</span>
                  <div className="recipemeta">
                    <div className="receipeRatings">{u.subtitle}</div>
                  </div>
                  <Loader />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="profileStatusModalButtons">
        <a href="#" className="btnStart">
          Start
        </a>
        <a href="#" className="btnIdeaLamp">
          {/* <LampIcon /> */}
        </a>
      </div>
    </div>
  )
}

export default DailyTask
