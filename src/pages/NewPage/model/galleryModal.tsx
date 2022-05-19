import { Modal, VideoPlayer } from "@components"
import { AngleRight, LeftSliderArrow, PlayIcon, RightSliderArrow } from "@icons"
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
                <div className="subscribeButton">
                  <a href="#" className="btnSubscribe">
                    Subscribe <PlayIcon/>
                  </a>
                </div>
              </div>
              <a href="#" className="btnViewRecipe">
                  View <span>This</span> Recipe <AngleRight /> 
                </a>
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

export default styled(MobileSwiperModal)`
  max-width: 1040px;

  @media (max-width: 1023px) {
    max-width: 768px;
  }

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
      right: -5px;
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
    width: 804px;
    margin: 0 auto;
    border-radius: 30px;
    padding: 40px;
    position: static;

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
      color: #1e1e2d;
      margin: 0 0 30px;
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

    .textbox {
      padding-right: 25px;

      @media (max-width: 767px) {
        padding-right: 0;
      }
    }

    .uesername {
      display: block;
      font-size: 16px;
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

        svg {
          fill: #e0464d;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease-in-out;
          position: absolute;
          right: -5px;
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
            right: -15px;

            @media (max-width: 767px) {
              right: -10px;
            }
          }
        }
      }
    }

    .postby {
      display: block;
      font-size: 10px;
      line-height: 1.25;
      color: #8d8d8d;

      @media (max-width: 767px) {
        font-size: 8px;
      }
    }
  }

  .btnSubscribe {
    height: 28px;
    min-width: 120px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #e0464d;
    border-radius: 4px;
    color: #fff;
    font-size: 13px;
    line-height: 20px;
    padding: 4px 10px;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 2px 5px rgba(0,0,0,0.33);

    @media (max-width: 767px) {
      font-size: 11px;
      height: 26px;
      padding: 5px 10px;
      display: none;
    }

    svg {
      width: 10px;
      height: 10px;
      margin: 0 0 0 7px;
    }

    &:hover {
      background: #e02e36;
    }
  }

  .btnViewRecipe {
    height: 28px;
    min-width: 106px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 5px;
    color: #7B7B82;
    font-size: 12px;
    line-height: 20px;
    padding: 4px 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.13);
    transition: all 0.4s ease-in-out;

    @media (max-width: 767px) {
      font-size: 11px;
      min-width: 94px;
      height: 26px;
      padding: 5px 10px;
    }

    svg {
      width: 11px;
      height: 11px;
      margin: 0 -5px 0 5px;
    }

    span {
      @media (max-width: 767px) {
        display: none;
      }
    }

    &:hover {
      color: #fff;
      background: #000;
    }
  }
`
