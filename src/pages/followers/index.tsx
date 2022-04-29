import { PageLayoutWrapper } from "@layouts"
import { RecipesData } from "@redux/data"
import React, { useState } from "react"
import { Post } from "./post/Posts"

type Props = {}

const PanCake = (props: Props) => {
  const [posts, setPosts] = useState([...RecipesData])

  return (
    <PageLayoutWrapper className="recipesPageWrapper" variant={"regular"}>
      {posts.map((post, i) => (
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
    </PageLayoutWrapper>
  )
}

export default PanCake
