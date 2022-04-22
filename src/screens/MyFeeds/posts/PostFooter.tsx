import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon } from "@components"
import { DisLikeIcon, ExportIcon, LikeIcon } from "@icons"
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
  const handleSave = () => {
    const newPost = {
      ...post,
      person: { ...post.person, isRecipeSaved: !post.person.isRecipeSaved },
    }
    onSubmit?.(newPost)

  }
  return (
    <div className={className}>
      <div className="likeDetails">
        <div className="saveRecipeBox">
          {/* <HeartFilled /> */}
          <Icon className={`heartIcon ${post.person.isRecipeSaved ? 'saved_racipe' : ''}`} onClick={handleSave}>
            <HeartIconAnimtaed />
          </Icon>
          <span className="saveRecipeText">Save Recipe</span>
        </div>
        {/* <HeartIcon
          className="heartIcon"
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
        /> */}

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
        <span className="recipeButton">Made this recipe?</span>
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
    padding: 0 10px 0 0;

    span {
      margin-top: 0;
    }

    .saveRecipeBox {
      display: flex;
      align-items: center;
      margin: 0 25px 0 0;
      cursor: pointer;

      svg {
        fill: rgba(0, 0, 0, 0.15);
        margin: 0 15px 0 0;
      }

      .saveRecipeText {
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.25);
        margin: 0;
      }
    }

    .heartIcon {
      width: 36px;
      height: 36px;
      border-radius: 4px;
      border: none;
      background: #f3f3f3;

      &:hover {
        background: #feeef3;
      }

      .like {
        width: 100%;
        height: 100%;
        margin: 0;
      }

      svg {
        width: 20px;
        height: 20px;
        margin: 0;
      }
    }

    .likeDetailsText {
      padding: 0 30px 0 10px;
      font-size: 14px;
      line-heoght: 20px;
      color: #4b4b4b;
      font-weight: 700px;
      display: none;

      @media (max-width: 767px) {
        padding: 0 10px;
      }
    }

    .iconShare {
      border: 1px solid #e6eaf5;

      svg {
        width: 20px;
        height: 22px;

        path {
          stroke: rgba(0, 0, 0, 0.35);
        }
      }

      transition: all 0.25s ease-in-out;

      &:hover {
        background: lightgray;
      }
    }
  }

  .like-actions {
    display: flex;

    @media (max-width: 767px) {
      margin-top: -8px;
    }

    span:not(:last-child) {
      margin-right: 25px;

      @media (max-width: 767px) {
        margin-right: 10px;
      }
    }

    .iconLike {
      border-color: #c2ffe6;
      transition: all 0.25s ease-in-out;
      display: none;

      &:hover {
        background: #c2ffe6;
      }
    }

    .iconDislike {
      border-color: #ffc4c6;
      transition: all 0.25s ease-in-out;
      display: none;

      &:hover {
        background: #ffc4c6;
      }
    }

    .recipeButton {
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 15px;
      color: rgba(75, 75, 75, 0.55);
      padding: 5px 20px;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      font-weight: 400;
      transition: all 0.4s ease;

      &:hover {
        border-color: #e0464d;
      }
    }
  }
`
