import { Button, DropDown, Icon } from "@components"
import {
  Bell,
  Calander,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@icons"
import { userList } from "data"
import React from "react"
type Props = {}

const UserListSection = (props: Props) => {
  return (
    <div>
      <div className="laederboard-head">
        <h2> Cook Leaderboard</h2>
        <span>Ends in 10 Days 23 Hours 46 Minutes 26 Seconds</span>
        <div>
          <DropDown
            button={selected => (
              <Button
                shape="circle"
                iconLeft={<Bell />}
                className="buttonFilter"
                size="small"
                title="All Recipes"
              >
                {selected}
              </Button>
            )}
            items={[{ name: "New" }, { name: "Most Popular" }]}
            renderItem={({ item, isActive, onClick }) => {
              return (
                <div
                  className={`${isActive} item`}
                  onClick={() => onClick(item.name)}
                >
                  {item.name}
                </div>
              )
            }}
          />
          <DropDown
            button={selected => (
              <Button
                shape="circle"
                iconLeft={<Calander />}
                className="buttonFilter"
                size="small"
                title="Monthly"
              >
                {selected}
              </Button>
            )}
            items={[{ name: "New" }, { name: "Most Popular" }]}
            renderItem={({ item, isActive, onClick }) => {
              return (
                <div
                  className={`${isActive} item`}
                  onClick={() => onClick(item.name)}
                >
                  {item.name}
                </div>
              )
            }}
          />
        </div>
      </div>
      <div className="top-rank">
        {userList.slice(0, 3).map((e: any) => {
          return (
            <div className="top-3-profiles" key={e.low || e.heigh}>
              <div className="image">
                <img src={e.profile} alt="profile" />
              </div>
              <span>{e.userName}</span>
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
          )
        })}
      </div>
      <div className="userlist">
        {userList.slice(3).map((e: any) => {
          return (
            <div className="top-3-profiles" key={e.low || e.heigh}>
              <span className={`rate-${e.low ? "low" : "heigh"}`}></span>
              <span className={`rate`}>{e.low ? e.low : e.heigh}</span>
              <div className="image">
                <img src={e.profile} alt="profile" />
              </div>
              <span>{e.userName}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserListSection
