import {
  DairyFree,
  GlutenFree,
  NutFree,
  RightAngle,
  Vegan,
  Vegetarian
} from "@icons"
import React from "react"
import ItemCards from "src/components/CooksCard"
type Props = {}
const items = [
  { name: "Vegetarian", icon: <GlutenFree />, isTrue: true },
  { name: "Vegan", icon: <Vegan />, isTrue: false },
  { name: "Gluten-Free", icon: <Vegetarian />, isTrue: false },
  { name: "Dairy-Free", icon: <NutFree />, isTrue: true },
  { name: "Low Sugar", icon: <DairyFree />, isTrue: false },
  { name: "Low Salt", icon: <DairyFree />, isTrue: false },
]
const RightSide = (props: Props) => {
  return (
    <div className="detailsRightColumns">
      <div className="detailsAsideWidget">
        <strong className="title">Diet At a Glance <RightAngle /></strong>
        <div className="dietPlansList">
          {items.map(item => {
            return (
              <div className={`item`} key={item.name}>
                <div className="infoBox">
                  {item.icon}
                  {item.name}
                </div>
                <span className="iconsStatus">{item.isTrue ? "Y" : "X"}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="detailsAsideWidget">
        <strong className="title">Cook Collections <RightAngle /></strong>
        <div className="collectionsList">
          <ItemCards
            icon={<RightAngle />}
            footer={false}
            title="My Top Favorite Breakfast Recipes"
            subTitle="34 Total Recipes"
          />
          <ItemCards
            footer={false}
            icon={<RightAngle />}
            title="My Top Favorite Breakfast Recipes"
            subTitle="34 Total Recipes"
          />
          <ItemCards
            footer={false}
            icon={<RightAngle />}
            title="My Top Favorite Breakfast Recipes"
            subTitle="34 Total Recipes"
          />
        </div>
      </div>
      <div className="detailsAsideWidget textWidget">
        <strong className="title">Save This Recipe</strong>
        <p className="pText">
          Save this recipe to make it later, share it with friends, or thank
          the cook!
        </p>
        <span className="buttonSave">
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9649 3.12832C8.29171 -2.5454 0.857422 0.545461 0.857422 6.72603C0.857422 11.3672 11.0494 18.6272 11.9649 19.5712C12.8866 18.6272 22.5717 11.3672 22.5717 6.72603C22.5717 0.592318 15.6449 -2.5454 11.9649 3.12832Z"
              fill={"#3E4373"}
            />{" "}
          </svg>
          Save Recipe
        </span>
      </div>
    </div>
  )
}

export default RightSide
