import { Button, Icon, Image } from "@Components"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@Icons"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import styled from "styled-components"

dayjs.extend(relativeTime)
type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
}
function PostHeader(props: IMyFeedProps) {
  const { className, onSubmit } = props

  return (
    <div className={className}>
      <div className="person-details">
        <Image
          className="post-headerimg"
          src="/images/mock/slider1profile.png"
        />
        <div>
          <p>
            <strong>Amanda Miles</strong>
          </p>
          <span>{dayjs().subtract(12, "hours").fromNow()}</span>
        </div>
        <Button shape="circle" size="small">
          Follow
        </Button>
      </div>
      <div className="socialIcons">
        <Icon>
          <FacebookIcon />
        </Icon>
        <Icon>
          <YoutubeIcon />
        </Icon>
        <Icon>
          <TwitterIcon />
        </Icon>
        <Icon>
          <InstagramIcon />
        </Icon>
      </div>
    </div>
  )
}
export default styled(PostHeader)`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  .person-details {
    display: flex;
  }
  .post-headerimg {
    height: 3em;
  }
  .socialIcons {
    display: flex;
  }
`
