import { DisLikeIcon, LikeIcon } from "@icons"

type Props = {
  currentStep?: string
  setCurrentStep?: any
  active?: string
  setActive?: (...args: any) => void
}

const StepOne = ({ currentStep, setCurrentStep, active, setActive }: Props) => {
  return (
    <div className="reviewsModalContent">
      <div className="reviewsModalOptions">
        <span
          className={`like ${active === "like" ? "like-fill" : ""}`}
          onClick={() => {
            currentStep === "1" ? setCurrentStep?.("2") : null
            setActive?.("like")
          }}
        >
          <LikeIcon />
        </span>
        <span
          className={`dis-like ${
            active === "dis-like-fill" ? "dis-like-fill" : ""
          }`}
          onClick={() => {
            currentStep === "1" ? setCurrentStep?.("2") : null
            setActive?.("dis-like-fill")
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
