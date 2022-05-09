import { RecipesData } from "@redux/data"
import { panCakeSliderData } from "data"
import React from "react"
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
        <header className="sectionDetailsHeader">
          <ul className="breadcrumbs">
            <li><a href="#">HOME</a></li>
            <li><a href="#">BREAKFAST</a></li>
            <li>PANCKAES</li>
          </ul>
          <h1>Homemade Burger with American Cheese and Burrata</h1>
        </header>
        <div className="sectionDetailsContent">
          <Post key={single?._id} postFeed={single} />
        </div>
          <LeftSide post={single} />
          <RightSide />
        <div className="detailsLeftColumn">
          <Nutrition />
          <Review />
        </div>
        {/* <div className="recipesSection"> */}
        <div className="recommendedRecipesBlock">
          <h2>Recommended Recipes</h2>
          <SliderContent data={panCakeSliderData} />
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default PanCakeScreen
