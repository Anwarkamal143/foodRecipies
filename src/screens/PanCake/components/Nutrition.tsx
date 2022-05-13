import { Button } from "@components"
import { useOpenClose } from "@hooks"
import React from "react"
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import SmartNutritionModal from "../model/SmartNutritionModal"
type Props = {}

const Nutrition = (props: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()

  return (
    <div className="ingredientsBlock nutritionBlock">
      <div className="ingredientsBlockHead">
        <h2>Nutrition</h2>
        <Button className="calculatorButton" onClick={onOpenModel}>
          <img src="/images/icon-bow.png" alt="" /> Smart Nutrition Calculator
        </Button>
      </div>
      <div className="nutritionProgressBar">
        <div className="nutritionProgressBox Carbs">
          <span className="nutritionTitle">Carbs</span>
          <CircularProgressbarWithChildren
            value={56}
            text={`(${56}%)`}
            styles={buildStyles({
              trailColor: "#EBFBF2",
              pathColor: "#11C278",
            })}
          ></CircularProgressbarWithChildren>
          <span className="nutritionText">30.1g</span>
        </div>
        <div className="nutritionProgressBox Fat">
          <span className="nutritionTitle">Fat</span>
          <CircularProgressbarWithChildren
            value={72}
            text={`(${72}%)`}
            styles={buildStyles({
              trailColor: "#FFF0F1",
              pathColor: "#FE585F",
            })}
          ></CircularProgressbarWithChildren>
          <span className="nutritionText">16g</span>
        </div>
        <div className="nutritionProgressBox Protein">
          <span className="nutritionTitle">Protein</span>
          <CircularProgressbarWithChildren
            value={8}
            text={`(${8}%)`}
            styles={buildStyles({
              trailColor: "#FFF8E9",
              pathColor: "#FEC745",
            })}
          ></CircularProgressbarWithChildren>
          <span className="nutritionText">12g</span>
        </div>
        <div className="nutritionProgressBox Calories">
          <span className="nutritionTitle">Calories</span>
          <CircularProgressbarWithChildren
            value={80}
            text={`(${80}%)`}
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
          <span className="nutritionText">320 Kcal</span>
        </div>
      </div>
      <SmartNutritionModal isOpen={isOpenModel } onCancel={ onCloseModel}/>
    </div>
  )
}

export default Nutrition
