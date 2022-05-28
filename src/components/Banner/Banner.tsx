import classNames from "classnames"
import { ReactElement, ReactNode } from "react"
import styled from "styled-components"
import { BannerWrapper } from "./Banner.styled"

interface Props {
  className?: string
  title?: string | ReactNode | ReactElement
  subTitle?: string | ReactNode | ReactElement
  lottieAnimation?: ReactNode
}
const BannerCard = ({ className, title, subTitle, lottieAnimation }: Props) => {
  return (
    <BannerWrapper className={classNames(className)}>
      <div className="banner-area">
        <div className="banner-frame">
          <div className="text-holder">
            <h1>{title}</h1>
            <p>{subTitle}</p>
          </div>
          <div className="image-holder">{lottieAnimation}</div>
        </div>
      </div>
    </BannerWrapper>
  )
}

export const Banner = styled(BannerCard)`
  .banner-area {
    margin: 20px 2rem 0;
    padding: 0 0 35px;
    position: relative;

    @media (max-width: 1279px) {
      margin: 20px 0 0;
    }

    @media (max-width: 767px) {
      padding: 0 0 20px;
    }

    &:after {
      background: #d7d7d7;
      bottom: 0;
      left: 1.5rem;
      right: 1.5rem;
      height: 1px;
      content: "";
      position: absolute;

      @media (max-width: 1279px) {
        left: 10px;
        right: 10px;
      }

      @media (max-width: 767px) {
        display: none;
      }
    }
  }

  .banner-frame {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: #2d4558;
    color: rgba(255, 255, 255, 0.7);
    padding: 15px 9% 0 4%;
    font-size: 13px;
    line-height: 20px;
    border-radius: 20px;
    border: 1px solid #f2f3f5;

    @media (max-width: 1279px) {
      padding: 15px 5% 0;
    }

    @media (max-width: 767px) {
      padding: 0 24px;
      font-size: 9px;
      line-height: 12px;
      align-items: flex-end;
      border-radius: 10px;
    }

    h1 {
      font-size: 25px;
      line-height: 38px;
      margin: 0 0 5px;
      font-weight: 500;
      color: #fff;

      @media (max-width: 767px) {
        font-size: 15px;
        line-height: 24px;
      }
    }

    .text-holder {
      width: calc(100% - 200px);
      padding: 0 0 30px;

      @media (max-width: 767px) {
        width: calc(100% - 90px);
        padding: 20px 0;
      }
    }

    .image-holder {
      width: 135px;

      @media (max-width: 767px) {
        width: 80px;
      }

      img {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }
`
