import { LikeIcon } from "@icons"
import React from "react"

type Props = {
  likeStep?: string
  setLikeStep?: any
}

const StepOne = ({ likeStep, setLikeStep }: Props) => {
  return (
    <div>
      <div className="smsLink">
        <span
          className={`${likeStep === "0" ? "like" : "like-fill"}`}
          onClick={() => {
            likeStep === "0" ? setLikeStep?.("1") : null
          }}
        >
          <LikeIcon />
        </span>
        <span className={`${likeStep === "0" ? "dis-like" : "dis-like-fill"}`}>
          <LikeIcon />
        </span>
      </div>
      {likeStep === "0" && (
        <p>
          Help others try this recipe too by sharing recipe tips and photos.
        </p>
      )}
    </div>
  )
}

export default StepOne
