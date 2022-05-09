import { Button } from "@components"
import { AvatarIcon, LinkArrowIcon } from "@icons"
import React from "react"
import PostHeader from "../../post/PostHeader"
import Ingredients from "./Ingredients"
import Instructions from "./Instructions"

type Props = {
  post?: any
}

const LeftSide = (props: Props) => {
  const { post } = props
  return (
    <div className="detailsLeftColumn">
      <Ingredients />
      <Instructions />
      <div className="ingredientsBlock aboutCookBlock">
        <div className="ingredientsBlockHead">
          <h2>About The Cook</h2>
        </div>
        <PostHeader post={post} />
        <div className="ingredientsBlockButtons">
          <Button className="buttonWhite">
            View My Profile <AvatarIcon />
          </Button>
          <Button className="buttonGreen">
            Visit My Website <LinkArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LeftSide
