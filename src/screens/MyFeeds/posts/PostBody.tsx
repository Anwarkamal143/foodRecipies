import { Icon, Image, Scrollbar } from "@components"
import { HeartIcon } from "@icons"
import { useState } from "react"
import styled from "styled-components"
import { IPostType } from "./Posts"

type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
  post: IPostType
}

type ImagesProps = {
  images: string[]
  className?: string
  post: IPostType
  onSubmit?: (...args: any[]) => void
}
const ImagesSlider = (props: ImagesProps) => {
  const { images, className, post, onSubmit } = props
  const [like, setLike] = useState(false)
  return (
    <div className={className}>
      <div className="main-img">
        <Image className="postbody-img" src={images[0]} alt={images[0]} />
        <Icon className="heartIcon">
          <HeartIcon
            fill={post.liked ? "red" : "none"}
            {...(post.liked ? { stroke: "red" } : {})}
            // stroke={post.liked ? "red" : "lightgray"}
            onClick={() => {
              const newPost: IPostType = {
                ...post,
                likes: post.likes - 1 < 0 ? 0 : post.likes - 1,
                liked: post.likes - 1 < 0 ? post.liked : !post.liked,
              }
              onSubmit?.(newPost)
            }}
          />
        </Icon>
      </div>
      <div className="scrollslides">
        <Scrollbar>
          {images.slice(1).map(img => {
            return <Image key={img} src={img} alt={img} />
          })}
        </Scrollbar>
      </div>
    </div>
  )
}
const ImgSlides = styled(ImagesSlider)`
  display: flex;
  font-size: 1rem;

  @media (max-width: 767px) {
    flex-flow: row wrap;
  }

  .main-img {
    position: relative;
    width: 80%;
    padding: 0 1em 0 0;

    @media (max-width: 767px) {
      width: 100%;
      padding: 0;
    }

    .heartIcon {
      position: absolute;
      display: block;
      top: 1em;
      left: 1em;
      background: #f7f7f7;
      height: 3em;
      width: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
    }
  }

  .scrollslides {
    width: 20%;

    @media (max-width: 767px) {
      width: 100%;
      height: 60px;
      max-height: 60px;
      margin-top: 2px;
    }

    .image-comp {
      width: 100%;

      @media (max-width: 767px) {
        height: 60px !important;
        margin: 0 5px 0 0 !important;
        border-radius: 5px !important;
      }

      img {
        @media (max-width: 767px) {
          border-radius: 5px !important;
          width: 100%;
          height: 100% !important;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    .rc-scollbar {
      @media (max-width: 767px) {
        display: flex;
      }
    }
  }
`

function PostBody(props: IMyFeedProps) {
  const { className, onSubmit, post } = props

  return (
    <div className={className}>
      <p className="post-text">{post.description}</p>
      {post?.images?.length && (
        <>
          {post.images?.length > 1 ? (
            <ImgSlides images={post.images} post={post} onSubmit={onSubmit} />
          ) : (
            <Image key={post._id} src={post.images[0]} alt={post.images[0]} />
          )}
        </>
      )}
    </div>
  )
}
export default styled(PostBody)`
  .post-text {
    font-size: 12px;
    line-height: 20px;
    color: #1e1e2d;
    margin: 0 0 24px;
  }

  .main-img {
    overflow: hidden;

    .image-comp {
      overflow: hidden;
      border-radius: 15px;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      object-position: center;
      border-radius: 15px;
    }

    .heartIcon {
      width: 42px;
      height: 42px;
      padding: 7px 5px 0;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  .scrollslides {
    .image-comp {
      height: calc(33.333% - 14px);
      max-height: 140px;
      margin: 0 0 14px;
      overflow: hidden;
      border-radius: 15px;

      img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
        object-position: center;
        border-radius: 15px;
      }
    }
  }
`
