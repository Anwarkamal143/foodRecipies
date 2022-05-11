import { LikeIcon } from "@icons"
import React from "react"

type Props = {
  currentStep?: string
  setCurrentStep?: any
}

const StepOne = ({ currentStep, setCurrentStep }: Props) => {
  return (
    <div>
      <div className="smsLink">
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
        >
          <LikeIcon />
        </span>
      </div>
      {currentStep === "1" && (
        <p>
          Help others try this recipe too by sharing recipe tips and photos.
        </p>
      )}
    </div>
  )
}

export default StepOne
