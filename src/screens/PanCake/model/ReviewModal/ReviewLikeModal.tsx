import { Modal } from "@components"
import { useOpenClose } from "@hooks"
import classNames from "classnames"
import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"

type Props = {
  isOpen?: boolean
  className?: string
  onSave?: (...args: any) => void
  onCancel?: (...args: any) => void
}

const ReviewLikeModal = ({ isOpen, className, onSave, onCancel }: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [active, setActive] = useState("")
  const [currentStep, setCurrentStep] = useState("1")
  const handleClose = () => {
    onCloseModel()
    onCancel?.()
    setCurrentStep("1")
  }

  useEffect(() => {
    if (isOpen) {
      setActive("")
      onOpenModel()
    }
  }, [isOpen])
  const Components = useMemo(() => {
    switch (currentStep) {
      case "1":
        return {
          header: 1,
          step: (
            <StepOne
              active={active}
              setActive={setActive}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          ),
          title: "Great ! How was it?",
        }
      case "2":
        return {
          header: 2,
          title: "Choose List",
          step: <StepTwo setCurrentStep={setCurrentStep} />,
          stepOne: (
            <StepOne
              active={active}
              setActive={setActive}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          ),
        }
      default:
        return <StepOne />
    }
  }, [currentStep as any, active])
  return (
    <Modal
      className={classNames("reviewLikeModal")}
      isOpen={isOpenModel}
      title={<span className="title-holder">{Components?.title}</span>}
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      {currentStep === "2" && Components?.stepOne}
      {Components?.step}
    </Modal>
  )
}

export default styled(ReviewLikeModal)``
