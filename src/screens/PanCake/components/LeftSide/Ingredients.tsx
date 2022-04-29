import { Button, Checkbox } from "@components"
import { Minus, PlusBtn } from "@icons"
import React from "react"

type Props = {}

const Ingredients = (props: Props) => {
  return (
    <div>
      <div className="head">
        <h2>Ingredients</h2>
        <span>
          <Minus /> 3 Servings <PlusBtn />
        </span>
        <Button>Convert Units</Button>
      </div>
      <div className="Ingredients-body">
        <div className="For-the-Gravy">
          <p>For the Gravy</p>
          <hr />
          <div className="checkboxes">
            <Checkbox
              width={16}
              height={16}
              label="1/4 Cup reduced-sodium soy sauce"
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
              icon={
                <span className="icon">
                  <img src="images/chicken.svg" alt="" />
                </span>
              }
            />
          </div>
        </div>
        <div className="For-the-Chicken">
          <p>For the Chicken</p>
          <hr />
          <div className="checkboxes">
            <Checkbox
              width={16}
              height={16}
              label="1/4 Cup reduced-sodium soy sauce"
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
              icon={
                <span className="icon">
                  <img src="images/chicken.svg" alt="" />
                </span>
              }
            />
          </div>
        <Button>Add to Shopping List</Button>
        </div>
      </div>
    </div>
  )
}

export default Ingredients
