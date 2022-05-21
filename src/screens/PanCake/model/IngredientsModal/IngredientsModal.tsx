import { Modal } from "@components"
import { useOpenClose } from "@hooks"
import { DownArrowIcon, ListIcon, LongArrowLeftIcon } from "@icons"
import { classNames, setItemId } from "@utils"
import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import StepOne from "./StepOne"
import StepThree from "./StepThree"
import StepTwo from "./StepTwo"

type Props = {
  isOpen?: boolean
  className?: string

  Item?: any
  onSave?: (...args: any) => void
  setSelected?: (...args: any) => void

  onCancel?: (...args: any) => void
}
const itemsData = [
  {
    id: setItemId(),
    list: "Mar 7 Shopping List",
  },
  {
    id: setItemId(),
    list: "Mar 5 Shopping List",
  },
  {
    id: setItemId(),
    list: "Mar 9 Shopping List",
  },
]

const IngredientsModal = ({
  isOpen,
  className,
  onSave,
  onCancel,
  Item,
  setSelected,
}: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedItem, setSelectedItem] = useState(itemsData[0].list)

  const handleClose = () => {
    onCloseModel()
    onCancel?.()
    setCurrentStep(1)
  }
  const handleList = (e: any) => {
    setSelectedItem(e.list)
  }
  useEffect(() => {
    if (isOpen) {
      onOpenModel()
    }
  }, [isOpen])
  const handleSave = (e: any) => {
    onCloseModel()
    setCurrentStep(1)
    onSave?.(e)
  }

  const Components = useMemo(() => {
    switch (currentStep) {
      case 1:
        return {
          header: 1,
          step: <StepOne Item={Item} setSelectedItem={setSelected} />,
          title: (
            <span className="ingredientsModalTitle">
              Add to{" "}
              <span onClick={() => setCurrentStep(2)}>
                <ListIcon className="listIcon" /> {selectedItem}{" "}
                <DownArrowIcon className="arrowIcon" />
              </span>
            </span>
          ),
        }
      case 2:
        return {
          header: 2,
          title: (
            <span className="ingredientsModalTitle textCenter">
              Choose List
            </span>
          ),
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
          title: (
            <span className="ingredientsModalTitle textCenter">
              Create New List
            </span>
          ),
          step: (
            <StepThree
              handleSave={(name: string) => {
                setCurrentStep(2)
                itemsData.push({
                  id: setItemId(),
                  list: name,
                })
              }}
              handleClose={handleClose}
            />
          ),
        }
      default:
        return {
          step: <StepOne Item={Item} setSelectedItem={setSelected} />,
        }
    }
  }, [currentStep as any, Item])
  return (
    <Modal
      className={classNames("ingredientsModal")}
      isOpen={isOpenModel}
      title={
        <span className="title-holder">
          {(Components?.header as any) !== 1 && (
            <span
              className="back-btn"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              <LongArrowLeftIcon />
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
