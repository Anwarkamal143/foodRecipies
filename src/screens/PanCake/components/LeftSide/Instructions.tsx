import { Button } from "@components"
import React from "react"

type Props = {}

const Instructions = (props: Props) => {
  return (
    <div>
      <div className="head">
        <h2>Instructions</h2>
        <Button>Print</Button>
        <Button>Ask me a question</Button>
      </div>
      <div className="Ingredients-body">
        <div className="For-the-Gravy">
          <p>For the Gravy</p>
          <hr />
          <div className="ui-items">
            <ul>
              <li>
                In a large heavy-bottomed stockpot or saute pan, melt the butter
                over medlum-high heat. Add the onions and saute, stirring es,ery
                2.3 minutes for about 30 minutes, or until the onions are
                caramelized to a deep golden brown color. (If the bottom of the
                pan starts to bum
              </li>
              <li>
                Add garlic and saute for 1-2 minutes, until fragrant. Remove
                from heat and transfer the onion mixture to a medium mixing
                bowl. Refrigerate for 1
              </li>
              <li>
                Set aside a few tablespoons of the onion mixture, which we will
                use later as a topping. Add the remaining Ingredients to the
                bowl of caramelized onions
              </li>
            </ul>
          </div>
        </div>
        <div className="For-the-Chicken">
          <p>For the Chicken</p>
          <hr />
          <div className="ui-items">
            <ul>
              <li>
                In a large heavy-bottomed stockpot or saute pan, melt the butter
                over medlum-high heat. Add the onions and saute, stirring es,ery
                2.3 minutes for about 30 minutes, or until the onions are
                caramelized to a deep golden brown color. (If the bottom of the
                pan starts to bum
              </li>
              <li>
                Add garlic and saute for 1-2 minutes, until fragrant. Remove
                from heat and transfer the onion mixture to a medium mixing
                bowl. Refrigerate for 1
              </li>
              <li>
                Set aside a few tablespoons of the onion mixture, which we will
                use later as a topping. Add the remaining Ingredients to the
                bowl of caramelized onions
              </li>
            </ul>
          </div>
        </div>
        <Button>Watch Video Tutorial</Button>
      </div>
    </div>
  )
}

export default Instructions
