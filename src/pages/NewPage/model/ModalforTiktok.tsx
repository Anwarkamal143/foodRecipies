import { Modal, VideoPlayer } from "@components"
import { AngleRight, LeftSliderArrow, RightSliderArrow } from "@icons"
import classNames from "classnames"
import React, { useRef } from "react"
import NoSSR from "react-no-ssr"
import Slider from "react-slick"
import styled from "styled-components"

interface props extends ReactModal.Props {
  className?: string
  items?: any
  isModalOpen?: boolean
  onClose?: ReactModal.Props["onRequestClose"]
  currentSlideIndex?: number
}
const settings = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <RightSliderArrow />,
  prevArrow: <LeftSliderArrow />,
}
const ModalforTiktok = ({
  className,
  items,
  isModalOpen = false,
  isOpen,
  currentSlideIndex,
  onClose,
  ...rest
}: props) => {
  const ref = useRef<any>()
  const activeData = () => {
    return items?.map((item: any) => {
      return (
        <>
          <VideoPlayer url={item?.url} className={`video_`} />
          <div className="userTextbox">
            <strong className="title">
              GoPro HERO 10 Black: The Million Dollar Challenge
            </strong>
            <div className="userHolder">
              <div className="userInfo">
                <div className="profileImage">
                  <img src={item?.profile} alt="video" />
                </div>
                <div className="textbox">
                  <span className="uesername"><a href="#">{item?.userName} <AngleRight /></a></span>
                  <span className="postby">{item?.postby}</span>
                </div>
              </div>
              <div className="subscribeButton">
                <a href="#" className="btnSubscribe">
                  Follow
                </a>
              </div>
            </div>
          </div>
        </>
      )
    })
  }
  return (
    <NoSSR>
      {isOpen && (
        <Modal
          showHeader={false}
          showFooter={false}
          isOpen={isOpen}
          onRequestClose={onClose}
          className={classNames(
            "react-swipper-gallary-modal-content",
            className
          )}
          overlayClassName={classNames(
            "react-swipper-gallary-modal-overlay",
            className
          )}
          {...rest}
        >
          <span className="modalCloseButton" onClick={onClose}>
            X
          </span>
          <Slider draggable={true} ref={ref} {...settings}>
            {activeData()}
          </Slider>
        </Modal>
      )}
    </NoSSR>
  )
}

export default styled(ModalforTiktok)`
  max-width: 600px;

  .modalCloseButton {
    position: absolute;
    right: -5px;
    top: -15px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: all 0.4s ease;

    @media (max-width: 1023px) {
      right: 17px;
    }

    @media (max-width: 767px) {
      width: 32px;
      height: 32px;
      right: -10px;
    }

    &:after {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
    }

    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    }
  }

  .modal-content {
    padding: 0;
    margin: 0;
    background: none;
    padding: 20px 100px;
    border: 0;
    border-radius: 0;

    @media (max-width: 1023px) {
      padding: 20px 80px;
    }

    @media (max-width: 767px) {
      padding: 20px 40px;
    }
  }

  .slick-slider {
    background: #fff;
    width: 378px;
    margin: 0 auto;
    border-radius: 30px;
    padding: 24px;
    position: static;

    @media (max-width: 1023px) {
      width: 378px;
    }

    @media (max-width: 767px) {
      width: 100%;
      padding: 15px;
      border-radius: 15px;
    }

    .slick-arrow {
      color: #707070;

      @media (min-width: 768px) {
        width: 60px;
        height: 60px;
        padding: 23px;
      }

      &.slick-prev {
        left: -40px;

        @media (min-width: 768px) {
          left: -72px;
        }

        @media (min-width: 1024px) {
          left: -70px;
        }
      }

      &.slick-next {
        right: -40px;

        @media (min-width: 768px) {
          right: -72px;
        }

        @media (min-width: 1024px) {
          right: -70px;
        }
      }

      &:hover {
        color: #fff;
      }
    }
  }

  video,
  iframe {
    border: 0;
    width: 100%;
    height: 100%;
    min-height: 450px;

    @media (max-width: 767px) {
      min-height: 350px;
    }
  }

  .userTextbox {
    overflow: hidden;
    padding: 20px 0 0;

    @media (max-width: 767px) {
      padding: 20px 0 0;
    }

    .title {
      display: block;
      color: #fff;
      font-size: 15px;
      line-height: 1.25;
      color: #1e1e2d;
      margin: 0 0 20px;
      cursor: pointer;
      transition: all 0.25s ease-in-out;

      @media (max-width: 767px) {
        font-size: 15px;
        margin: 0 0 20px;
      }

      &:hover {
        color: #e0464d;
      }
    }
  }

  .userHolder {
    display: flex;
    align-items: center;
  }

  .userInfo {
    display: flex;
    align-items: center;
    border-right: 1px solid #d7dae3;
    padding-right: 20px;
    margin-right: 20px;

    @media (max-width: 767px) {
      padding-right: 10px;
      margin-right: 10px;
    }

    .profileImage {
      width: 34px;
      min-width: 34px;
      height: 34px;
      border-radius: 10px;
      margin: 0 10px 0 0;

      @media (max-width: 767px) {
        width: 34px;
        height: 34px;
        min-width: 34px;
        margin: 0 10px 0 0;
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 10px;
        object-fit: cover;
        object-position: center;
      }
    }

    .uesername {
      display: block;
      font-size: 12px;
      line-height: 1.25;
      color: #1e1e2d;
      margin: 0 0 4px;

      @media (max-width: 767px) {
        font-size: 12px;
      }

      a {
        display: inline-block;
        position: relative;
        transition: all 0.25s ease-in-out;
        padding-right: 18px;

        svg {
          fill: #e0464d;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease-in-out;
          position: absolute;
          right: 10px;
          top: 52%;
          transform: translateY(-49%);
          margin: 0;
          width: 14px;
          height: auto;
          transition: all 0.25s ease-in-out;
        }

        &:hover {
          color: #e0464d;

          svg {
            opacity: 1;
            visibility: visible;
            right: 0;
          }
        }
      }
    }

    .postby {
      display: block;
      font-size: 9px;
      line-height: 1.25;
      color: #8d8d8d;

      @media (max-width: 767px) {
        font-size: 8px;
      }
    }
  }

  .btnSubscribe {
    height: 30px;
    background: #000;
    border-radius: 5px;
    color: #fff;
    font-size: 11px;
    line-height: 20px;
    padding: 5px 30px;
    transition: all 0.4s ease-in-out;

    @media (max-width: 767px) {
      font-size: 11px;
      height: 26px;
      padding: 5px 10px;
    }

    &:hover {
      background: #e02e36;
    }
  }
`
