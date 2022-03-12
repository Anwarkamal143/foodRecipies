import { VerticalDots } from "@Icons"
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
    <div>
      {data.map((u: any, i: number) => {
        return (
          <ProfileWrapper key={i}>
            <ProfileDetailsWrapper>
              <Image src={u.src} alt={u.name} />
              <ProfileDetails>
                <ProfileName>{u.name}</ProfileName>
                <ProfileUserName>
                  {u.username}{" "}
                  {u.status && <ProfileStatus>{u.status}</ProfileStatus>}
                </ProfileUserName>
              </ProfileDetails>
            </ProfileDetailsWrapper>
            <ProfileActionWrapper>
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

export const Profile = styled(ProfileComponent)``
