import { RecipesData } from "@redux/data"
import { panCakeSliderData } from "data"
import React, { useState } from "react"
import SliderContent from "src/components/SliderContent"
import LeftSide from "./components/LeftSide/index"
import Nutrition from "./components/Nutrition"
import Review from "./components/Review"
import RightSide from "./components/RightSide/rightSide"
import { Post } from "./post/Posts"
type Props = {}

const PanCakeScreen = (props: Props) => {
  const [posts, setPosts] = useState([...RecipesData])
  const [singlePost, setSinglePost] = useState<any>({})
  return (
    <div className="followersContainer">
      {posts.splice(0, 1).map((post, i) => {
        setSinglePost(post)
        return (
          <Post
            key={post._id}
            postFeed={post}
            onSubmit={post => {
              const newPosts = [...posts]
              const index = newPosts.findIndex(p => p._id === post._id)
              if (index !== -1) {
                newPosts[index] = post
                setPosts(posts => newPosts)
              }
            }}
          />
        )
      })}
      <LeftSide post={singlePost} />
      <RightSide />
      <Nutrition />
      <Review />
      {/* <div className="recipesSection"> */}
      <h2>Recommended Recipes</h2>
      <SliderContent data={panCakeSliderData} />
      {/* </div> */}
    </div>
  )
}

export default PanCakeScreen
