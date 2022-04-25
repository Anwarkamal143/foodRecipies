/* eslint-disable @next/next/no-img-element */
import { useOpenClose } from "@hooks"
import { AngleRight, FlashCircle } from "@icons"
import clsxm from "@lib/clsxm"
import { useAppSelector } from "@redux/hooks"
import React from "react"
import { CircularProgresWithChildren } from "src/components/CirclePrgoressWithChildren"
import { Image } from "src/components/Image"
import styled from "styled-components"
import ProfileTaskModel from "../../ProfileTaskModel/ProfileTaskModel"
import { CircleDefaultImage } from "../images"
import { LeftSide, RightSide, Userprofilewrapper } from "./userprofile.styled"

function Profilesteps({ src = "", alt = "", className = "" }) {
  const user = useAppSelector(state => state.user)
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  return (
    <Userprofilewrapper className={clsxm("", className)}>
      <LeftSide className="userProfileProgresBox">
        <CircularProgresWithChildren
          maxValue={100}
          parentClass="circleprogress"
          strokeWidth={5}
          className="circleimages"
          value={15}
        >
          <div onClick={onOpenModel} className="cursor-hand">
            <CircleDefaultImage
              className="circleimg"
              src="/images/profile-img.png"
              alt="default profile imag"
            />
          </div>
        </CircularProgresWithChildren>
        <div className="userProfileTextbox">
          <h2 className="userProfileTitle">
            Welcome Back, <span>{user.name} </span>
            <Image src="/images/WavingHandEmoji.png" alt="waving hand" />
          </h2>
          <span className="userProfilesubTitle">
            Visit Your Cook Profile <AngleRight />
          </span>
        </div>
      </LeftSide>
      <RightSide className="userProfileProgresStatus">
        <span className="userRemainingTask" onClick={onOpenModel}>
          <span className="img">
            <FlashCircle />
          </span>
          4 Remaining Goals
        </span>
        {/* <p className="userProfileProgreTitle">
          <span onClick={onOpenModel} className="cursor-hand">
            15%
          </span>{" "}
          Tasks Completed
        </p> */}
        {/* <ProgressBar
          showPrgress={false}
          progresspercent={20}
          bgColor={"#e0464d"}
        /> */}
      </RightSide>
      <ProfileTaskModel
        userName={user.name}
        isOpen={isOpenModel}
        onCancel={onCloseModel}
      />
    </Userprofilewrapper>
  )
}

export const ProfileSteps = styled(Profilesteps)`
  display: flex;
  align-items: center;
  padding: 0 0 20px;

  @media (max-width: 767px) {
    flex-flow: row wrap;
  }

  .circleprogress {
    width: 64px;
    margin: 0 15px 0 0;
  }

  .CircularProgressbar {
    .CircularProgressbar-trail {
      stroke: transparent;
    }

    .CircularProgressbar-path {
      stroke: #e0464d;
    }
  }

  .child-wrapper {
    width: 90%;
    border: 0 !important;
  }

  .userProfileProgresBox {
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
      width: 100%;
      margin: 0 0 15px;
    }
  }

  .userProfileTextbox {
    flex-grow: 1;
    flex-basis: 0;
  }

  .userProfileTitle {
    font-size: 18px;
    line-height: 22px;
    display: block;
    color: #1e1e2d;

    span {
      font-weight: 400;
      margin: 0 0 0 1px;
    }

    .userProfileImageWrap {
      width: 25px;
      margin: 0 0 0 5px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .userProfilesubTitle,
  .userProfileProgreTitle {
    display: block;
    font-size: 10px;
    line-height: 13px;
    color: #7b7b7b;
  }

  .userProfilesubTitle {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    position: relative;
    transition: all 0.25s ease-in-out;

    svg {
      fill: #aa141c;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s ease-in-out;
      position: absolute;
      right: 0;
      top: 52%;
      transform: translateY(-49%);
      margin: 0;
      width: 14px;
      height: auto;
    }

    &:hover {
      color: #aa141c;
      padding-right: 18px;

      svg {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .userProfileProgresStatus {
    min-width: 120px;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .userProfileProgreTitle {
    text-align: right;
    margin: 0 0 6px;
  }

  .cursor-hand {
    cursor: pointer;
  }

  .userRemainingTask {
    display: inline-block;
    vertical-align: top;
    background: #f8f8f8;
    border-radius: 5px;
    padding: 5px 10px;
    color: #3d3d3d;
    font-size: 12px;
    line-height: 15px;
    font-weight: 700;
    transition: all 0.4s ease;
    cursor: pointer;

    &:hover {
      background: #e0464d;
      color: #fff;

      path {
        fill: #fff;
      }
    }

    .img {
      width: 16px;
      display: inline-block;
      vertical-align: top;
      margin: 0 8px 0 0;
    }

    path {
      transition: all 0.4s ease;
    }
  }
`
