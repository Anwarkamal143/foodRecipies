import { Input } from "@components"
import { InstagramIcon } from "@icons"
import React, { useState } from "react"
import Button from "./../../../components/Button/Button"
import ReviewOnPost from "./ReviewOnPost"

type Props = {}

const Review = (props: Props) => {
  const [value, setValue] = useState("")
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      <div className="head">
        <h2>Recipe Tags</h2>
        <div className="tags">
          <span>Main Dishes</span>
          <span>Low Sugar</span>
          <span>Low Carb</span>
          <span>Diet</span>
        </div>
      </div>
      <img src="/images/bbq.jpg" alt="" />
      <div>
        <div>
          <InstagramIcon />
          <h2>DID YOU MAKE THIS RECIPE?</h2>
          <Button onClick={() => setIsShow(!isShow)}>
            {isShow ? "Hide All Reviews" : "See All Reviews"}
          </Button>
        </div>
        <div>
          <span className="icon">R</span>
          <Input
            value={value}
            className="search_input"
            placeholder="Smart Search Recipe & Cooks…"
            onChange={e => {
              setValue(e.target.value)
            }}
            type="text"
            materialDesign
          />
          <InstagramIcon />
        </div>
      </div>
      {isShow && <ReviewOnPost />}
    </div>
  )
}

export default Review