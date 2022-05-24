import { Modal, ProgressBar } from "@components"
import { useOpenClose } from "@hooks"
import {
  CrossIcon,
  DairyFree,
  GlutenFree,
  InfoIcon,
  NutFree,
  TickIcon,
  Vegan,
  Vegetarian,
} from "@icons"
import classNames from "classnames"
import React, { useEffect } from "react"
import styled from "styled-components"
type Props = {}
const data = [
  { bgcolor: "#11C278", completed: 56, title: "Total Fat" },
  { bgcolor: "#E8A96E", completed: 36, title: "Saturated" },
  { bgcolor: "#EE7971", completed: 8, title: "Trans" },
  { bgcolor: "#11C278", completed: 56, title: "Unsaturated" },
  { bgcolor: "#11C278", completed: 56, title: "Cholesteral" },
]
const dataone = [
  { bgcolor: "#11C278", completed: 56, title: "Total Carbs" },
  { bgcolor: "#E8A96E", completed: 56, title: "Fiber" },
  { bgcolor: "#EE7971", completed: 56, title: "Sugars" },
  { bgcolor: "#11C278", completed: 56, title: "Proteins" },
  { bgcolor: "#11C278", completed: 56, title: "Sodum" },
]
const datatwo = [
  { bgcolor: "#EE7971", completed: 60, title: "Vitamin A" },
  { bgcolor: "#E8A96E", completed: 30, title: "Iron" },
  { bgcolor: "#EE7971", completed: 53, title: "Potassium" },
  { bgcolor: "#E8A96E", completed: 53, title: "Thiamin (B1)" },
  { bgcolor: "#11C278", completed: 53, title: "Vitamin B6" },
]
const items = [
  { name: "Vegetarian", icon: <GlutenFree />, isTrue: true },
  { name: "Vegan", icon: <Vegan />, isTrue: false },
  { name: "Gluten-Free", icon: <Vegetarian />, isTrue: false },
  { name: "Dairy-Free", icon: <NutFree />, isTrue: true },
  { name: "Low Sugar", icon: <DairyFree />, isTrue: false },
  { name: "Low Salt", icon: <DairyFree />, isTrue: false },
]
type Props = {
  isOpen?: boolean
  className?: string
  onSave?: (...args: any) => void
  onCancel?: (...args: any) => void
}
const SmartNutritionModal = ({
  isOpen,
  className,
  onSave,
  onCancel,
}: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const handleClose = () => {
    onCloseModel()
    onCancel?.()
  }

  useEffect(() => {
    if (isOpen) {
      onOpenModel()
    }
  }, [isOpen])
  return (
    <Modal
      className={classNames("smartNutritionModal")}
      isOpen={isOpenModel}
      title={
        <span className="title-holder">
          Online Cook Smart Nutrition Calculator
        </span>
      }
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      <div className="smartNutritionContent">
        <div className="smartNutritionRow">
          <strong className="title">
            Macronutrients <InfoIcon />
          </strong>
          <div className="progressStatus">
            <div className="column firstItem">
              {data.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  bgColor={item.bgcolor}
                  progresspercent={item.completed}
                  showPrgress={false}
                  title={item.title}
                />
              ))}
            </div>
            <div className="column secondItem">
              {dataone.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  bgColor={item.bgcolor}
                  progresspercent={item.completed}
                  title={item.title}
                  showPrgress={false}
                />
              ))}
            </div>
            <div className="column dietPlansList">
              {items.map(item => {
                return (
                  <div className={`item`} key={item.name}>
                    <div className="infoBox">
                      {item.icon}
                      {item.name}
                    </div>
                    <span className="iconsStatus">
                      {item.isTrue ? (
                        <TickIcon width={11} />
                      ) : (
                        <CrossIcon fill="#f00" width={9} />
                      )}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="smartNutritionRow">
          <strong className="title">
            Macronutrients <InfoIcon />
          </strong>
          <div className="progressStatus">
            <div className="column">
              {datatwo.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  bgColor={item.bgcolor}
                  progresspercent={item.completed}
                  showPrgress={false}
                  title={item.title}
                />
              ))}
            </div>
            <div className="column">
              {datatwo.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  bgColor={item.bgcolor}
                  progresspercent={item.completed}
                  title={item.title}
                  showPrgress={false}
                />
              ))}
            </div>
            <div className="column">
              {datatwo.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  bgColor={item.bgcolor}
                  progresspercent={item.completed}
                  showPrgress={false}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="noteText">
          Percent Daily Values are based on a 2,000 calorie diet. Your daily
          values may be higher or lower depending on your calorie needs.
        </p>
      </div>
    </Modal>
  )
}

export default styled(SmartNutritionModal)``
