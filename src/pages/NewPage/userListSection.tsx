import { Button, DropDown, Icon } from "@components"
import {
  ArrowRight,
  Bell,
  Calander,
  FacebookIcon,
  InstagramIcon,
  TimeIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@icons"
import { userList } from "data"
type Props = {
  title?: string
}

const UserListSection = (props: Props) => {
  const { title = " Cook Leaderboard" } = props
  return (
    <div className="recipesSection leaderboardRecipesBlock">
      <header className="recipesSectionHeader">
        <div className="recipesSectionTitlebox">
          <strong className="recipesSectionTitle"> Cook Leaderboard</strong>
          <span className="recipesSectionText">
            <TimeIcon /> Ends in 10 Days 23 Hours 46 Minutes 26 Seconds
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
            items={[
              { name: "All Types", id: 1 },
              { name: "Breakfast", id: 2 },
              { name: "Appetizers", id: 3 },
              { name: "Baked Goods", id: 4 },
              { name: "Drinks", id: 5 },
              { name: "Dinner", id: 6 },
              { name: "Dessert", id: 7 },
            ]}
            renderItem={({ item, isActive, onClick }) => {
              return (
                <div
                  key={item.id}
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
            items={[
              { name: "This Week", id: 1 },
              { name: "This Month", id: 2 },
              { name: "This Year", id: 3 },
              { name: "All Time", id: 4 },
            ]}
            renderItem={({ item, isActive, onClick }) => {
              return (
                <div
                  key={item.id}
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
          {userList.slice(1).map((e: any) => {
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
                <span className="iconArrow">
                  <ArrowRight />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UserListSection
