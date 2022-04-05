import { EnvelopIcon, LampIcon, Loader, Ticke } from "@icons"
import clsxm from "@lib/clsxm"
import React, { useState } from "react"
import { ProgressBar } from "src/components"
import { CircularProgresWithChildren } from "src/components/CirclePrgoressWithChildren"
import { Image } from "src/components/Image"
import styled from "styled-components"
import {
  LeftSide,
  Userprofilewrapper
} from "../../components/common/UserProfile/userprofile.styled"
import { CircleDefaultImage } from "../common/images"

const DataTwo = [
  {
    day: "M",
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
    day: "T",
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
    day: "W",
    data: [
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
      },
    ],
  },
  {
    day: "T",
    data: [],
  },
  {
    day: "F",
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
    day: "S",
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
    day: "S",
    data: [
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
      },
    ],
  },
]
type Props = {
  className?: string
  userName?: string
}

function DailyTask({ className, userName }: Props) {
  const [taskData, setTaskData] = useState<any>(0)
  const DaliyTaskData = (item: any) => {
    setTaskData(item)
    return true
  }
  console.log(taskData, "DataTwo[item]")
  return (
    <div className="profileStatusModal">
      <Userprofilewrapper className={clsxm("", className)}>
        <LeftSide className="userProfileProgresBox">
          <CircularProgresWithChildren
            maxValue={100}
            parentClass="circleprogress"
            strokeWidth={3}
            className="circleimages"
            value={15}
          >
            <CircleDefaultImage
              className="circleimg"
              src="/images/profile-img.png"
              alt="default profile imag"
            />
          </CircularProgresWithChildren>
          <div className="userProfileTextbox">
            <h2 className="userProfileTitle">
              <span>{userName} </span>
              <Image src="/images/WavingHandEmoji.png" alt="waving hand" />
            </h2>
            <span className="userProfilesubTitle">Founder Cook Profile</span>
          </div>
          <p className="userProfileProgreTitle">15% Tasks Completed</p>
          <ProgressBar
            showPrgress={false}
            progresspercent={20}
            bgColor={"#ef305e"}
          />
        </LeftSide>
      </Userprofilewrapper>
      <div className="profileStatusWeekly">
        {DataTwo.map((e, ele) => {
          return (
            <>
              <span
                className={`tab-link ${
                  ele === taskData ? "active" : "in-active"
                }`}
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
                  <div className="img-loader">
                    <Loader />
                  </div>
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
          <LampIcon />
        </a>
      </div>
    </div>
  )
}

export default styled(DailyTask)``
