/* eslint-disable @next/next/no-img-element */
import clsxm from "@Lib/clsxm"
import React from "react"

function CrclImage({ src = "", alt = "", className = "" }) {
  return (
    <img
      className={clsxm(
        "h-8 w-8 rounded-full border-2 border-gray-500 object-cover",
        className
      )}
      src={src}
      alt={alt}
    />
  )
}

export const CircleImage = CrclImage
