import React, { ReactNode, useEffect, useState } from "react"
import styled from "styled-components"

type IProgressBarprops = {
  strokeWidth: number
  size: number
  text?: string | ReactNode
  progressPercent: number
  bgColor?: string
  pgColor?: string
  textColor?: string
  textSize?: number
}

const CircularProgres = (props: IProgressBarprops) => {
  const [progess, setProgress] = useState(0)
  const { size, strokeWidth, text } = props
  const viewBox = `0 0 ${size} ${size}`
  const radius = (size - strokeWidth) / 2
  const circum = radius * 2 * Math.PI
  const svgProgress = 100 - progess
  useEffect(() => {
    setProgress(props.progressPercent || 0)
  }, [props.progressPercent])
  return (
    <div style={{ margin: 10 }}>
      <svg width={size} height={size} viewBox={viewBox}>
        {/* Background Circle */}
        <circle
          stroke={props.bgColor ? props.bgColor : "#f2f2f2"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        {/* Progress Circle */}
        <circle
          stroke={props.pgColor ? props.pgColor : "#3b5998"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
          style={{ transition: "stroke-dashoffset 850ms ease-in-out" }}
        />

        {/* Text */}
        <text
          fontSize={props.textSize ? props.textSize : "10"}
          x={size / 2}
          y={size / 2 + (props.textSize ? props.textSize / 2 - 1 : 5)}
          textAnchor="middle"
          fill={props.textColor ? props.textColor : "#333333"}
        >
          {text}
        </text>
      </svg>
    </div>
  )
}

export const CircularProgress = styled(CircularProgres)``
