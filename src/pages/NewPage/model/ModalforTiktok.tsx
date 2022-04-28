import { Modal, VideoPlayer } from "@components"
import { LeftSliderArrow, RightSliderArrow } from "@icons"
import classNames from "classnames"
import React, { useRef } from "react"
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
                  <span className="uesername">{item?.userName}</span>
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
    <React.Fragment>
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
          <span className="modalCloseButton" onClick={onClose}>X</span>
          <Slider draggable={true} ref={ref} {...settings}>
            {activeData()}
          </Slider>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default styled(ModalforTiktok)`
  max-width: 600px;

  .modalCloseButton {
    position: absolute;
    right: 0;
    top: -10px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    z-index: 1;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.05);
    cursor: pointer;

    @media (max-width: 1023px) {
      right: 17px;
    }

    @media (max-width: 767px) {
      width: 32px;
      height: 32px;
      right: -10px;
    }
  }

  .modal-content {
    padding: 0;
    margin: 0;
    background: none;
    padding: 20px 100px;

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
          left: -90px;
        }
      }

      &.slick-next {
        right: -40px;

        @media (min-width: 768px) {
          right: -72px;
        }

        @media (min-width: 1024px) {
          right: -90px;
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

      @media (max-width: 767px) {
        font-size: 15px;
        margin: 0 0 20px;
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