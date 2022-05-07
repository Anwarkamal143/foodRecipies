import { Button, Checkbox } from "@components"
import { Minus, PencilIcon, PlusBtn } from "@icons"
import React from "react"

type Props = {}

const Ingredients = (props: Props) => {
  return (
    <div className="ingredientsBlock">
      <div className="ingredientsBlockHead">
        <h2>Ingredients</h2>
        <span className="inputNumbers">
          <Minus /> <span className="numText">3 Servings</span> <PlusBtn />
        </span>
        <Button>Convert Units</Button>
      </div>
      <div className="ingredientsBody">
        <div className="ingredientsItemsHolder">
          <strong className="title">For the Gravy</strong>
          <div className="ingredientsItems">
            <Checkbox
              width={16}
              height={16}
              label="1/4 Cup reduced-sodium soy sauce"
              checked
              icon={
                <img src="images/chicken.svg" alt="" />
              }
            />
            <Checkbox
              width={16}
              height={16}
              label="1/4 Cup reduced-sodium soy sauce"
              checked
              icon={
                <img src="images/chicken.svg" alt="" />
              }
            />
            <Checkbox
              width={16}
              height={16}
              label="1 tablespoon honey"
              checked
              icon={
                <img src="images/egg.svg" alt="" />
              }
            />
            <Checkbox
              width={16}
              height={16}
              label="1 tablespoon honey"
              checked
              icon={
                <img src="images/egg.svg" alt="" />
              }
            />
          </div>
        </div>
        <div className="ingredientsItemsHolder">
          <strong className="title">For the Chicken</strong>
          <div className="ingredientsItems">
            <Checkbox
              width={16}
              height={16}
              label="1/4 Cup reduced-sodium soy sauce"
              checked
              icon={
                <span className="icon">
                  <img src="images/chicken.svg" alt="" />
                </span>
              }
            />
            <Checkbox
              width={16}
              height={16}
              label="1/4 Cup reduced-sodium soy sauce"
              checked
              icon={
                <span className="icon">
                  <img src="images/chicken.svg" alt="" />
                </span>
              }
            />
            <Checkbox
              width={16}
              height={16}
              label="1 tablespoon honey"
              checked
              icon={
                <span className="icon">
                  <img src="images/egg.svg" alt="" />
                </span>
              }
            />
            <Checkbox
              width={16}
              height={16}
              label="1 tablespoon honey"
              checked
              icon={
                <span className="icon">
                  <img src="images/egg.svg" alt="" />
                </span>
              }
            />
          </div>
          <Button className="buttonGreen">Add to Shopping List <PencilIcon /></Button>
        </div>
      </div>
    </div>
  )
}

export default Ingredients
