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
import { CardHeader, PerformanceBar, StatisticsItem } from "./components"
import {
  LeftMyRecipiesSection,
  LeftPerformanceSection,
  MyRecipiesWrapper,
  ProfileperformanceWrapper,
  RightMyRecipiesSection,
  RightPerformanceSection,
  StatisticsWrapper,
} from "./dashboard.styed"

const data = [
  {
    title: "Recipe Views",
    count: FormatNumber(1200),
    status: "up",
    trandingCount: 28,
    reviewTime: "Views (7 days)",
  },
  {
    title: "Recipe Saves",
    count: FormatNumber(1100000),
    status: "down",
    trandingCount: 36,
    reviewTime: "Saves ( 7 days )",
  },
  {
    title: "Recipe Reviews",
    count: FormatNumber(1100),
    status: "up",
    trandingCount: 23,
    reviewTime: "Views (7 days)",
  },
  {
    title: "Profile Visits",
    count: FormatNumber(11500000),
    status: "up",
    trandingCount: 23,
    reviewTime: "Visits ( 30 days )",
  },
]
const LineChartData = [
  {
    month: "2021-03-09",
    // price: FormatNumber(4000),
    price: 0,
  },
  {
    month: "2021-03-10",
    price: 3000,
  },
  {
    month: "2021-03-11",
    price: 2000,
  },
  {
    month: "2021-03-12",
    price: 2780,
  },
  {
    month: "2021-03-13",
    price: 1890,
  },
  {
    month: "2021-03-14",
    price: 2390,
  },
  {
    month: "2021-03-15",
    price: 3490,
  },
]
const chartData = [
  {
    day: "M",

    count: "50",
  },
  {
    day: "T",

    count: "60",
  },
  {
    day: "W",

    count: "70",
  },
  {
    day: "T",

    count: "1000",
  },
  {
    day: "F",

    count: "70",
  },
  {
    day: "S",

    count: "60",
  },
  {
    day: "S",

    count: "50",
  },
]
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
