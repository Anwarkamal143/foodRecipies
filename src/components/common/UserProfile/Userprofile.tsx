/* eslint-disable @next/next/no-img-element */
import { useOpenClose } from "@hooks"
import clsxm from "@lib/clsxm"
import { useAppSelector } from "@redux/hooks"
import React from "react"
import { ProgressBar } from "src/components"
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
          strokeWidth={3}
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
          <span className="userProfilesubTitle">Founder Cook Profile</span>
        </div>
      </LeftSide>
      <RightSide className="userProfileProgresStatus">
        <p className="userProfileProgreTitle">
          <span onClick={onOpenModel} className="cursor-hand">
            15%
          </span>{" "}
          Tasks Completed
        </p>
        <ProgressBar
          showPrgress={false}
          progresspercent={20}
          bgColor={"#ef305e"}
        />
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
      stroke: #ef305e;
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
    lien-heoght: 22px;
    display: block;

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
    color: #7474a9;
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
`
