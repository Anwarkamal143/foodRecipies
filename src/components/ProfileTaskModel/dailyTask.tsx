import { CircleProgress, CircleTick, LampIcon, Ticke } from "@icons"
import clsxm from "@lib/clsxm"
import React, { useState } from "react"
import { Image, ProgressBar } from "src/components"
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
        title: "Recipe Posts",
        subtitle: "Upload 5 recipes this week",
        posts: "3/5",
        postsTitle: "",
      },
      {
        status: "complete",
        title: "Profile Views",
        subtitle: "Recieve 1k profile views",
        posts: "275",
        postsTitle: "Views",
      },
      {
        status: "complete",
        title: "New Followers",
        subtitle: "Gain 25 new followers",
        posts: "15",
        postsTitle: "New",
      },
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
        posts: "500k",
        postsTitle: "Total",
      },
    ],
  },
  {
    day: "T",
    data: [
      {
        status: "complete",
        title: "Recipe Posts",
        subtitle: "Upload 5 recipes this week",
        posts: "3/5",
        postsTitle: "",
      },
      {
        status: "complete",
        title: "Profile Views",
        subtitle: "Recieve 1k profile views",
        posts: "275",
        postsTitle: "Views",
      },
      {
        status: "complete",
        title: "New Followers",
        subtitle: "Gain 25 new followers",
        posts: "15",
        postsTitle: "New",
      },
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
        posts: "500k",
        postsTitle: "Total",
      },
    ],
  },
  {
    day: "W",
    data: [
      {
        status: "complete",
        title: "Recipe Posts",
        subtitle: "Upload 5 recipes this week",
        posts: "3/5",
        postsTitle: "",
      },
      {
        status: "complete",
        title: "Profile Views",
        subtitle: "Recieve 1k profile views",
        posts: "275",
        postsTitle: "Views",
      },
      {
        status: "complete",
        title: "New Followers",
        subtitle: "Gain 25 new followers",
        posts: "15",
        postsTitle: "New",
      },
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
        posts: "500k",
        postsTitle: "Total",
      },
    ],
  },
  {
    day: "T",
    data: [
      {
        status: "complete",
        title: "Recipe Posts",
        subtitle: "Upload 5 recipes this week",
        posts: "3/5",
        postsTitle: "",
      },
      {
        status: "complete",
        title: "Profile Views",
        subtitle: "Recieve 1k profile views",
        posts: "275",
        postsTitle: "Views",
      },
      {
        status: "complete",
        title: "New Followers",
        subtitle: "Gain 25 new followers",
        posts: "15",
        postsTitle: "New",
      },
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
        posts: "500k",
        postsTitle: "Total",
      },
    ],
  },
  {
    day: "F",
    data: [
      {
        status: "complete",
        title: "Recipe Posts",
        subtitle: "Upload 5 recipes this week",
        posts: "3/5",
        postsTitle: "",
      },
      {
        status: "complete",
        title: "Profile Views",
        subtitle: "Recieve 1k profile views",
        posts: "275",
        postsTitle: "Views",
      },
      {
        status: "complete",
        title: "New Followers",
        subtitle: "Gain 25 new followers",
        posts: "15",
        postsTitle: "New",
      },
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
        posts: "500k",
        postsTitle: "Total",
      },
    ],
  },
  {
    day: "S",
    data: [
      {
        status: "complete",
        title: "Recipe Posts",
        subtitle: "Upload 5 recipes this week",
        posts: "3/5",
        postsTitle: "",
      },
      {
        status: "complete",
        title: "Profile Views",
        subtitle: "Recieve 1k profile views",
        posts: "275",
        postsTitle: "Views",
      },
      {
        status: "complete",
        title: "New Followers",
        subtitle: "Gain 25 new followers",
        posts: "15",
        postsTitle: "New",
      },
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
        posts: "500k",
        postsTitle: "Total",
      },
    ],
  },
  {
    day: "S",
    data: [
      {
        status: "complete",
        title: "Recipe Posts",
        subtitle: "Upload 5 recipes this week",
        posts: "3/5",
        postsTitle: "",
      },
      {
        status: "complete",
        title: "Profile Views",
        subtitle: "Recieve 1k profile views",
        posts: "275",
        postsTitle: "Views",
      },
      {
        status: "complete",
        title: "New Followers",
        subtitle: "Gain 25 new followers",
        posts: "15",
        postsTitle: "New",
      },
      {
        status: "complete",
        title: "Master Cook",
        subtitle: "Upload more than 250 recipes",
        posts: "500k",
        postsTitle: "Total",
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
            <p className="userProfileProgreTitle">1/5 Weekly Goals Completed</p>
            <ProgressBar
              showPrgress={false}
              progresspercent={20}
              bgColor={"#e0464d"}
            />
          </div>
        </LeftSide>
      </Userprofilewrapper>
      <div className="profileStatusWeeklyArea">
        <h2>
          <span className="img">
            <Image src="/images/img-falme.png" alt="waving hand" />
          </span>
          13 day streak <span className="additional-text">Keep it up!</span>
        </h2>
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
                  <span className="img">
                    <CircleTick />
                  </span>
                  <span className="text">{e.day}</span>
                </span>
              </>
            )
          })}
        </div>
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
                  <Image src="/images/cookImage.svg" alt="waving hand" />
                </span>
                <div className="receipeTextbox">
                  <span className="recipename">{u.title}</span>
                  <div className="recipemeta">
                    <div className="receipeRatings">{u.subtitle}</div>
                  </div>
                  <div className="img-loader">
                    <CircleProgress />
                    <span className="data-text">
                      <span className="data-text-wrap">
                        <span className="num">{u.posts}</span> {u.postsTitle}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="profileStatusModalButtons">
        <a href="#" className="btnStart">
          Post New Recipe or Collection
        </a>
        <a href="#" className="btnIdeaLamp">
          <LampIcon />
        </a>
      </div>
    </div>
  )
}

export default styled(DailyTask)`
  .profileStatusWeeklyArea {
    h2 {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 15px;
      font-weight: 700;
      margin: 0 0 15px;

      .img {
        display: block;
        width: 13px;
        margin: 0 5px;
      }

      .additional-text {
        color: #979797;
        font-size: 9px;
        line-height: 12px;
        padding: 0 0 0 15px;
      }
    }
  }
  .profileStatusWeekly {
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
      color: #7b7b7b;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      transition: all 0.4s ease;
      position: relative;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      &:hover {
        background: #e0464d;
        color: #fff;
      }

      .img {
        display: none;
        width: 100%;
        height: 100%;
      }

      &.active {
        /* background: #e0464d; */
        color: #fff;
        border: 2px solid #fff;

        &:after {
          opacity: 1;
          visibility: visible;
        }

        &:hover {
          background: none;
        }

        .text {
          display: none;
        }

        .img {
          display: block;
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
      color: #4b4b4b;
      font-weight: 400;
    }

    .userProfileProgreTitle {
      color: #7b7b7b;
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
      color: #4b4b4b;
      font-weight: 400;
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

      .data-text {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        color: #86909c;
        font-size: 7px;
        line-height: 9px;
      }

      .data-text-wrap {
        display: block;
        width: 100%;
        text-align: center;
      }

      .num {
        display: block;
      }

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
    padding: 10px 0 0;

    .btnStart {
      flex-grow: 1;
      flex-basis: 0;
      height: 40px;
      background: #e0464d;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
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
