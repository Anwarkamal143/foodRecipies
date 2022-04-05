import { EnvelopIcon, LampIcon, Loader, Ticke } from "@icons"
import clsxm from "@lib/clsxm"
import React, { useState } from "react"
import { ProgressBar } from "src/components"
import { CircularProgresWithChildren } from "src/components/CirclePrgoressWithChildren"
import styled from "styled-components"
import {
  LeftSide,
  Userprofilewrapper,
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
    <div className={`${className} profileStatusModal`}>
      <Userprofilewrapper className={clsxm("")}>
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
          <div className="userprofile-text-area">
            <div className="userProfileTextbox">
              <h2 className="userProfileTitle">Omer Erdogan</h2>
            </div>
            <p className="userProfileProgreTitle">15% Tasks Completed</p>
            <ProgressBar
              showPrgress={false}
              progresspercent={20}
              bgColor={"#ef305e"}
            />
          </div>
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

export default styled(DailyTask)`
  .profileStatusWeekly {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 30px;

    .tab-link {
      width: 30px;
      height: 30px;
      background: #f1f4fb;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      margin: 0 5px;
      color: #7474a9;
      font-size: 12px;
      line-height: 16px;
      font-weight: 600;
      transition: all 0.4s ease;
      position: relative;
      cursor: pointer;

      &:hover {
        background: #e0464d;
        color: #fff;
      }

      &.active {
        background: #e0464d;
        color: #fff;
        border: 2px solid #fff;

        &:after {
          opacity: 1;
          visibility: visible;
        }
      }

      &:after {
        position: absolute;
        left: -3px;
        right: -3px;
        top: -3px;
        bottom: -3px;
        content: "";
        border: 1px solid #e0464d;
        border-radius: 100%;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;
      }
    }
  }

  .userProfileProgresBox {
    border: 1px solid #f2f3f5;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 0 30px;

    .circleprogress {
      width: 64px;

      > div {
        > div {
          > div {
            padding: 4px;
          }
        }
      }

      .CircularProgressbar-trail {
        stroke: transparent;
      }

      .CircularProgressbar-path {
        stroke: #e0464d;
      }
    }

    .userprofile-text-area {
      flex-grow: 1;
      flex-basis: 0;
      min-width: 0;
      padding: 0 0 0 15px;
    }

    .userProfileTitle {
      font-size: 18px;
      line-height: 23px;
      margin: 0 0 5px;
      color: #1e1e2d;
      font-weight: 400;
    }

    .userProfileProgreTitle {
      color: #7474a9;
      font-size: 10px;
      line-height: 13px;
      margin: 0 0 10px;
    }
  }

  .receipeDetails {
    border: 1px solid #f2f3f5;
    border-radius: 15px;
    margin: 0 0 15px;
    padding: 20px;

    .recipeholder {
      display: flex;
      align-items: center;
    }

    .checkIcon {
      margin: 0 15px 0 0;
    }

    .imageIcon {
      width: 36px;
      margin: 0 15px 0 0;

      svg {
        fill: #e0464d;
      }
    }

    .recipename {
      font-size: 18px;
      line-height: 1.4;
      color: #1e1e2d;
      font-weight: 600;
      display: block;
    }

    .receipeRatings {
      color: #86909c;
      font-size: 10px;
      line-height: 1.5;
      display: block;
    }

    .receipeTextbox {
      flex-grow: 1;
      flex-basis: 0;
      min-width: 0;
      padding: 0 50px 0 0;
      position: relative;
    }

    .img-loader {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 40px;

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }

  .profileStatusModalButtons {
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .btnStart {
      width: 135px;
      height: 40px;
      background: #e0464d;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      transition: all 0.25s ease-in-out;

      &:hover {
        background: #d3262e;
      }
    }

    .btnIdeaLamp {
      width: 40px;
      height: 40px;
      border: 1px solid #f2f3f5;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      margin: 0 0 0 15px;
      transition: all 0.25s ease-in-out;

      &:hover {
        background: #f2f3f5;
      }
    }
  }
`
