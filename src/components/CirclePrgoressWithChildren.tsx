import React, { cloneElement, ReactElement, useEffect, useState } from "react"
import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { CircularProgressbarWrapperProps } from "react-circular-progressbar/dist/types"
type IProgressBarprops = CircularProgressbarWrapperProps & {
  children: ReactElement
  parentClass?: string
}

const CircularProgress = (props: IProgressBarprops) => {
  const { value, parentClass, children, ...rest } = props
  const [progess, setProgress] = useState(0)

  useEffect(() => {
    setProgress(value || 0)
  }, [value])
  return (
    <div className={parentClass}>
      <CircularProgressbarWithChildren value={progess} {...rest}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        {cloneElement(children, { className: "child-wrapper" })}
      </CircularProgressbarWithChildren>
    </div>
  )
}
export const CircularProgresWithChildren = CircularProgress
