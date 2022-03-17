import { Icon, Image, Scrollbar } from "@components"
import { HeartIcon } from "@icons"
import styled from "styled-components"

type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
}
const images = [
  "/images/mock/post1.png",
  "/images/mock/post2.png",
  "/images/mock/post3.png",
  "/images/mock/post1.png",
  "/images/mock/post2.png",
]
type ImagesProps = {
  images: string[]
  className?: string
}
const ImagesSlider = (props: ImagesProps) => {
  const { images, className } = props
  return (
    <div className={className}>
      <div className="main-img">
        <Image className="postbody-img" src={images[0]} alt={images[0]} />
        <Icon className="heartIcon">
          <HeartIcon />
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
  .main-img {
    position: relative;
    width: 80%;
    padding: 0 1em 0 0;
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
    .image-comp {
      width: 100%;
    }
  }
`

function PostBody(props: IMyFeedProps) {
  const { className, onSubmit } = props

  return (
    <div className={className}>
      <p className="post-text">
        Credibly reinvent resource maximizing systems vis-a-vis value-added
        customer service. Authoritatively seize turnkey platforms without 24/365
        services. Enthusiastically fashion cross functional metrics via vertical
        ideas. Uniquely leverage existing enabled e-business whereas
        bleeding-edge content. Seamlessly incentivize optimal markets through
        scalable leadership.
      </p>

      {images?.length > 1 ? (
        <ImgSlides images={images} />
      ) : (
        <Image key={images[0]} src={images[0]} alt={images[0]} />
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
