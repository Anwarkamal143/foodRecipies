import { Icon } from "@Components"
import { DisLikeIcon, ExportIcon, HeartIcon, LikeIcon } from "@Icons"
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

        <span>28.5k Like</span>
        <Icon>
          <ExportIcon />
        </Icon>
      </div>
      <div className="like-actions">
        <Icon>
          <LikeIcon />
        </Icon>
        <Icon>
          <DisLikeIcon />
        </Icon>
      </div>
    </div>
  )
}
export default styled(PostFooter)`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .likeDetails {
    display: flex;
    align-items: center;
    span {
      margin: 0 1em;
      margin-right: 2em;
    }
  }
  .like-actions {
    display: flex;
    span:not(:last-child) {
      margin-right: 2em;
    }
  }
`
