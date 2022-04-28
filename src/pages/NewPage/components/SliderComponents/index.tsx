import React from "react"
import styled from "styled-components"
import SliderNav from "./SliderNav"

type Props = {
  data?: any
  title?: string
  className?: string
  discription?: string
  isNavSlider?: boolean
  isContentSlider?: boolean
  isContent?: boolean
  isNavBar?: boolean
  rightIcon?: boolean
}

const SilderComponent = ({
  data,
  title,
  discription,
  isContentSlider,
  isNavSlider,
  isNavBar,
  isContent,
  className,
  rightIcon,
}: Props) => {
  return (
    <div className={`${className}`}>
      <SliderNav
        isContentSlider={isContentSlider}
        data={data}
        title={title}
        discription={discription}
        isNavSlider={isNavSlider}
        isContent={isContent}
        isNavBar={isNavBar}
        rightIcon={rightIcon}
      />
    </div>
  )
}

export default styled(SilderComponent)``
