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
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 479,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
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
          <div className="user">
            <div className="profile">
              <img src={item?.profile} alt="video" />
            </div>
            <span className="uesername">{item?.userName}</span>
            <span className="postby">{item?.postby}</span>
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

export default styled(MobileSwiperModal)``
