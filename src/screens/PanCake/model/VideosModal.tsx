import { Button, Modal, VideoPlayer } from "@components"
import { AngleRight, CrossIcon } from "@icons"
import classNames from "classnames"
import React, { forwardRef, useMemo, useState } from "react"
import NoSSR from "react-no-ssr"
import styled from "styled-components"
interface props extends ReactModal.Props {
  className?: string
  items?: any
  isModalOpen?: boolean
  showHeader?: boolean
  onClose?: ReactModal.Props["onRequestClose"]
  currentSlideIndex?: number
}

const VideosModal = forwardRef(
  (
    {
      className,
      items,
      isModalOpen = false,
      showHeader = true,
      isOpen,
      currentSlideIndex,
      onClose,
      ...rest
    }: props,
    ref
  ) => {
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
            title="Watch Video Tutorial"
            showFooter={false}
            isOpen={isOpen}
            onRequestClose={onClose}
            className={classNames("videosTutorialModal")}
            overlayClassName={classNames(
              "react-swipper-gallary-modal-overlay",
              className
            )}
            {...rest}
          >
            <div ref={ref as any}>
              {showHeader && (
                <React.Fragment>
                  <div className="modal-header">
                    <strong className="modal-title">
                      Watch Video Tutorial
                    </strong>
                    <span className="modalCloseButton" onClick={onClose}>
                      <CrossIcon />
                    </span>
                  </div>
                  <div className="profileInfo modal-profile">
                    <img src={"/images/ingredientsImage.png"} alt="video" />
                    The Million Dollar Challenge
                  </div>
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
                </React.Fragment>
              )}
              {Components?.video}
              <div className="userTextbox">
                <strong className="title">
                  GoPro HERO 10 Black: The Million Dollar Challenge
                </strong>
                <div className="userHolder">
                  <div className="userInfo">
                    <div className="profileImage">
                      <img src={"/images/image-cook.png"} alt="video" />
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
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </NoSSR>
    )
  }
)

export default styled(VideosModal)``
