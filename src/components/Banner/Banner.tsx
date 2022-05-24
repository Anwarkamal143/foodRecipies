import classNames from "classnames"
import { ReactNode } from "react"
import styled from "styled-components"
import { BannerWrapper } from "./Banner.styled"

interface Props {
  className?: string
  title?: string
  subTitle?: string
  lottieAnimation?: ReactNode
}
const BannerCard = ({ className, title, subTitle, lottieAnimation }: Props) => {
  return (
    <BannerWrapper className={classNames(className)}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="banner-area">
          <div className="banner-frame">
            <div className="text-holder">
              <h1>{title}</h1>
              <p>{subTitle}</p>
            </div>
            <div className="image-holder">{lottieAnimation}</div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  )
}

export const Banner = styled(BannerCard)`
  .banner-area {
    padding: 0 2rem;
  }

  .banner-frame {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: #2d4558;
    color: #fff;
    padding: 15px 8% 0 4%;
    font-size: 13px;
    line-height: 20px;
    border-radius: 20px;

    h1 {
      font-size: 25px;
      line-height: 38px;
      margin: 0 0 5px;
      font-weight: 500;
    }

    .text-holder {
      width: calc(100% - 200px);
      padding: 0 0 15px;
    }

    .image-holder {
      width: 128px;
    }
  }
`
