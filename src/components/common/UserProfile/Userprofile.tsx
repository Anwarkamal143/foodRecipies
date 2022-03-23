/* eslint-disable @next/next/no-img-element */
import clsxm from "@lib/clsxm"
import { useAppSelector } from "@redux/hooks"
import React from "react"
import { ProgressBar } from "src/components"
import { CircularProgresWithChildren } from "src/components/CirclePrgoressWithChildren"
import { Image } from "src/components/Image"
import styled from "styled-components"
import { CircleDefaultImage } from "../images"
import { LeftSide, RightSide, Userprofilewrapper } from "./userprofile.styled"

function Profilesteps({ src = "", alt = "", className = "" }) {
  const user = useAppSelector(state => state.user)
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
          <CircleDefaultImage
            className="circleimg"
            src="/images/profile-img.png"
            alt="default profile imag"
          />
        </CircularProgresWithChildren>
        <div className="userProfileTextbox">
          <h2 className="userProfileTitle">
            Welcome Back, <span>{user.name}{" "}</span>
            <Image src="/images/WavingHandEmoji.png" alt="waving hand" />
          </h2>
          <span className="userProfilesubTitle">Founder Cook Profile</span>
        </div>
      </LeftSide>
      <RightSide className="userProfileProgresStatus">
        <p className="userProfileProgreTitle">15% Tasks Completed</p>
        <ProgressBar showPrgress={false} progresspercent={20} bgColor={"#ef305e"} />
      </RightSide>
    </Userprofilewrapper>
  )
}

export const ProfileSteps = styled(Profilesteps)`
  display: flex;
  align-items: center;
  padding: 0 0 20px;
  
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
  }

  .userProfileTextbox {
    flex-grow: 1;
    flex-basis: 0;
  }

  .userProfileTitle {
    font-size: 18px;
    lien-heoght: 22px;
    display: flex;
    align-items: center;

    span {
      font-weight: 400;
      margin: 0 0 0 5px;
    }

    .userProfileImageWrap {
      width: 25px;
      margin: 0 0 0 5px;
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
  }
  
  .userProfileProgreTitle {
    text-align: right;
    margin: 0 0 6px;
  }
`
