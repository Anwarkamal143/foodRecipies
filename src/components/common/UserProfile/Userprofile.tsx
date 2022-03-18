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
      <LeftSide>
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
        <p>
          Welcome Back, {user.name}{" "}
          <Image src="/images/WavingHandEmoji.png" alt="waving hand" />
        </p>
        <span>Founder Cook Profile</span>
      </LeftSide>
      <RightSide>
        <p>15% Tasks Completed</p>
        <ProgressBar showPrgress={false} progresspercent={20} bgColor={"red"} />
      </RightSide>
    </Userprofilewrapper>
  )
}

export const ProfileSteps = styled(Profilesteps)`
  .circleprogress {
    width: 30%;
  }
  .child-wrapper {
    width: 90%;
  }
`
