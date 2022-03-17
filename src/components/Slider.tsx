import { useAppDispatch, useAppSelector } from "@hooks"
import { LeftSliderArrow, RightSliderArrow } from "@icons"
import { setSliderAttachments, toggleSlider } from "@reducers"
import attrAccept from "attr-accept"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
// import "slick-carousel/slick/slick-theme.css"
// import "slick-carousel/slick/slick.css"
import styled from "styled-components"
import { Image, Modal, VideoPlayer } from "."

interface Props {
  className?: string
}

const AttachmentsPreviewModel: React.FC<Props> = props => {
  const { className } = props
  const dispatch = useAppDispatch()
  const [activeSlide, setActiveSlide] = useState(0)
  const {
    isOpen,
    attachments: { items = [], active = null },
  } = useAppSelector(state => state?.slider)

  useEffect(() => {
    const index = items.findIndex(f => f.path === active?.path)
    if (index !== -1) {
      setActiveSlide(index)
    } else {
      setActiveSlide(0)
    }
    return () => {}
  }, [active])

  const settingsMain = {
    slidesToShow: 3,
    slidesToScroll: 3,
    fade: true,
    // variableWidth: true,
    // dots: true,
    // asNavFor: ".slider-nav",
    centerMode: true,
    infinite: true,
    className: "center",
    centerPadding: "60px",
    // adaptiveHeight: true,
    nextArrow: <RightSliderArrow />,
    prevArrow: <LeftSliderArrow />,
  }

  const renderAttachments = () => {
    return items?.map((file: any, index) => {
      if (attrAccept(file, "video/*")) {
        return (
          <div
            className={`slider_item video ${
              activeSlide === index ? " active_video" : ""
            }`}
            key={file.path || file?.url}
          >
            <VideoPlayer
              playing={activeSlide === index}
              controls={activeSlide === index}
              url={file?.path || file?.url}
              config={{ file: { attributes: { poster: file?.thumbnail } } }}
            />
            {/* <video
              width="100%"
              height="100%"
              controls

              onPlay={(e) => console.log('playing')}
            >
              <source src={file.path} />
            </video> */}
          </div>
        )
      } else if (attrAccept(file, "image/*")) {
        return (
          <div className="slider_item image" key={file?.path || file?.url}>
            {/* <ImgX src={`${file?.path || file?.url}`} width={"100%"} />; */}
            <Image
              src={`${file?.path || file?.url}`}
              alt="alt"
              key={file?.path || file?.url}
            />
          </div>
        )
      }

      // else {
      //   return (
      //     <div className="ctn">
      //       <span className="mp3_icon">
      //         <img
      //           className="mp3-placeholder"
      //           src="/assets/images/mp3-icon.png"
      //           key={file?.path}
      //         />
      //       </span>
      //       <div className="slider_item audio" key={file?.path || file?.url}>
      //         <AudioPlay src={file?.url || file?.path} />
      //       </div>
      //     </div>
      //   )
      // }
    })
  }
  const handleClose = () => {
    dispatch(toggleSlider(false))
    dispatch(setSliderAttachments({ items: [], active: null }))
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      showFooter={false}
      className={`${className}`}
    >
      <div className="slider_container">
        {/* <Slider {...settings}>{renderAttachments()}</Slider> */}
        <Slider
          {...settingsMain}
          // className="my own class"
          dotsClass="dosts class"
          initialSlide={activeSlide}
          draggable
          beforeChange={() => {
            try {
              const item = document
                .querySelector(".slick-active .slider_item.audio")
                ?.getElementsByTagName("audio")[0]

              item?.pause()
            } catch (error) {}
          }}
          afterChange={crslide => setActiveSlide(crslide)}
        >
          {renderAttachments()}
        </Slider>
      </div>
    </Modal>
  )
}

export const PreviewSlider = styled(AttachmentsPreviewModel)`
  .slick-slide {
    /* width: 300px !important; */
  }
`
