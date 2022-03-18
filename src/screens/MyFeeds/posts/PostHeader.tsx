import { Button, Icon, Image } from "@components"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@icons"
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
  onSocialItemClick?: (...args: any[]) => void
  post: IPostType
}
function PostHeader(props: IMyFeedProps) {
  const { className, onSubmit, post, onSocialItemClick } = props
  const { person, createdAt } = post
  return (
    <div className={className}>
      <div className="person-details">
        <Image
          className="post-headerimg userProfileImage"
          src={person.profileImage}
        />
        <div className="userProfileDetails">
          <p className="userProfileName">
            <strong>{person.name}</strong>
          </p>
          <span className="userProfileTime">
            {dayjs(createdAt).subtract(12, "hours").fromNow()}
          </span>
        </div>
        <Button
          className="buttonFollow"
          shape="circle"
          size="small"
          onClick={() => {
            const newPost = {
              ...post,
              person: { ...person, followed: !person.followed },
            }
            onSubmit?.(newPost)
          }}
        >
          {person.followed ? "Unfollow" : "Follow"}
        </Button>
      </div>
      <div className="socialIcons">
        <Icon className="socialIconsItem" onClick={onSocialItemClick}>
          <FacebookIcon />
        </Icon>
        <Icon className="socialIconsItem" onClick={onSocialItemClick}>
          <YoutubeIcon />
        </Icon>
        <Icon className="socialIconsItem" onClick={onSocialItemClick}>
          <TwitterIcon />
        </Icon>
        <Icon className="socialIconsItem" onClick={onSocialItemClick}>
          <InstagramIcon />
        </Icon>
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

  .person-details {
    display: flex;
    align-items: center;
  }
  .post-headerimg {
    height: 3em;
  }

  .socialIcons {
    display: flex;

    .socialIconsItem {
      &:hover {
        background: #e0464d;
        border-color: #e0464d;

        svg {
          path {
            fill: #fff;
          }
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
  }

  .userProfileName {
    display: block;
    font-size: 14px;
    line-height: 18px;
    color: #1e1e2d;
    margin: 0 0 2px;
  }

  .userProfileTime {
    font-size: 12px;
    line-height: 20px;
    color: #7474a9;
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
    mn-height: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 10px;

    &:hover {
      background: #f93e46;
      border-color: #f93e46;
    }
  }
`
