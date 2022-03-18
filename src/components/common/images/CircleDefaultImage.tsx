/* eslint-disable @next/next/no-img-element */
import clsxm from "@lib/clsxm"
import React from "react"

function CrclDefaultImage({
  src = "",
  alt = "",
  className = "",
  width = "100%",
  height = "100%",
}: {
  src: string
  alt?: string
  className?: string
  width?: string | number
  height?: string | number
}) {
  return (
    <img
      className={clsxm(
        " rounded-full border-2 border-gray-500 object-cover",
        className
      )}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export const CircleDefaultImage = CrclDefaultImage
