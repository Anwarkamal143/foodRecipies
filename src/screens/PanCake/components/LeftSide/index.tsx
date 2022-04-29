import { Button } from "@components"
import React from "react"
import PostHeader from "src/pages/followers/post/PostHeader"
import Ingredients from "./Ingredients"
import Instructions from "./Instructions"

type Props = {
  post?: any
}

const LeftSide = (props: Props) => {
  const { post } = props
  return (
    <div>
      <Ingredients />
      <Instructions />
      <div className="About-The-Cook">
        <h2>About The Cook</h2>
        <PostHeader post={post} />
        <Button>View My Profile</Button>
        <Button>Visit My Website</Button>
      </div>
    </div>
  )
}

export default LeftSide
