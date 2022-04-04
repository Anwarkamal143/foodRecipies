import { Button, Card, DropDown, Image } from "@components"
import {
  AddCircleIcon,
  CalendarIcon,
  DownArrowIcon,
  EyeIcon,
  Save,
  Star,
  StatusUp,
} from "@icons"
import { DashboardLayout } from "@layouts/Dashboard/DashboardLayout"
import { FormatNumber } from "@utils"
import dayjs from "dayjs"
import React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import styled from "styled-components"
import { chartData, data, LineChartData } from "../../../data"
import { RECEPESITEMS } from "../data"
import { CardHeader, PerformanceBar, StatisticsItem } from "./components"
import { PerformingRecipe } from "./components/Recipies"
import RecipiesTable from "./components/RecipiesTable"
import {
  LeftMyRecipiesSection,
  LeftPerformanceSection,
  MyRecipiesWrapper,
  ProfileperformanceWrapper,
  RightMyRecipiesSection,
  RightPerformanceSection,
  StatisticsWrapper,
} from "./dashboard.styed"

const dateFormatter = (item: Date) => dayjs(item).format("MMM YY")
const DashBoard = ({ className }: { className?: string }) => {
  return (
    <DashboardLayout className={`${className} items`}>
      <div className="dashboardDataContent">
        <StatisticsWrapper className="dashboardStatistics">
          {data.map(item => (
            <StatisticsItem
              key={item.title}
              title={item.title}
              count={item.count}
              reviewTime={item.reviewTime}
              trandingCount={item.trandingCount}
            />
          ))}
          <ResponsiveContainer
            width="100%"
            height={75}
            className="dashboardStatisticsGraph"
          >
            <BarChart data={chartData}>
              <XAxis dataKey="day" strokeOpacity={0} />
              {/* <YAxis /> */}
              <Tooltip wrapperStyle={{ backgroundColor: "red" }} />
              <Bar dataKey="count" strokeLinecap={"round"} fill="#E6ECF5" />
            </BarChart>
          </ResponsiveContainer>
        </StatisticsWrapper>
        <ProfileperformanceWrapper className="dashboardPerformance">
          <LeftPerformanceSection className="dashboardPerformanceGraph">
            <div className="sectionheader">
              <p className="subtitle">Profile Performance</p>
              <p className="sortBy">
                <span className="label">Sort by</span>
                <DropDown
                  button={selected => (
                    <Button
                      shape="circle"
                      iconRight={<DownArrowIcon />}
                      iconLeft={<EyeIcon />}
                      size="small"
                    >
                      {selected}
                    </Button>
                  )}
                  items={[
                    { name: "Recipe Views", icon: <EyeIcon /> },
                    { name: "Recipe Saves", icon: <Save /> },
                    { name: "Recipe Reviews", icon: <Star /> },
                    { name: "Profile Visits ", icon: <StatusUp /> },
                  ]}
                  renderItem={({ item, isActive, onClick }) => {
                    return (
                      <div
                        className={`${isActive} item`}
                        onClick={() => onClick(item.name, item.icon)}
                      >
                        <span>{item.icon}</span>
                        {item.name}
                      </div>
                    )
                  }}
                />
                <DropDown
                  button={selected => (
                    <Button
                      shape="circle"
                      iconLeft={<CalendarIcon />}
                      iconRight={<DownArrowIcon />}
                      size="small"
                    >
                      {selected}
                    </Button>
                  )}
                  items={[
                    { name: "Monthly" },
                    { name: "Yearly" },
                    { name: "Weekly" },
                  ]}
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
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                // width={500}
                // height={300}
                data={LineChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  dataKey={"price"}
                  tickFormatter={item => {
                    return FormatNumber(item)
                  }}
                />
                <Tooltip />
                {/* <Legend /> */}
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="red"
                  activeDot={{ r: 10 }}
                  dot={{
                    r: 0,
                  }}
                />
                {/* <Line type="monotone" dataKey="price" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
          </LeftPerformanceSection>
          <RightPerformanceSection className="right-section">
            <Card>
              <Card.Header>
                <CardHeader
                  className="subtitle"
                  title="Cook Weekly Performance"
                  items={[{ name: "action 1" }, { name: "action 2" }]}
                  renderItem={({ item, handleToggle }) => {
                    console.log({ item })
                    return (
                      <div onClick={handleToggle} className="item recipe-item">
                        {item.name}
                      </div>
                    )
                  }}
                />
              </Card.Header>
              <Card.Body>
                <PerformanceBar remaining={20} totalInteractions={60} />
                <p className="text">
                  Post consistently and keep your info updated to increase
                  interactions.
                  <Image src="/images/rocket.png" alt="rocket" />
                </p>
                <Button className="buttonDashboard" shape="circle">
                  Interactions Dashboard
                </Button>
              </Card.Body>
            </Card>
          </RightPerformanceSection>
        </ProfileperformanceWrapper>
        <MyRecipiesWrapper className="dashboardMyRecipies">
          <LeftMyRecipiesSection className="myRecipes">
            <div className="sectionheader">
              <div className="myRecipesTitle">
                <p className="subtitle">My Recipes</p>
                <AddCircleIcon />
              </div>
              <Button className="buttonText"> View All My Recipes</Button>
            </div>
            <RecipiesTable />
          </LeftMyRecipiesSection>
          <RightMyRecipiesSection className="topPerformingRecipes">
            <Card>
              <Card.Header>
                <CardHeader
                  title="Top Performing Recipes"
                  className="subtitle"
                  items={[{ name: "action 1" }, { name: "action 2" }]}
                  renderItem={({ item, handleToggle }) => {
                    console.log({ item })
                    return (
                      <div onClick={handleToggle} className="item recipe-item">
                        {item.name}
                      </div>
                    )
                  }}
                />
              </Card.Header>
              <Card.Body>
                <PerformingRecipe data={RECEPESITEMS} />
              </Card.Body>
            </Card>
          </RightMyRecipiesSection>
        </MyRecipiesWrapper>
      </div>
    </DashboardLayout>
  )
}
export const Dashboard = styled(DashBoard)`
.dashboardStatistics {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f2f3f5;
  border-bottom: 1px solid #f2f3f5;
  padding: 18px 0;

  @media (max-width: 1023px) {
    flex-flow: row wrap;
  }

  .dashboardStatisticsColumn {
    width: 21.25%;
    padding: 0 20px;

    @media (max-width: 1439px) {
      width: 20%;
    }

    @media (max-width: 1199px) {
      padding: 0 10px 0 15px;
    }

    @media (max-width: 1023px) {
      width: 25%;
      text-align: center;
      padding: 0 15px;
      margin: 0 0 30px;
    }

    @media (max-width: 767px) {
      width: 50%;
    }

    + .dashboardStatisticsColumn {
      border-left: 1px solid #F2F3F5;
    }

    h3 {
      font-size: 12px;
      line-height: 20px;
      color: #1d2129;
      font-weight: 400;
      margin: 0 0 8px;
    }

    .dashboardStatisticsInfo {
      display: flex;
      align-items: center;
      margin: 0 0 8px;

      @media (max-width: 1023px) {
        justify-content: center;
      }
      
      strong {
        font-size: 22px;
        color: #1d2129;

        @media (max-width: 1199px) {
          font-size: 18px;
        }
      }

      span {
        display: inline-flex;
        align-items: center;
        border-radius: 15px;
        font-size: 8px;
        line-height: 10px;
        background: #fff;
        padding: 3px 5px;
        text-align: center;
        margin: 0 0 0 4px;

        svg {
          margin: 0 0 0 2px;
        }
      }
    }

    .dashboardStatisticsTime {
      font-size: 10px;
      line-height: 13px;
      color: #7474A9;
    }

    &.down {
      p {
        span {
          background: #fad9d9;
          color: #BD0F2E;
        }
      }
    }

    &.up {
      p {
        span {
          background: #D9FADD;
          color: #0E8521;

          svg {
            transform: scale(-1) rotate(90deg);
            
            path {
              stroke: #0E8521;
            }
          }
        }
      }
    }
  }

  .dashboardStatisticsGraph {
    width: 15% !important;
    height: auto !important;

    @media (max-width: 1439px) {
      width: 20% !important;
    }

    @media (max-width: 1023px) {
      width: 100% !important;
      height: 100px !important;
    }

    .recharts-wrapper {
      width: 200px !important;
      height: 100px !important;
      margin-left: auto;
      margin-bottom: -34px;

      @media (max-width: 1439px) {
        width: 175px !important;
      }

      @media (max-width: 1199px) {
        width: 150px !important;
        height: 80px !important;
      }

      @media (max-width: 1023px) {
        margin: 0 auto;
        width: 80% !important;;
        height: 150px !important;
      }

      .recharts-surface {
        width: 200px !important;
        height: 100px !important;

        @media (max-width: 1439px) {
          width: 175px !important;
        }

        @media (max-width: 1199px) {
          width: 150px !important;
          height: 80px !important;
        }

        @media (max-width: 1023px) {
          width: 100% !important;;
          height: 150px !important;
        }
      }
    }

    .recharts-bar-rectangle {
      &:hover {
        path {
          fill: #E0464D !important;
          stroke: #E0464D !important;;
        }
      }

      path {
        stroke-width: 2px;
        stroke-linejoin: round;
        stroke: #E6ECF5;
      }
    }

    .recharts-tooltip-cursor {
      display: none !important;
      position: relative;
      z-index: 9;
      fill: #E0464D !important;
    }
  }
}

.dashboardPerformance {
  display: flex;
  justify-content: space-between;
  padding: 25px 0;

  @media (max-width: 1023px) {
    flex-flow: row wrap;
  }
  
  .dashboardPerformanceGraph {
    width: calc(100% - 295px);
    flex: inherit;
    padding: 15px 25px 0 0;

    @media (max-width: 1439px) {
      padding-right: 15px;
    }

    @media (max-width: 1199px) {
      width: calc(100% - 240px);
    }

    @media (max-width: 1023px) {
      width: 100%;
      margin: 0 0 35px;
      padding: 0;
    }
    
    .sectionheader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 35px;

      @media (max-width: 1199px) {
        display: block;
        margin: 0 0 20px;
      }

      .subtitle {
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        display: block;
        color: #1E1E2D;

        @media (max-width: 1199px) {
          margin: 0 0 20px;
        }
      }

      .sortBy {
        display: flex;
        align-items: center;

        @media (max-width: 767px) {
          flex-flow: row wrap;
          margin: 0 -5px;
        }

        .label {
          font-size: 12px;
          line-height: 20px;
          color: #7474A9;

          @media (max-width: 1199px) {
            margin-left: 0;
          }

          @media (max-width: 767px) {
            width: 100%;
            margin: 0 0 15px;
            padding: 0 5px;
          }
        }

        > div {
          padding: 0 5px;
        }

        .button.button-sm.button-has-icon {
          display: flex !important;
          align-items: center;
          border: 1px solid #E5E8EF;
          background: transparent;
          color: #7474A9;
          font-size: 12px;

          &:hover {
            color: #7474A9;
            background: #E5E8EF;
          }

          .text-button {
            @media (max-width: 767px) {
              margin-right: 6px;
            }
          }

          svg {
            margin: 0 5px 0 0;
            max-width: 16px;
            max-height: 16px;
          }
        }

        .sortByFilterDrop {
          border: 1px solid #E5E8EF;
          box-shadow: 0 10px 40px #E8E8FF;
          border-radius: 15px;

          .item {
            font-size: 10px;
            line-height: 16px;
            color: #7474A9;
            padding: 5px 15px;
            cursor: pointer;

            &:hover {
              color: #E0464D;
            }
          }
        }
      }
    }

    .recharts-surface {
      .recharts-cartesian-axis-line {
        stroke: none;
      }
      
      .recharts-text {
        font-size: 12px;
        line-height: 20px;
        color: #86909C;
      }
    }

    .recharts-tooltip-wrapper {
      .recharts-default-tooltip {
        background: #fbfbfd !important;
        border-radius: 6px;
        border: 0 !important;
        font-size: 12px;
        line-height: 20px;
        padding: 5px 10px !important;
        border-radius: 6px !important;
      }

      .recharts-tooltip-item-list {
        .recharts-tooltip-item {
          border-radius: 4px;
          background: #fff;
          padding: 5px 10px;
          text-transform: capitalize;
        }
      }
    }
  }

  .right-section {
    width: 295px;
    min-width: 295px;

    @media (max-width: 1199px) {
      width: 240px;
      min-width: 240px;
    }

    @media (max-width: 1023px) {
      width: 100%;
      min-width: 240px;
      margin: 0 auto;
    }

    .text {
      .userProfileImageWrap {
        width: 10px;
        display: inline-block;
        margin: 0 0 0 5px;
      }
    }

    .card-Header {
      border-bottom: 1px solid #F2F3F5;
      margin: 0 0 30px;
      padding: 0 0 20px;
      
      .subtitle {
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #1E1E2D;
      }
    }

    .text-children {
      overflow: hidden;

      .textSubtitle {
        color: #7474A9;
        font-size: 12px;
        line-height: 20px;
        display: block;
        margin: 0 0 2px;
      }

      .textStatus {
        display: block;
        margin: 0 0 7px;

        strong {
          font-size: 20px;
          line-height: 28px;
          color: #1D2129;
        }

        span {
          color: #7474A9;
          font-size: 12px;
          line-height: 20px;
        }
      }

      .textRamaining {
        border: 1px solid #E5E8EF;
        border-radius: 15px;
        color: #1D2129;
        font-size: 12px;
        line-height: 20px;
        padding: 2px 15px;

        @media (max-width: 1199px) {
          padding: 2px 10px;
        }
      }
    }

    .text {
      color: #7474A9;
      font-size: 10px;
      line-height: 16px;
      text-align: center;
      margin: 0 0 30px;

      @media (max-width: 1023px) {
        margin-top: -50%;
      }

      @media (max-width: 767px) {
        margin: -40% 0 20px;
      }
    }

    .buttonDashboard {
      display: block;
      margin: 0 auto;
      background: #F3F3F3;
      font-size: 10px;
      line-height: 12px;
      padding: 5px 15px;
      min-width: 145px;
      color: #757373;

      .text-button {
        vertical-align: top;
      }
    }

    .circularperformance {
      margin-bottom: -30%;
    }
  }
}

.dashboardMyRecipies {
  overflow: hidden;
  display: flex;

  @media (max-width: 1023px) {
    flex-flow: row wrap;
  }
  
  .myRecipes {
    width: calc(100% - 295px);
    flex: inherit;
    padding: 0 40px 0 0;

    @media (max-width: 1199px) {
      width: calc(100% - 240px);
      padding: 0 20px 0 0;
    }

    @media (max-width: 1023px) {
      width: 100%;
      padding: 0;
      margin: 0 0 35px;
    }

    .sectionheader {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #F2F3F5;
      padding-bottom: 25px;
      margin: 0 0 30px;

      .myRecipesTitle {
        display: flex;
        align-items: center;
      }

      .subtitle {
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        display: block;
        color: #1E1E2D;
        margin: 0 15px 0 0;
      }

      .buttonText {
        font-size: 12px;
        line-height: 20px;
        color: #E0464D;
        font-weight: 700;
        background: none;
        border: 0;
        padding: 0;

        &:hover {
          color: #aa141c;
        }
      }
    }
  }
  
  .topPerformingRecipes {
    width: 295px;
    min-width: 295px;

    @media (max-width: 1199px) {
      width: 240px;
      min-width: 240px;
    }

    @media (max-width: 1023px) {
      width: 100%;
    }
  }
}

.recipiesTableParent {
  overflow: hidden;

  @media (max-width: 767px) {
    overflow: auto;
    margin: 0 0 5px;
  }
}

.recipiesTable {
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #1D2129;
  font-weight: 500;

  @media (max-width: 767px) {
    min-width: 500px;
  }

  th {
    text-align: left;
    color: #7474A9;
    text-transform: capitalize;
  }

  th, td {
    padding: 10px 15px;

    @media (max-width: 1439px) {
      padding: 10px;
    }

    @media (max-width: 1199px) {
      padding: 10px 7px;
    }
  }

  .statusText {
    border-radius: 10px;
    font-size: 10px;
    line-height: 12px;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 3px 8px;

    &:before {
      content: '';
      border-radius: 100%;
      width: 4px;
      height: 4px;
      display: inline-block;
      margin: 1px 5px 0 0;
    }
  }

  .Draft {
    .statusText {
      color: #0FA3D1;
      background: #D9EEFA;

      &:before {
        background: #0FA3D1;
      }
    }
  }

  .live {
    .statusText {
      color: #0E8521;
      background: #D9FADD;

      &:before {
        background: #0E8521;
      }
    }
  }

  .Scheduled {
    .statusText {
      color: #DF8C10;
      background: #FAF1D9;

      &:before {
        background: #DF8C10;
      }
    }
  }

  .view {
    .ratings {
      color: #86909C;
    }

    .ratingsStatus {
      border-radius: 10px;
      font-size: 10px;
      line-height: 12px;
      position: relative;
      display: inline-flex;
      align-items: center;
      padding: 3px 8px;
      background: #D9FADD;
      margin: 0 0 0 5px;
    }
  }

  .date {
    color: #86909C;
  }
}

.topPerformingRecipes {
  .card-Header {
    border-bottom: 1px solid #F2F3F5;
    margin: 0 0 30px;
    padding: 0 0 20px;
    
    .subtitle {
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #1E1E2D;
    }
  }

  .receipeDetails {
    padding: 10px 0;
    
    .recipeholder {
      width: 100%;
    }
    
    .userProfileImageWrap {
      width: 60px;
      height: 60px;
      min-width: 60px;
      border-radius: 15px;
      overflow: hidden;
      margin: 0 10px 0 0;
      box-shadow: 0 0 10px rgba(0,0,0,0.15);

      @media (max-width: 1199px) {
        width: 45px;
        min-width: 45px;
        height: 45px;
        border-radius: 8px;
      }

      .recipeImage {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover:
        object-position: center;
      }
    }

    .receipeTextbox {
      flex-grow: 1;
      flex-basis: 0;
    }

    .recipename {
      font-size: 15px;
      line-height: 20px;
      color: #1E1E2D;
      display: block;
      margin: 0 0 5px;
    }

    .recipemeta {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .receipeRatings {
        font-size: 10px;
        line-height: 13px;
        color: #1E1E2D;
        font-weight: 700;
      }

      .receipeStatus {
        font-size: 12px;
        line-height: 16px;
        color: #86909C;

        span {
          font-size: 8px;
          color: #0E8521;
          background: #D9FADD;
          border-radius: 10px;
          padding: 1px 5px 3px;
        }
      }
    }
  }
}

.dotsDrop {
  min-width: 20px;
  text-align: center;
  
  svg {
    margin: 0 0 0 auto;
  }
}
`
