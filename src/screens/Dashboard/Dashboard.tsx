import { Button, DropDown, Image } from "@components"
import {
  AddCircleIcon,
  ArrowRight,
  CalendarIcon,
  CircleTick,
  DownArrowIcon,
  EyeIcon,
  Save,
  Star,
  StatusUp,
} from "@icons"
import { DashboardLayout } from "@layouts/Dashboard/DashboardLayout"
import { DashboardAnalytics, LineChartData, RecipesData } from "@redux/data"
import { FormatNumber } from "@utils"
import dayjs from "dayjs"
import React from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import styled from "styled-components"
import { StatisticsItem } from "./components"
import { PerformingRecipe } from "./components/Recipies"
import RecipiesTable from "./components/RecipiesTable"
import {
  LeftMyRecipiesSection,
  LeftPerformanceSection,
  MyRecipiesWrapper,
  ProfileperformanceWrapper,
  RightMyRecipiesSection,
  StatisticsWrapper,
} from "./dashboard.styed"

const dateFormatter = (item: Date) => dayjs(item).format("MMM YY")
const DashBoard = ({ className }: { className?: string }) => {
  return (
    <DashboardLayout className={`${className} dashboard-wrap`}>
      <div className="dashboardDataContent">
        <StatisticsWrapper className="dashboardStatistics">
          {DashboardAnalytics.map(item => (
            <StatisticsItem
              key={item.title}
              title={item.title}
              count={item.count}
              reviewTime={item.reviewTime}
              trandingCount={item.trandingCount}
            />
          ))}
          <div className="dashboardStatisticsGraph">
            <div className="dashboardStatisticsGraphWrap">
              <h2>
                <span className="img">
                  <Image src="/images/img-falme.png" alt="waving hand" />
                </span>
                13 day streak{" "}
                <span className="additional-text">Keep it up!</span>
              </h2>
              <ul className="list-streak">
                <li>
                  <span className="day">m</span>
                  <span className="streak-status complete">
                    <span className="tooltip-text">
                      Login tomorrow to continue your stream
                    </span>
                    <CircleTick />
                  </span>
                </li>
                <li>
                  <span className="day">t</span>
                  <span className="streak-status complete">
                    <span className="tooltip-text">
                      Login tomorrow to continue your stream
                    </span>
                    <CircleTick />
                  </span>
                </li>
                <li>
                  <span className="day">w</span>
                  <span className="streak-status complete">
                    <span className="tooltip-text">
                      Login tomorrow to continue your stream
                    </span>
                    <CircleTick />
                  </span>
                </li>
                <li>
                  <span className="day">t</span>
                  <span className="streak-status current">
                    <span className="tooltip-text">
                      Login tomorrow to continue your stream
                    </span>
                    <CircleTick />
                  </span>
                </li>
                <li>
                  <span className="day">f</span>
                  <span className="streak-status">
                    <span className="tooltip-text">
                      Login tomorrow to continue your stream
                    </span>
                    <CircleTick />
                  </span>
                </li>
                <li>
                  <span className="day">s</span>
                  <span className="streak-status">
                    <span className="tooltip-text">
                      Login tomorrow to continue your stream
                    </span>
                    <CircleTick />
                  </span>
                </li>
                <li>
                  <span className="day">s</span>
                  <span className="streak-status">
                    <span className="tooltip-text">
                      Login tomorrow to continue your stream
                    </span>
                    <CircleTick />
                  </span>
                </li>
              </ul>
              {/* <ul className="list-stats-graph">
              <li>
                <div className="bar" style={{ height: 28 }}></div>
                <div className="day">M</div>
              </li>
              <li>
                <div className="bar" style={{ height: 49 }}></div>
                <div className="day">T</div>
              </li>
              <li>
                <div className="bar" style={{ height: 40 }}></div>
                <div className="day">W</div>
              </li>
              <li>
                <div className="bar active" style={{ height: 57 }}></div>
                <div className="day">T</div>
              </li>
              <li>
                <div className="bar" style={{ height: 38 }}></div>
                <div className="day">F</div>
              </li>
              <li>
                <div className="bar" style={{ height: 17 }}></div>
                <div className="day">S</div>
              </li>
              <li>
                <div className="bar" style={{ height: 28 }}></div>
                <div className="day">S</div>
              </li>
            </ul> */}
            </div>
          </div>
          {/* <ResponsiveContainer
            width="100%"
            height={75}
            className="dashboardStatisticsGraph"
          >
            <BarChart data={chartData}>
              <XAxis dataKey="day" strokeOpacity={0} />
              <YAxis />
              <Tooltip wrapperStyle={{ backgroundColor: "red" }} />
              <Bar dataKey="count" strokeLinecap={"round"} fill="#E6ECF5" />
            </BarChart>
          </ResponsiveContainer> */}
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
            <div className="chart-holder">
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
                  <XAxis dataKey="date" />
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
            </div>
          </LeftPerformanceSection>
          {/* <RightPerformanceSection className="right-section">
            <Card>
              <Card.Header>
                <CardHeader
                  className="subtitle"
                  title="Weekly Performance"
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
          </RightPerformanceSection> */}
        </ProfileperformanceWrapper>
        <MyRecipiesWrapper className="dashboardMyRecipies">
          <LeftMyRecipiesSection className="myRecipes">
            <div className="sectionheader">
              <div className="myRecipesTitle">
                <p className="subtitle">My Recipes</p>
                <a href="#" className="addRecipeButton btn-secondary">
                  <span className="addRecipeButtonText">Add New Recipe</span>
                  <AddCircleIcon />
                </a>
              </div>
              <span className="btn-secondary">
                {" "}
                View All Recipes <ArrowRight />
              </span>
            </div>
            <RecipiesTable />
          </LeftMyRecipiesSection>
          <RightMyRecipiesSection className="topPerformingRecipes">
            <h2>
              <span className="img">
                <Image src="/images/img-falme.png" alt="waving hand" />
              </span>
              Top Performing Recipes
            </h2>
            <PerformingRecipe data={RecipesData} />
          </RightMyRecipiesSection>
        </MyRecipiesWrapper>
      </div>
    </DashboardLayout>
  )
}
export const Dashboard = styled(DashBoard)`
  padding: 0 50px;

  @media (max-width: 1199px) {
    padding: 0;
  }

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
      color: #1D2129;
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
        color: #1D2129;

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
        padding: 3px 8px;
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
      color: #7b7b7b;
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

  .list-stats-graph {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    font-size: 8px;
    line-height: 10px;
    color: #7b7b7b;
    justify-content: space-between;
    text-align: center;
    max-width: 170px;
    margin: 0 0 0 auto;

    @media (max-width: 1023px) {
      margin: 0 auto;
    }

    li {
      width: 14px;
      margin: 0 4px;
      
      &:hover {
        .bar {
          background: #E0464D;
          box-shadow: 0 0 4px rgba(224, 70, 77, 0.6)
        }
      }
    }

    .bar {
      background: #E6ECF5;
      border-radius: 2px;
      margin: 0 0 5px;

      &.active {
        background: #E0464D;
        box-shadow: 0 0 4px rgba(224, 70, 77, 0.6)
      }
    }
  }

  .dashboardStatisticsGraph {
    width: 15% !important;
    height: auto !important;
    display: flex;
    justify-content: flex-end;
    

    @media (max-width: 1439px) {
      width: 20% !important;
    }

    @media (max-width: 1023px) {
      width: 100% !important;
      height: 100px !important;
      justify-content: center;
    }

    .dashboardStatisticsGraph {
      margin: 0 0 0 auto;

      @media (max-width: 1023px) {
        margin: 0;
      }
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

    h2 {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 15px;
      font-weight: 700;
      margin: 0 0 15px;

      .img {
        display: block;
        width: 13px;
        margin: 0 5px;
      }

      .additional-text {
        color: #979797;
        font-size: 9px;
        line-height: 12px;
        padding: 0 0 0 15px;
      }
    }

    .recharts-bar-rectangle {
      &:hover {
        path {
          fill: #E0464D !important;
          stroke: #E0464D !important;;
        }
      }

      &:nth-child(4) {
        path {
          fill: #E0464D !important;
          stroke: #E0464D !important;
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

.list-streak {
  display: flex;
  flex-direction: row;
  margin: 0 -5px;
  font-size: 10px;
  line-height: 12px;
  color: #979797;
  text-transform: uppercase;
  text-align: center;

  li {
    padding: 0 5px;

    &:last-child {
      .tooltip-text {
        transform: none;
        left: auto;
        right: 0;
      }
    }
  }

  .day {
    display: block;
    margin: 0 0 5px;
  }

  .streak-status {
    display: block;
    position: relative;
    background: #E5E8EF;
    border-radius: 100%;
    width: 16px;
    height: 16px;
    top: 1px;

    &:hover {
      .tooltip-text {
        opacity: 1;
        visibility: visible;
      }
    }

    &.complete,
    &.current {
      background: none;

      .tooltip-text {
        display: none;
      }
      
      svg {
        display: block;
      }
    }

    &.current {
      width: 18px;
      height: 18px;
      margin: 0;
      top: auto;
    
      &:before {
        opacity: 1;
        visibility: visible;
      }

      svg {
        border: 1px solid #E0464D;
        border-radius: 100%;
        padding: 1px;
      }
    }

    svg {
      display: none;
      width: 100%;
      height: auto;
    }

    &:before {
      position: absolute;
      left: -2px;
      right: -2px;
      top: -2px;
      bottom: -2px;
      border: 1px solid #E0464D;
      border-radius: 100%;
      content: '';
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }

  .tooltip-text {
    position: absolute;
    left: 50%;
    width: 100px;
    background: #BD0F2E;
    color: #fff;
    padding: 3px 5px;
    border-radius: 4px;
    transform: translate(-50%, 0);
    bottom: 100%;
    font-size: 9px;
    line-height: 12px;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
  }
}

.dashboardPerformance {
  display: flex;
  justify-content: space-between;
  padding: 25px 0 57px;

  @media (max-width: 1023px) {
    flex-flow: row wrap;
  }
  
  .dashboardPerformanceGraph {
    width: 100%;
    flex: inherit;
    padding: 15px 0 0 0;

    @media (max-width: 1199px) {
      //width: calc(100% - 240px);
    }

    @media (max-width: 1023px) {
      width: 100%;
      margin: 0 0 35px;
      padding: 0;
    }

    .chart-holder {
      margin: 0 -20px 0 -40px;
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
          color: #7b7b7b;

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
          color: #7b7b7b;
          font-size: 12px;

          &:hover {
            color: #7b7b7b;
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
            color: #7b7b7b;
            padding: 5px 15px;
            cursor: pointer;
            display: flex;
            align-items: center;

            span {
              margin-left: 0;
              margin-right: 10px;
            }

            svg {
              path {
                stroke: #7b7b7b;
              }
            }

            &:hover {
              color: #E0464D;
              
              svg {
                path {
                  stroke: #E0464D;
                }
              }
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
    width: 270px;
    min-width: 270px;

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
        color: #7b7b7b;
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
          color: #4b4b4b;
        }

        span {
          color: #7b7b7b;
          font-size: 12px;
          line-height: 20px;
        }
      }

      .textRamaining {
        border: 1px solid #E5E8EF;
        border-radius: 15px;
        color: #4b4b4b;
        font-size: 12px;
        line-height: 20px;
        padding: 2px 15px;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.25s ease-in-out;

        @media (max-width: 1199px) {
          padding: 2px 10px;
        }

        &:hover {
          border-color: #e0464d;
        }
      }
    }

    .text {
      color: #7b7b7b;
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

      &:hover {
        background: #fff;
        border-color: #F3F3F3;
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
    width: calc(100% - 270px);
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
      padding-bottom: 13px;
      margin: 0 0 5px;

      .myRecipesTitle {
        display: flex;
        align-items: center;
      }

      .addRecipeButton {
        display: flex;
        align-items: center;
        position: relative;

        /*svg {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.25s ease-in-out;
        }

        .addRecipeButtonText {
          font-size: 12px;
          line-height: 14px;
          color: #E0464D;
          padding: 3px 10px;
          border-radius: 15px;
          font-weight: 400;
          border: 1px solid #E0464D;
          background: #fff;
          opacity: 0;
          visibilty: hidden;
          transition: all 0.25s ease-in-out;
        }

        &:hover {
          .addRecipeButtonText {
            opacity: 1;
            visibilty: visible;
          }

          svg {
            opacity: 0;
            visibilty: hidden;
          }
        } */
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
        position: relative;
        min-width: inherit;

        .text-button {
          display: inline-flex;
          align-items: center;
        }

        svg {
          fill: #aa141c;
          opacity: 0;
          visibilty: hidden;
          transition: all 0.25s ease-in-out;
          position: absolute;
          right: 0;
          top: 52%;
          transform: translateY(-49%);
          margin: 0;
        }

        &:hover {
          color: #aa141c;
          padding-right: 18px;
  
          svg {
            opacity: 1;
            visibilty: visible;
          }
        }
      }
    }
  }
  
  .topPerformingRecipes {
    width: 270px;
    min-width: 270px;

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

  @media (max-width: 1280px) {
    overflow: auto;
    padding: 0 0 15px;
  }

  .rc-pagination {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding: 30px 0 0;

    li {
      margin: 0 5px;

      &.rc-pagination-prev,
      &.rc-pagination-next {
        height: 30px;
        border: 1px solid #F2F3F5;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        cursor: pointer;
        transition: all 0.4s ease;

        &:hover {
          background: #e0464d;
          color: #fff;
          border-color: #e0464d;
        }
      }

      &.rc-pagination-item-active {
        a {
          background: #e0464d;
          color: #fff;
          border-color: #e0464d;
        }
      }
    }

    a {
      width: 30px;
      height: 30px;
      border: 1px solid #F2F3F5;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.4s ease;

      &:hover{
        background: #e0464d;
        color: #fff;
        border-color: #e0464d;
      }
    }
  }
}

.recipiesTable {
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #4b4b4b;
  font-weight: 500;

  @media (max-width: 767px) {
    min-width: 510px;
  }

  th {
    text-align: left;
    color: #7b7b7b;
    text-transform: capitalize;

    a {
      color: #7b7b7b;
      text-decoration: none;
    }
  }

  .link-item {
    transition: all 0.4s ease;
    max-width: 210px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    text-overflow: ellipsis;
    white-space: nowrap;

    &.link-id {
      max-width: 60px;
    }

    &.name-text {
      max-width: 350px;
    }
    
    &:hover {
      color: #e0464d;
    }
  }

  th, td {
    padding: 10px 5px;
    min-width: 80px;

    &:nth-child(4),
    &:nth-child(5) {
      @media (max-width: 767px) {
        display: none !important;
      }
    }

    a {
      color: #86909C;

      &.name-text {
        color: #1D2129;
      }
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

  .draft {
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

  .scheduled {
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
      color: #0E8521;

      &.downward {
        color: #BD0F2E;
        background: #FAD9D9;
      }

      svg {
        width: 6px;
        height: 6px;
        margin: 0 0 0 3px;
      }
    }
  }

  .date {
    color: #86909C;
  }
}

.topPerformingRecipes {
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 18px;
    color: #1E1E2D;
    padding: 3px 0 15px;
    border-bottom: 1px solid #F2F3F5;
    margin: 0 0 20px;

    .img {
      width: 15px;
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px 0 0;

      img{
        width: 100%;
        height: auto;
        vertical-align: top;
      }
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

  .receipeDetails {
    padding: 10px 30px 10px 20px;;
    background: #F8F8F8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin: 0 0 10px;
    position: relative;

    &:hover {
      .arrow-holder {
        opacity: 1;
        visibility: visible;
      }
    }

    .arrow-holder {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
      width: 10px;

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
    
    .recipeholder {
      width: 100%;
    }

    .recipeprogress  {
      text-align: center;
      font-size: 12px;
      line-height: 15px;
      color:#565661;
      margin: 0 10px 0 0;

      span {
        display: block;
        margin: 0 0 5px;
      }

      svg {
        margin: 0 auto;
      }
    }
    
    .userProfileImageWrap {
      width: 33px;
      height: 33px;
      min-width: 33px;
      border-radius: 5px;
      overflow: hidden;
      margin: 0 10px 0 0;

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
      font-size: 11px;
      line-height: 13px;
      color: #62626C;
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
        color: #4b4b4b;
        font-weight: 700;
        display: none;
      }

      .receipeStatus {
        font-size: 12px;
        line-height: 16px;
        color: #86909C;
        display: flex;
        align-items: center;

        a {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        span {
          font-size: 10px;
          line-height: 12px;
          color: #0E8521;
          background: #D9FADD;
          border-radius: 10px;
          padding: 2px 6px 4px;
          display: flex;
          align-items: center;
          margin-left: 7px;

          svg {
            width: 6px;
            height: 6px;
            margin-left: 3px;
          }
        }
      }
    }
  }
}

.weeklyReset {
  background: #EFF3FF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -20px -20px;
  padding: 12px 15px;
  color: #7b7b7b;

  svg {
    margin: 0 5px 0 0;
  }

  span {
    color: #2B5CFD;
    padding: 0 0 0 6px;
  }
}

.dotsDrop {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  svg {
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    background: #F3F3F3;
  
    svg {
      transform: rotate(90deg);
    }
  }
}
`
