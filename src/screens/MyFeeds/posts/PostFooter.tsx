import { Icon } from "@components"
import { DisLikeIcon, ExportIcon, HeartIcon, LikeIcon } from "@icons"
import { FormatNumber } from "@utils"
import styled from "styled-components"
import { IPostType } from "./Posts"

type IPostFooterProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
  post: IPostType
  onSocialItemClick?: (...args: any[]) => void
}

function PostFooter(props: IPostFooterProps) {
  const { className, onSubmit, post, onSocialItemClick } = props

  return (
    <div className={className}>
      <div className="likeDetails">
        <HeartIcon
          fill={post.liked ? "red" : "none"}
          {...(post.liked ? { stroke: "red" } : {})}
          // stroke={post.liked ? "red" : "lightgray"}
          onClick={() => {
            const newPost: IPostType = {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked,
            }
            onSubmit?.(newPost)
          }}
        />

        <span className="likeDetailsText">
          {" "}
          {FormatNumber(post.likes)} Like
        </span>
        <Icon className="iconSize iconShare" onClick={onSocialItemClick}>
          <ExportIcon />
        </Icon>
      </div>
      <div className="like-actions">
        <Icon className="iconSize iconLike">
          <LikeIcon />
        </Icon>
        <Icon className="iconSize iconDislike">
          <DisLikeIcon />
        </Icon>
      </div>
    </div>
  )
}
export default styled(PostFooter)`
  padding: 20px 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    padding: 20px 0 0;
  }

  .likeDetails {
    display: flex;
    align-items: center;

    span {
      margin-top: -7px;
    }

    .likeDetailsText {
      padding: 0 30px 0 10px;
      font-size: 14px;
      line-heoght: 20px;
      color: #1e1e2d;
      font-weight: 700px;
    }

    .iconShare {
      transition: all 0.25s ease-in-out;
      
      &:hover {
        background: lightgray;
      }
    }
  }

  .like-actions {
    display: flex;

    span:not(:last-child) {
      margin-right: 25px;
    }

    .iconLike {
      border-color: #c2ffe6;
      transition: all 0.25s ease-in-out;
      
      &:hover {
        background: #c2ffe6;
      }
    }

    .iconDislike {
      border-color: #ffc4c6;
      transition: all 0.25s ease-in-out;
      
      &:hover {
        background: #ffc4c6;
      }
    }
  }
`
