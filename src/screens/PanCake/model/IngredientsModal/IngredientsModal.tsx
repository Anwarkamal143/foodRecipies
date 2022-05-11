import { Modal } from "@components"
import { useOpenClose } from "@hooks"
import { setItemId } from "@utils"
import React, { useEffect, useMemo, useState } from "react"
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
const itemsData = [
  {
    id: setItemId(),
    list: "mar 7 Shopping List",
  },
  {
    id: setItemId(),
    list: "mar 5 Shopping List",
  },
  {
    id: setItemId(),
    list: "mar 9 Shopping List",
  },
]

const IngredientsModal = ({ isOpen, className, onSave, onCancel }: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedItem, setSelectedItem] = useState(itemsData[0].list)

  const handleClose = () => {
    onCloseModel()
    onCancel?.()
    setCurrentStep(1)
  }
  const handleList = e => {
    setSelectedItem(e.list)
  }
  useEffect(() => {
    if (isOpen) {
      onOpenModel()
    }
  }, [isOpen])
  const handleSave = e => {
    onCloseModel()
    setCurrentStep(1)
    onSave?.(e)
  }
  const Components = useMemo(() => {
    switch (currentStep) {
      case 1:
        return {
          header: 1,
          step: <StepOne />,
          title: (
            <span>
              Add to{" "}
              <span onClick={() => setCurrentStep(2)}>{selectedItem}</span>
            </span>
          ),
        }
      case 2:
        return {
          header: 2,
          title: "Choose List",
          step: (
            <StepTwo
              setItemsModal={setCurrentStep}
              itemsData={itemsData}
              setSelectedItem={handleList}
            />
          ),
        }
      case 3:
        return {
          header: 3,
          title: "Create New List",
          step: <StepThree handleSave={handleSave} handleClose={handleClose} />,
        }
      default:
        return <StepOne />
    }
  }, [currentStep as any])
  return (
    <Modal
      className={`modal-popups ${className}`}
      isOpen={isOpenModel}
      title={
        <span className="title-holder">
          {(Components?.header as any) !== 1 && (
            <span
              className="back-btn"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              {"<-"}
            </span>
          )}
          {Components.title as any}
        </span>
      }
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      {Components.step}
    </Modal>
  )
}

export default styled(IngredientsModal)``
