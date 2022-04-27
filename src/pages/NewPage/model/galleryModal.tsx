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
const MobileSwiperModal = ({
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
            <strong className="title">GoPro HERO 10 Black: The Million Dollar Challenge</strong>
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
                <a href="#" className="btnSubscribe">Subscribe</a>
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
          <Slider draggable={true} ref={ref} {...settings}>
            {activeData()}
          </Slider>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default styled(MobileSwiperModal)`
  max-width: 1040px;

  .modal-content {
    padding: 0;
    margin: 0;
    background: none;
    padding: 0 100px;

    @media (max-width: 1023px) {
      padding: 0 80px;
    }

    @media (max-width: 767px) {
      padding: 0 40px;
    }
  }

  .slick-slider {
    background: #fff;
    width: 804px;
    margin: 0 auto;
    border-radius: 30px;
    padding: 40px;

    @media (max-width: 1023px) {
      width: 600px;
      padding: 25px;
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
  }

  .userTextbox {
    overflow: hidden;
    padding: 35px 0 0;

    @media (max-width: 767px) {
      padding: 20px 0 0;
    }

    .title {
      display: block;
      color: #fff;
      font-size: 19px;
      line-height: 1.25;
      color: #1E1E2D;
      margin: 0 0 30px;

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
    border-right: 1px solid #D7DAE3;
    padding-right: 20px;
    margin-right: 20px;

    @media (max-width: 767px) {
      padding-right: 10px;
      margin-right: 10px;
    }

    .profileImage {
      width: 44px;
      min-width: 44px;
      height: 44px;
      border-radius: 10px;
      margin: 0 20px 0 0;

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
      font-size: 16px;
      line-height: 1.25;
      color: #1E1E2D;
      margin: 0 0 4px;

      @media (max-width: 767px) {
        font-size: 12px;
      }
    }

    .postby {
      display: block;
      font-size: 10px;
      line-height: 1.25;
      color: #8D8D8D;

      @media (max-width: 767px) {
        font-size: 8px;
      }
    }
  }

  .btnSubscribe {
    height: 34px;
    background: #E0464D;
    border-radius: 5px;
    color: #fff;
    font-size: 13px;
    line-height: 20px;
    padding: 7px 30px;
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
