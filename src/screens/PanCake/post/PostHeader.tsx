import { Icon, Image } from "@components"
import { FacebookIcon, InstagramIcon, LinkIcon, TwitterIcon, YoutubeIcon } from "@icons"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import styled from "styled-components"
import { IPostType } from "./Posts"
dayjs.extend(relativeTime)
type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void

  post: IPostType
}
function PostHeader(props: IMyFeedProps) {
  const { className, onSubmit, post } = props
  const { creator, person, createdAt } = post

  return (
    <div className={`${className} ingredientsCookHeader`}>
      <div className="person-details">
        <Image
          className="post-headerimg userProfileImage"
          src={creator.profileImage}
        />
        <div className="userProfileDetails">
          <p className="userProfileName">
            <strong>{creator.name}</strong>
          </p>
          <span className="userProfileTime">
            {dayjs(createdAt).subtract(12, "hours").fromNow()}
          </span>
        </div>
      </div>
      <div className="ingredientsCookHeaderRight">
        <span className="copyLinkButton">
          <span className="icon"><LinkIcon/></span>
          Copy Recipe Link
        </span>
        <div className="socialIcons">
          <Icon className="socialIconsItem facebook">
            <FacebookIcon />
          </Icon>
          <Icon className="socialIconsItem youtube">
            <YoutubeIcon />
          </Icon>
          <Icon className="socialIconsItem twitter">
            <TwitterIcon />
          </Icon>
          <Icon className="socialIconsItem instagram">
            <InstagramIcon />
          </Icon>
        </div>
      </div>
    </div>
  )
}
export default styled(PostHeader)`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  margin: 0 0 15px;

  @media (max-width: 767px) {
    flex-flow row wrap;
  }

  .person-details {
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
      width: 100%;
      margin: 0 0 20px;
    }
  }

  .post-headerimg {
    height: 3em;
  }

  .ingredientsCookHeaderRight {
    display: flex;
    align-items: center;
    
    .copyLinkButton {
      display: none;
      font-size: 12px;
      line-height: 18px;
      color: #7B7B82;
      align-items: center;
      margin: 0 20px 0 0;
      cursor: pointer;

      .icon {
        width: 32px;
        height: 32px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin: 0 10px 0 0;
      }
    }
  }

  .socialIcons {
    display: flex;

    @media (max-width: 767px) {
      width: 100%;
    }

    .socialIconsItem {
      transition: all 0.25s ease-in-out;

      svg {
        transition: all 0.25s ease-in-out;
      }

      &:hover {
        background: #e0464d;
        border-color: #e0464d;

        svg {
          path {
            fill: #fff;
          }
        }
      }

      &.facebook {
        &:hover {
          background: #3b5998;
          border-color: #3b5998;
        }
      }

      &.youtube {
        &:hover {
          background: #f00;
          border-color: #f00;
        }
      }

      &.twitter {
        &:hover {
          background: #1da1f2;
          border-color: #1da1f2;
        }
      }

      &.instagram {
        &:hover {
          background: #C13584;
          border-color: #C13584;
        }
      }
    }
  }

  .userProfileImageWrap {
    position: relative;
    width: 48px;
    min-width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 12px;
  }

  .userProfileImage {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }

  .userProfileDetails {
    overflow: hidden;
    padding: 0 35px 0 20px;

    @media (max-width: 767px) {
      padding: 0 10px;
    }
  }

  .userProfileName {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: #4b4b4b;
    margin: 0 0 2px;
  }

  .userProfileTime {
    font-size: 12px;
    line-height: 20px;
    color: #7b7b7b;
    display: block;
  }

  .button.button-sm.buttonFollow {
    background: #e0464d;
    border-color: #e0464d;
    border-radius: 15px;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
    min-width: 64px;
    min-height: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 10px;
    position: relative;
    transition: all 0.4s ease;

    @media (max-width: 767px) {
      margin-left: auto;
    }

    &.unfollow {
      background: #999;
      border-color: #999;
    }

    &.follow {
      &:hover {
        padding-right: 30px;

        .plus-btn {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    &:hover {
      background: #f93e46;
      border-color: #f93e46;
    }

    .plus-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
      width: 12px;
      height: 12px;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;

      &:after,
      &:before {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: #fff;
        content: '';
        top: 50%;
        margin: -1px 0 0;
      }

      &:after {
        transform: rotate(90deg);
      }
    }
  }
`
