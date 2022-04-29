import { getPageLayout } from "@layouts"
import { RecipesData } from "@redux/data"
import React, { useState } from "react"
import styled from "styled-components"
import PanCakeScreen from "./../../screens/PanCake/index"
import { Post } from "./post/Posts"
type Props = {
  className?: string
}

const PanCake = ({ className }: Props) => {
  const [posts, setPosts] = useState([...RecipesData])
  return (
    <div className={className}>
      {posts.splice(0, 1).map((post, i) => (
        <Post
          key={i}
          post={post}
          onSubmit={post => {
            const newPosts = [...posts]
            const index = newPosts.findIndex(p => p._id === post._id)
            if (index !== -1) {
              newPosts[index] = post
              setPosts(posts => newPosts)
            }
          }}
        />
      ))}
      <PanCakeScreen />
    </div>
  )
}
PanCake.layout = {
  layout: getPageLayout,
  props: {
    className: "recipesPageWrapper",
    variant: "regular",
    sidebar: false,
  },
}
export default styled(PanCake)`
  padding: 100px;
`
