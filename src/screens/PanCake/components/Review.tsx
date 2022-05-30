import { useOpenClose } from "@hooks"
import { CameraIcon, DownArrowIcon, InstagramLineIcon } from "@icons"
import { useState } from "react"
import ReviewLikeModal from "../model/ReviewModal/ReviewLikeModal"
import Button from "./../../../components/Button/Button"
import ReviewOnPost from "./ReviewOnPost"

type Props = {}

const Review = (props: Props) => {
  const [isShow, setIsShow] = useState(false)
  const [open, onOpen, onClose] = useOpenClose()
  return (
    <div className="ingredientsBlock recipeTagsBlock">
      <div className="ingredientsBlockHead">
        <h2>Recipe Tags</h2>
      </div>
      <ul className="recipeTagsList">
        <li>
          <a href="#">Main Dishes</a>
        </li>
        <li>
          <a href="#">Low Sugar</a>
        </li>
        <li>
          <a href="#">Low Carb</a>
        </li>
        <li>
          <a href="#">Diet</a>
        </li>
      </ul>
      <div className="makeRecipeBlock">
        <div className="img-holder">
          <img src="/images/post1.png" alt="" />
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
            <span onClick={() => onOpen()}>Add your notes! How was it?</span>
            <CameraIcon
              onClick={() => {
                onOpen()
              }}
            />
          </div>
        </div>
      </div>
      {isShow && <ReviewOnPost />}
      <ReviewLikeModal isOpen={open} onCancel={onClose} />
    </div>
  )
}

export default Review
