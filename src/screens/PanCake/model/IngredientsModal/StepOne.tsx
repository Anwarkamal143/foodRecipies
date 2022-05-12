import { Button, Checkbox } from "@components"
import { Minus, PlusBtn } from "@icons"
import React from "react"

type Props = {}

const StepOne = (Props: Props) => {
  return (
    <div className="ingredientsModalContent">
      <div className="ingredientsModalHeader">
        <span className="ingredientsProduct">
          <img src="images/ingredientsImage.png" alt="" />
          Chicken-Parmesan Bundles
        </span>
        <span className="inputNumbers">
          <Minus /> <span className="numText">3 Servings</span> <PlusBtn />
        </span>
      </div>
      <div className="ingredientsItems">
        <div className="options">
          <span className="ingredientsItemsTitle">Item to add</span>
          <span className="ingredientsItemsOption">Deselect all</span>
        </div>
        <Checkbox
          width={16}
          height={16}
          label="1 tablespoon honey"
          checked
          icon={<img src="images/egg.svg" width={16} alt="" />}
        />
        <Checkbox
          width={16}
          height={16}
          label="02 (1.5 lb) boneless skinless chicken breasts"
          checked
          icon={<img src="images/imgFood.png" width={16} alt="" />}
        />
        <Checkbox
          width={16}
          height={16}
          label="1 teaspoon cornstarch"
          checked
          icon={<img src="images/imgFood2.png" width={14} alt="" />}
        />
        <Checkbox
          width={16}
          height={16}
          label="2 tablespoons avocado oil"
          checked
          icon={<img src="images/imgFood.png" width={14} alt="" />}
        />
        <Checkbox
          width={16}
          height={16}
          label="1lb lean ground beef"
          checked
          icon={<img src="images/imgFood.png" width={14} alt="" />}
        />
      </div>
      <Button className="buttonGreen">Add 8 items</Button>
    </div>
  )
}

export default StepOne
