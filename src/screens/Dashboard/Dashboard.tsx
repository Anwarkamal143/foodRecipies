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
  YAxis,
} from "recharts"
import styled from "styled-components"
import { chartData, data, LineChartData } from "../../../data"
import { CardHeader, PerformanceBar, StatisticsItem } from "./components"
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
      <div>
        <StatisticsWrapper>
          {data.map(item => (
            <StatisticsItem
              key={item.title}
              title={item.title}
              count={item.count}
              reviewTime={item.reviewTime}
              trandingCount={item.trandingCount}
            />
          ))}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="day" strokeOpacity={0} />
              {/* <YAxis /> */}
              <Tooltip />
              <Bar dataKey="count" strokeLinecap={"round"} fill="lightgray" />
            </BarChart>
          </ResponsiveContainer>
        </StatisticsWrapper>
        <ProfileperformanceWrapper>
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
                <div>
                  <p></p>
                </div>
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
        <MyRecipiesWrapper>
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
              <Card.Body></Card.Body>
            </Card>
          </RightMyRecipiesSection>
        </MyRecipiesWrapper>
      </div>
    </DashboardLayout>
  )
}
export const Dashboard = styled(DashBoard)``
