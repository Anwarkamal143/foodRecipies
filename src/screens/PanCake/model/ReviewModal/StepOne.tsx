import { DisLikeIcon, LikeIcon } from "@icons"
import React from "react"

type Props = {
  currentStep?: string
  setCurrentStep?: any
}

const StepOne = ({ currentStep, setCurrentStep }: Props) => {
  return (
    <div className="reviewsModalContent">
      <div className="reviewsModalOptions">
        <span
          className={`${currentStep === "1" ? "like" : "like-fill"}`}
          onClick={() => {
            currentStep === "1" ? setCurrentStep?.("2") : null
          }}
        >
          <LikeIcon />
        </span>
        <span
          className={`${currentStep === "1" ? "dis-like" : "dis-like-fill"}`}
           onClick={() => {
            currentStep === "1" ? setCurrentStep?.("2") : null
          }}
        >
          <DisLikeIcon />
        </span>
      </div>
      {currentStep === "1" && (
        <p className="textHelp">
          Help others try this recipe too by sharing recipe tips and photos.
        </p>
      )}
    </div>
  )
}

export default StepOne
