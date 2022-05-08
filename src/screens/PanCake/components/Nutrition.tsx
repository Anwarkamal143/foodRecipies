import { Button } from "@components"
import React from "react"
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
type Props = {}

const Nutrition = (props: Props) => {
  return (
    <div className="ingredientsBlock">
      <div className="ingredientsBlockHead">
        <h2>Nutrition</h2>
        <Button>Smart Nutrition Calculator</Button>
      </div>
      <div className="progressBar">
        <div className="Carbs">
          <span>Carbs</span>
          <CircularProgressbarWithChildren
            value={80}
            text={`${80}%`}
            styles={buildStyles({
              trailColor: "#EBFBF2",
              pathColor: "#11C278",
            })}
          ></CircularProgressbarWithChildren>
        </div>
        <div className="Fat">
          <span>Fat</span>
          <CircularProgressbarWithChildren
            value={80}
            text={`${80}%`}
            styles={buildStyles({
              trailColor: "#FFF0F1",
              pathColor: "#FE585F",
            })}
          ></CircularProgressbarWithChildren>
        </div>
        <div className="Protein">
          <span>Protein</span>
          <CircularProgressbarWithChildren
            value={80}
            text={`${80}%`}
            styles={buildStyles({
              trailColor: "#FFF8E9",
              pathColor: "#FEC745",
            })}
          ></CircularProgressbarWithChildren>
        </div>
        <div className="Calories">
          <span>Calories</span>
          <CircularProgressbarWithChildren
            value={80}
            text={`${80}%`}
            styles={buildStyles({
              pathColor: "#11C278",
              trailColor: "#FE585F",
            })}
          >
            <CircularProgressbar
              value={60}
              styles={buildStyles({
                trailColor: "transparent",
                pathColor: "#FEC745",
              })}
            />
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  )
}

export default Nutrition
