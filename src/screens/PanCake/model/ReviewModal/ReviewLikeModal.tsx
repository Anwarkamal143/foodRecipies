import { Modal } from "@components"
import { useOpenClose } from "@hooks"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import StepOne from "./StepOne"
import StepThree from "./StepThree"
import StepTwo from "./StepTwo"

type Props = {
  isOpen?: boolean
  className?: string
  onSave?: (...args: any) => void
  onCancel?: (...args: any) => void
}

const ReviewLikeModal = ({ isOpen, className, onSave, onCancel }: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [likeStep, setLikeStep] = useState("0")
  const handleClose = () => {
    onCloseModel()
    onCancel?.()
    setLikeStep("0")
  }

  useEffect(() => {
    if (isOpen) {
      onOpenModel()
    }
  }, [isOpen])
  return (
    <Modal
      className={`modal-popups ${className}`}
      isOpen={isOpenModel}
      title={<span className="title-holder">Great ! How was it?</span>}
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      <StepOne likeStep={likeStep} setLikeStep={setLikeStep} />
      {likeStep === "1" && <StepTwo setLikeStep={setLikeStep} />}
      {likeStep === "2" && <StepThree />}
    </Modal>
  )
}

export default styled(ReviewLikeModal)``
