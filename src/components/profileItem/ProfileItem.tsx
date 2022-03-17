import { VerticalDots } from "@icons"
import React from "react"
import styled from "styled-components"
import { Image } from "../Image"
import {
  ProfileActionWrapper,
  ProfileDetails,
  ProfileDetailsWrapper,
  ProfileName,
  ProfileStatus,
  ProfileUserName,
  ProfileWrapper,
} from "./profile.styled"
import ProfileDropDown from "./ProfileDropDown"

interface IProfileProps {
  className?: string
  data: any[]
}

function ProfileComponent(props: IProfileProps) {
  const { data = [] } = props

  return (
    <div className="userProfileWrapper">
      {data.map((u: any, i: number) => {
        return (
          <ProfileWrapper className="userProfile" key={i}>
            <ProfileDetailsWrapper className="userProfileHolder">
              <Image className="userProfileImage" src={u.src} alt={u.name} />
              <ProfileDetails className="userProfileDetails">
                <ProfileName className="userProfileName">{u.name}</ProfileName>
                <ProfileUserName className="userProfileStatus">
                  {u.username}{" "}
                  {u.status && <ProfileStatus>{u.status}</ProfileStatus>}
                </ProfileUserName>
              </ProfileDetails>
            </ProfileDetailsWrapper>
            <ProfileActionWrapper className="userProfileAction">
              <ProfileDropDown
                menuItems={[
                  {
                    title: "Edit",
                    onClick: () => {
                      console.log("Edit")
                    },
                  },
                  {
                    title: "Delete",
                    onClick: () => {
                      console.log("Delete")
                    },
                  },
                ]}
              >
                <VerticalDots />
              </ProfileDropDown>
            </ProfileActionWrapper>
          </ProfileWrapper>
        )
      })}
    </div>
  )
}

export const ProfileItem = styled(ProfileComponent)``
