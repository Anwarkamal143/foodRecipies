import { Button } from "@components"
import React from "react"

type Props = {}

const Nutrition = (props: Props) => {
  return (
    <div className="ingredientsBlock">
      <div className="ingredientsBlockHead">
        <h2>Nutrition</h2>
        <Button>Smart Nutrition Calculator</Button>
      </div>
    </div>
  )
}

export default Nutrition
