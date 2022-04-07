import { Icon } from "@components"
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  VerticalDots,
  YoutubeIcon,
} from "@icons"
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
const HoverDiv = styled.div`
  display: none;
`
const ProfileWrapperHover = styled.div`
  &:hover ~ ${HoverDiv} {
    display: block;
  }
`
function ProfileComponent(props: IProfileProps) {
  const { data = [] } = props

  return (
    <div className="userProfileWrapper">
      {data.map((u: any, i: number) => {
        return (
          <ProfileWrapper className="userProfile" key={i}>
            <ProfileWrapperHover>
              <ProfileDetailsWrapper className="userProfileHolder">
                <Image className="userProfileImage" src={u.src} alt={u.name} />
                <ProfileDetails className="userProfileDetails">
                  <ProfileName className="userProfileName">
                    {u.name}
                  </ProfileName>
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
            </ProfileWrapperHover>
            <div className="user-hover-block">
              <div className="image-holder">
                <Image className="userProfileImage" src={u.src} alt={u.name} />
              </div>
              <div className="user-detail-area">
                <ProfileUserName className="userProfileStatus">
                  {u.username}{" "}
                </ProfileUserName>
                <div className="socialIcons">
                  <Icon className="socialIconsItem facebook">
                    <FacebookIcon />
                  </Icon>
                  <Icon className="socialIconsItem youtube">
                    <YoutubeIcon />
                  </Icon>
                  <Icon className="socialIconsItem twitter">
                    <TwitterIcon />
                  </Icon>
                  <Icon className="socialIconsItem instagram">
                    <InstagramIcon />
                  </Icon>
                </div>
              </div>
            </div>
          </ProfileWrapper>
        )
      })}
    </div>
  )
}

export const ProfileItem = styled(ProfileComponent)``
