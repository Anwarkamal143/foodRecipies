import { Icon } from "@components"
import { DisLikeIcon, ExportIcon, HeartIcon, LikeIcon } from "@icons"
import styled from "styled-components"

type IPostFooterProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
}

function PostFooter(props: IPostFooterProps) {
  const { className, onSubmit } = props

  return (
    <div className={className}>
      <div className="likeDetails">
        <HeartIcon fill="red" stroke="red" />

        <span className="likeDetailsText">28.5k Like</span>
        <Icon className="iconSize">
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
  }
  
  .like-actions {
    display: flex;
    
    span:not(:last-child) {
      margin-right: 25px;
    }

    .iconLike {
      border-color: #c2ffe6;
    }

    .iconDislike {
      border-color: #ffc4c6;
    }
  }
`
