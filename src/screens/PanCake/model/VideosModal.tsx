import { Button, Modal, VideoPlayer } from "@components"
import { AngleRight } from "@icons"
import classNames from "classnames"
import React, { useMemo, useState } from "react"
import NoSSR from "react-no-ssr"
import styled from "styled-components"
interface props extends ReactModal.Props {
  className?: string
  items?: any
  isModalOpen?: boolean
  onClose?: ReactModal.Props["onRequestClose"]
  currentSlideIndex?: number
}

const VideosModal = ({
  className,
  items,
  isModalOpen = false,
  isOpen,
  currentSlideIndex,
  onClose,
  ...rest
}: props) => {
  const [currentStep, setCurrentStep] = useState("YouTube")
  const Components = useMemo(() => {
    switch (currentStep) {
      case "YouTube":
        return {
          video: (
            <div className={`${currentStep}-video-ctn`}>
              <VideoPlayer
                url={"https://www.youtube.com/watch?v=yJ05d3bXPnI"}
                className={`video_`}
              />
            </div>
          ),
        }
      case "Tiktok":
        return {
          video: (
            <div className={`${currentStep}-video-ctn`}>
              <VideoPlayer
                url={"https://www.youtube.com/watch?v=yJ05d3bXPnI"}
                className={`video_`}
              />
            </div>
          ),
        }
      case "Instagram":
        return {
          video: (
            <div className={`${currentStep}-video-ctn`}>
              <VideoPlayer
                url={"https://www.youtube.com/watch?v=yJ05d3bXPnI"}
                className={`video_`}
              />
            </div>
          ),
        }
      default:
        return
    }
  }, [currentStep as any])
  return (
    <NoSSR>
      {isOpen && (
        <Modal
          showHeader={false}
          title="Modal for Tiktok"
          showFooter={false}
          isOpen={isOpen}
          onRequestClose={onClose}
          className={classNames("Watch Video Tutorial", className)}
          overlayClassName={classNames(
            "react-swipper-gallary-modal-overlay",
            className
          )}
          {...rest}
        >
          <span className="modalCloseButton" onClick={onClose}>
            X
          </span>
          <div className="profileImage">
            <img src={"/images/bbq.jpg"} alt="video" />
            The Million Dollar Challenge
          </div>
          <hr />
          <div className="tabs">
            <Button
              onClick={() => setCurrentStep("YouTube")}
              className={`${currentStep === "YouTube" && "active"}`}
            >
              Watch YouTube Video
            </Button>
            <Button
              onClick={() => setCurrentStep("Tiktok")}
              className={`${currentStep === "Tiktok" && "active"}`}
            >
              Tiktok YouTube Video
            </Button>
            <Button
              onClick={() => setCurrentStep("Instagram")}
              className={`${currentStep === "Instagram" && "active"}`}
            >
              Watch Instagram Video
            </Button>
          </div>
          {Components?.video}
          <strong className="title">
            GoPro HERO 10 Black: The Million Dollar Challenge
          </strong>
          <div className="userHolder">
            <div className="userInfo">
              <div className="profileImage">
                <img src={"/images/bbq.jpg"} alt="video" />
              </div>
              <div className="textbox">
                <span className="uesername">
                  <a href="#">
                    Nick Digiovanni <AngleRight />
                  </a>
                </span>
                <span className="postby">{"245  Posts"}</span>
              </div>
            </div>
            <div className="subscribeButton">
              <a href="#" className="btnSubscribe">
                Follow
              </a>
            </div>
          </div>
        </Modal>
      )}
    </NoSSR>
  )
}

export default styled(VideosModal)`
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
      content: "";
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
