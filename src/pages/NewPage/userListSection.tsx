import { Button, DropDown, Icon } from "@components"
import {
  Bell,
  Calander,
  FacebookIcon,
  InstagramIcon,
  TimeDuraion,
  TwitterIcon,
  YoutubeIcon,
} from "@icons"
import { userList } from "data"
import React from "react"
type Props = {}

const UserListSection = (props: Props) => {
  return (
    <div className="recipesSection leaderboardRecipesBlock">
      <header className="recipesSectionHeader">
        <div className="recipesSectionTitlebox">
          <strong className="recipesSectionTitle"> Cook Leaderboard</strong>
          <span className="recipesSectionText">
            <TimeDuraion /> Ends in 10 Days 23 Hours 46 Minutes 26 Seconds
          </span>
        </div>
        <div className="leaderboardFilters">
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
      </header>
      <div className="leaderboardRecipesHolder">
        <div className="top-rank">
          {userList.slice(0, 3).map((e: any) => {
            return (
              <div
                className="top-3-profiles gold silver/bronze"
                key={e.low || e.heigh}
              >
                <div className="image">
                  <img src={e.profile} alt="profile" />
                </div>
                <div className="textbox">
                  <span className="cookname">{e.userName}</span>
                  <ul className="socialIcons">
                    <li>
                      <Icon className="socialIconsItem facebook">
                        <FacebookIcon />
                      </Icon>
                    </li>
                    <li>
                      <Icon className="socialIconsItem youtube">
                        <YoutubeIcon />
                      </Icon>
                    </li>
                    <li>
                      <Icon className="socialIconsItem twitter">
                        <TwitterIcon />
                      </Icon>
                    </li>
                    <li>
                      <Icon className="socialIconsItem instagram">
                        <InstagramIcon />
                      </Icon>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        <div className="userlist">
          {userList.slice(3).map((e: any) => {
            return (
              <div className="top-profiles" key={e.low || e.heigh}>
                <div className="rate-info">
                  <span className={`rate-${e.low ? "low" : "heigh"}`}></span>
                  <span className={`rate`}>{e.low ? e.low : e.high}</span>
                </div>
                <div className="image">
                  <img src={e.profile} alt="profile" />
                </div>
                <span className="cookname">{e.userName}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UserListSection
