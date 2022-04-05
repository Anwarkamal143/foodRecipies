import { Icon, Image } from "@components"
import { HeartIcon, Tag } from "@icons"
import "photoswipe/dist/default-skin/default-skin.css"
import "photoswipe/dist/photoswipe.css"
import { useState } from "react"
import { Gallery, Item } from "react-photoswipe-gallery"
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
  const maintemProps: any = {
    width: "1024",
    height: "768",
    original: images[0],
  }
  return (
    <div className={className}>
      <Gallery>
        <div className="main-img">
          <Item {...maintemProps}>
            {({ ref, open }: any) => {
              return (
                <div ref={ref}>
                  <Image
                    className="postbody-img"
                    src={images[0]}
                    alt={images[0]}
                    ref={ref as any}
                    onClick={open}
                  />
                </div>
              )
            }}
          </Item>
          <Icon className="tagsIcon">
            <span>
              <Tag /> Vegan
            </span>
          </Icon>
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
          {images.slice(1).map((img, index) => {
            const itemProps: any = {
              width: "1024",
              height: "768",
              original: img,
            }
            return (
              <>
                <Item {...itemProps}>
                  {({ ref, open }: any) => {
                    return (
                      <>
                        {index > 2 ? (
                          <span ref={ref} className="hidden"></span>
                        ) : (
                          <div className="images-area" ref={ref}>
                            <Image
                              key={img}
                              src={img}
                              alt={img}
                              ref={ref as any}
                              onClick={open}
                            />
                            {index >= 2 && images[index + 1] && (
                              <div className="image-counter-wrap" onClick={open} ref={ref}>
                                <span className="image-counter" >{`${
                                  images.length - 3
                                } More Photos`}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )
                  }}
                </Item>
              </>
            )
          })}
        </div>
      </Gallery>
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
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      display: block;
      width: 100%;
      margin-top: 10px;
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
    .hidden {
      display: none;
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

    .tagsIcon {
      position: absolute;
      right: 2em;
      top: 1em;
      background: #11c278;
      width: auto;
      color: #fff;
      border: 0;
      border-radius: 25px;
      height: 42px;
      font-size: 14px;
      line-height: 20px;
      padding: 5px 15px;
      font-weight: 600;

      span {
        display: flex;
        align-items: center;

        svg {
          fill: #fff;
          margin: 0 10px 0 0;
        }
      }
    }
  }

  .scrollslides {
    .images-area {
      flex-grow: 1;
      flex-basis: 0;
      margin: 0 0 14px;
      overflow: hidden;
      border-radius: 15px;
      position: relative;

      &:last-child,
      &:only-child {
        margin: 0;
      }

      .image-comp {
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
        border-radius: 15px;
      }
    }

    .image-counter-wrap {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 14px;
      line-height: 18px;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.55)
      );
    }
  }
`
