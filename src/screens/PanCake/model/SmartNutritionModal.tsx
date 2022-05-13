import { Modal, ProgressBar } from "@components"
import { useOpenClose } from "@hooks"
import { DairyFree, GlutenFree, NutFree, Vegan, Vegetarian } from "@icons"
import React, { useEffect } from "react"
import styled from "styled-components"
type Props = {}
const data = [
  { bgcolor: "#6a1b9a", completed: 60, title: "Total Fat" },
  { bgcolor: "#00695c", completed: 30, title: "Total Fat" },
  { bgcolor: "#ef6c00", completed: 53, title: "Total Fat" },
  { bgcolor: "#ef6c00", completed: 53, title: "Total Fat" },
]
const datatwo = [
  { bgcolor: "#6a1b9a", completed: 60, title: "Total Fat" },
  { bgcolor: "#00695c", completed: 30, title: "Total Fat" },
  { bgcolor: "#ef6c00", completed: 53, title: "Total Fat" },
  { bgcolor: "#ef6c00", completed: 53, title: "Total Fat" },
  { bgcolor: "#ef6c00", completed: 53, title: "Total Fat" },
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
      className={`modal-popups ${className}`}
      isOpen={isOpenModel}
      title={<span className="title-holder">{}</span>}
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      <div className="Macronutrients">
        <p>Macronutrients</p>
        <hr />
        <div className="progressStatus">
          <div>
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
          <div>
            {data.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgColor={item.bgcolor}
                progresspercent={item.completed}
                title={item.title}
                showPrgress={false}
              />
            ))}
          </div>
          <div className="dietPlansList">
            {items.map(item => {
              return (
                <div className={`item`} key={item.name}>
                  <div className="infoBox">
                    {item.icon}
                    {item.name}
                  </div>
                  <span className="iconsStatus">{item.isTrue ? "Y" : "X"}</span>
                </div>
              )
            })}
          </div>
        </div>
        <p>Macronutrients</p>
        <hr />
        <div className="progressStatus">
          <div>
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
          <div>
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
          <div>
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
        <p>
          Percent Daily Values are based on a 2,000 calorie diet. Your daily
          values may be higher or lower depending on your calorie needs.
        </p>
      </div>
    </Modal>
  )
}

export default styled(SmartNutritionModal)``
