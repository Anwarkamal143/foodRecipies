import { Button } from "@components"
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
    </div>
  )
}

export default Ingredients
