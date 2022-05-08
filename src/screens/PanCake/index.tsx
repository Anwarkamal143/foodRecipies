import { RecipesData } from "@redux/data"
import { panCakeSliderData } from "data"
import React, { useState } from "react"
import SliderContent from "src/components/SliderContent"
import Footer from "src/pages/NewPage/footer/footer"
import LeftSide from "./components/LeftSide/index"
import Nutrition from "./components/Nutrition"
import Review from "./components/Review"
import RightSide from "./components/RightSide/rightSide"
import { Post } from "./post/Posts"
type Props = {}

const PanCakeScreen = (props: Props) => {
  const single = RecipesData.find(e => e.images.length === 7)
  return (
    <div className="ctn">
      <div className="followersContainer">
        <Post key={single?._id} postFeed={single} />
        <LeftSide post={single} />
        <RightSide />
        <Nutrition />
        <Review />
        {/* <div className="recipesSection"> */}
        <h2>Recommended Recipes</h2>
        <SliderContent data={panCakeSliderData} />
        {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default PanCakeScreen
