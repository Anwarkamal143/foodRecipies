import { useAppDispatch, useAppSelector } from "@hooks"
import { LeftSliderArrow, RightSliderArrow } from "@icons"
import { setSliderAttachments, toggleSlider } from "@reducers"
import React, { useEffect, useRef, useState } from "react"
import Stories from "react-insta-stories"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styled from "styled-components"
import { Modal } from "."
import { Image } from "./Image"

interface Props {
  className?: string
}

const AttachmentsPreviewModel: React.FC<Props> = props => {
  const { className } = props
  const dispatch = useAppDispatch()
  const [activeSlide, setActiveSlide] = useState(0)
  const [endStories, setEndStories] = useState(false)
  const sliderRef = useRef(null)

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
    // slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    // variableWidth: true,
    // dots: true,
    // asNavFor: ".slider-nav",
    centerMode: true,
    variableWidth: true,
    infinite: false,
    className: "center",
    centerPadding: "60px",
    // adaptiveHeight: true,
    nextArrow: <RightSliderArrow />,
    prevArrow: <LeftSliderArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          variableWidth: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],

    ...props,
  }

  const renderAttachments = () => {
    return items?.map((file: any, index) => {
      console.log({ file })
      console.log(index !== activeSlide)
      if (activeSlide !== index) {
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
      return (
        <>
          <Stories
            key={file.path}
            stories={file?.stories}
            isPaused={index !== activeSlide}
            keyboardNavigation
            defaultInterval={3000}
            height={508}
            onAllStoriesEnd={() => {
              console.log({ index })
              if (activeSlide < items?.length - 1) {
                sliderRef.current.slickNext()
                setActiveSlide(activeSlide + 1)
                // console.log((sliderRef.current as any).slickNext())
                // nextRef?.current?.click()
              } else {
                handleClose()
              }
            }}
          />
        </>
      )
      // if (attrAccept(file, "video/*")) {
      //   return (
      //     <div
      //       className={`slider_item video ${
      //         activeSlide === index ? " active_video" : ""
      //       }`}
      //       key={file.path || file?.url}
      //     >
      //       <VideoPlayer
      //         playing={activeSlide === index}
      //         controls={activeSlide === index}
      //         url={file?.path || file?.url}
      //         config={{ file: { attributes: { poster: file?.thumbnail } } }}
      //       />
      //       {/* <video
      //         width="100%"
      //         height="100%"
      //         controls
      //         onPlay={(e) => console.log('playing')}
      //       >
      //         <source src={file.path} />
      //       </video> */}
      //     </div>
      //   )
      // } else if (attrAccept(file, "image/*")) {
      //   return (
      //     <div className="slider_item image" key={file?.path || file?.url}>
      //       {/* <ImgX src={`${file?.path || file?.url}`} width={"100%"} />; */}
      //       <Image
      //         src={`${file?.path || file?.url}`}
      //         alt="alt"
      //         key={file?.path || file?.url}
      //       />
      //     </div>
      //   )
      // }
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
      showHeader={true}
      title={"asdsadsdsd asd "}
      className={`${className}`}
    >
      <div className="slider_container">
        {/* <Slider {...settings}>{renderAttachments()}</Slider> */}
        <Slider
          {...settingsMain}
          // className="my own class"
          // dotsClass="dosts class"
          initialSlide={activeSlide}
          draggable
          ref={sliderRef}
          beforeChange={() => {
            try {
              const item = document
                .querySelector(".slick-active .slider_item.audio")
                ?.getElementsByTagName("audio")[0]

              item?.pause()
            } catch (error) {
              console.log(error)
            }
          }}
          afterChange={crslide => setActiveSlide(crslide)}
        >
          {renderAttachments()}
          {/* <Stories
            stories={(items[0] as any)?.stories}
            isPaused={false}
            keyboardNavigation
            defaultInterval={3000}
            height={508}
            loop={true}
            onAllStoriesEnd={() => handleClose()}
          /> */}
        </Slider>
      </div>
    </Modal>
  )
}

export const PreviewSlider = styled(AttachmentsPreviewModel)`
  width: 100%;
  max-width: inherit !important;
  margin: 0;
  background: #1a1a1a;

  .modal-content {
    border-radius: 0;
    background: none;
    padding: 0;
  }

  .modal-header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    .modal-title {
      color: #fff;
    }

    .close {
      color: #fff;
    }
  }

  .modal-body {
    height: 100vh;
  }

  .slider_container {
    height: 100%;
  }

  .slick-track {
    height: 100vh;
    display: flex;
    align-items: center;

    .slick-slide {
      width: 250px;
      height: auto;
      transition: all 300ms ease;

      &.slick-current {
        width: 375px;
        transform: scale(1.5);
      }
    }
  }
  
  .slick-prev,
  .slick-next {
    color: white;
    z-index: 999;
    width: 100px;
  }
  /* width: calc(100% - 127px); */

  /* @media (max-width: 600px) {
    width: 1480px;
  } */

  .slick-slider {
    flex-grow: 0;
    flex-basis: inherit;
    width: 100%;
  }

  .slick-slide {
    width: 300px;
    padding: 0 7px;
    /* width: 135px !important; */
  }
`
