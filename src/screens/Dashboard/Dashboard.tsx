import { Button, Card, DropDown, Image } from "@components"
import { AddCircleIcon, CalendarIcon, DownArrowIcon, EyeIcon } from "@icons"
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
  YAxis
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
  StatisticsWrapper
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
          <ResponsiveContainer width="100%" height={75}
              className="dashboardStatisticsGraph">
            <BarChart data={chartData}>
              <XAxis dataKey="day" strokeOpacity={0} />
              {/* <YAxis /> */}
              <Tooltip />
              <Bar dataKey="count" strokeLinecap={"round"} fill="lightgray" />
            </BarChart>
          </ResponsiveContainer>
        </StatisticsWrapper>
        <ProfileperformanceWrapper className="dashboardPerformance">
          <LeftPerformanceSection>
            <div className="sectionheader">
              <p>Profile Performance</p>
              <p className="sortBy">
                <span>Sort by</span>
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
                    { name: "Recipe Views" },
                    { name: "Recipe Saves" },
                    { name: "Recipe Reviews" },
                    { name: "Profile Visits " },
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
          <RecipiesTable />
          <RightPerformanceSection className="right-section">
            <Card>
              <Card.Header>
                <CardHeader
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
                <p>
                  Post consistently and keep your info updated to increase
                  interactions.
                  <Image src="/images/rocket.png" alt="rocket" />
                </p>
                <Button shape="circle">Interactions Dashboard</Button>
              </Card.Body>
            </Card>
          </RightPerformanceSection>
        </ProfileperformanceWrapper>
        <MyRecipiesWrapper className="dashboardMyRecipies">
          <LeftMyRecipiesSection>
            <div className="sectionheader">
              <div>
                <p>My Recipes</p>
                <AddCircleIcon />
              </div>
              <Button> View All My Recipes</Button>
            </div>
          </LeftMyRecipiesSection>
          <RightMyRecipiesSection>
            <Card>
              <Card.Header>
                <CardHeader
                  title="Top Performing Recipes"
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

  .dashboardStatisticsColumn {
    width: 20%;
    padding: 0 20px;

    + .dashboardStatisticsColumn {
      border-left: 1px solid #F2F3F5;
    }

    h3 {
      font-size: 12px;
      line-height: 20px;
      color: #1d2129;
      font-weight: 400;
      margin: 0 0 4px;
    }

    .dashboardStatisticsInfo {
      display: flex;
      align-items: center;
      margin: 0 0 5px;
      
      strong {
        font-size: 22px;
        color: #1d2129;
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
    width: 20% !important;
    height: auto !important;

    .recharts-wrapper {
      width: 135px !important;
      height: 75px !important;

      .recharts-surface {
        width: 135px !important;
        height: 75px !important;
      }
    }
  }
}
`
