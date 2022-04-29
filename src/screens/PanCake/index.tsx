import React from "react"
import LeftSide from "./components/LeftSide/index"
import Nutrition from "./components/Nutrition"
import RightSide from "./components/RightSide/rightSide"

type Props = {
  post?: any
}

const PanCakeScreen = (props: Props) => {
  const { post } = props
  return (
    <div>
      <LeftSide post={post} />
      <RightSide />
      <Nutrition />
    </div>
  )
}

export default PanCakeScreen
