import { Button, Checkbox } from "@components"
import { Minus, PlusBtn } from "@icons"
import React from "react"

type Props = {}

const StepOne = (Props: Props) => {
  return (
    <div>
      <div>
        <span>
          <img src="images/chicken.svg" alt="" />
          Chicken-Parmesan Bundles
        </span>
        <span className="inputNumbers">
          <Minus /> <span className="numText">3 Servings</span> <PlusBtn />
        </span>
      </div>
      <div className="ingredientsItems">
        <div className="options">
          <span>Item to add</span>
          <span>Deselect all</span>
        </div>
        <Checkbox
          width={16}
          height={16}
          label="1/4 Cup reduced-sodium soy sauce"
          checked
          icon={<img src="images/chicken.svg" alt="" />}
        />
        <Checkbox
          width={16}
          height={16}
          label="1/4 Cup reduced-sodium soy sauce"
          checked
          icon={<img src="images/chicken.svg" alt="" />}
        />
        <Checkbox
          width={16}
          height={16}
          label="1 tablespoon honey"
          checked
          icon={<img src="images/egg.svg" alt="" />}
        />
        <Checkbox
          width={16}
          height={16}
          label="1 tablespoon honey"
          checked
          icon={<img src="images/egg.svg" alt="" />}
        />
      </div>
      <Button>Add 8 items</Button>
    </div>
  )
}

export default StepOne
