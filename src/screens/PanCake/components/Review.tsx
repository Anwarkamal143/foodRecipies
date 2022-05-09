import { Input } from "@components"
import { CameraIcon, DownArrowIcon, InstagramLineIcon } from "@icons"
import React, { useState } from "react"
import Button from "./../../../components/Button/Button"
import ReviewOnPost from "./ReviewOnPost"

type Props = {}

const Review = (props: Props) => {
  const [value, setValue] = useState("")
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="ingredientsBlock recipeTagsBlock">
      <div className="ingredientsBlockHead">
        <h2>Recipe Tags</h2>
      </div>
      <ul className="recipeTagsList">
        <li><a href="#">Main Dishes</a></li>
        <li><a href="#">Low Sugar</a></li>
        <li><a href="#">Low Carb</a></li>
        <li><a href="#">Diet</a></li>
      </ul>
      <div className="makeRecipeBlock">
        <div className="img-holder">
          <img src="/images/bbq.jpg" alt="" />
        </div>
        <div className="textbox">
          <div className="makeRecipeBlockHead">
            <InstagramLineIcon />
            <h3>DID YOU MAKE THIS RECIPE?</h3>
            <Button onClick={() => setIsShow(!isShow)}>
              {isShow ? "Hide All Reviews" : "See All Reviews"}
              <DownArrowIcon />
            </Button>
            <Button className="buttonGreen">Made this Recipe?</Button>
          </div>
          <div className="makeRecipeForm">
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
            <CameraIcon />
          </div>
        </div>
      </div>
      {isShow && <ReviewOnPost />}
    </div>
  )
}

export default Review
