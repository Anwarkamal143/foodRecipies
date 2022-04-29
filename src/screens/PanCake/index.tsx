import React from "react"
import LeftSide from "./components/LeftSide/index"
import RightSide from "./components/RightSide/rightSide"

type Props = {}

const PanCakeScreen = (props: Props) => {
  return (
    <div>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default PanCakeScreen
