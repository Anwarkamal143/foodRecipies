import { Button, Input, Modal } from "@components"
import { useOpenClose } from "@hooks"
import classNames from "classnames"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

type Props = {
  isOpen?: boolean
  className?: string
  onSave?: (...args: any) => void
  onCancel?: (...args: any) => void
}

const AskMeQuestionModal = ({ isOpen, className, onSave, onCancel }: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [email, setEmail] = useState("")

  const handleClose = () => {
    onCloseModel()
    onCancel?.()
  }

  useEffect(() => {
    if (isOpen) {
      onOpenModel()
    }
  }, [isOpen])
  //   const handleSave = () => {
  //     onCloseModel()
  //   }
  return (
    <Modal
      className={classNames("askMeQuestionModal")}
      isOpen={isOpenModel}
      title={<span className="title-holder">Ask Me a Question</span>}
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      <div className="askMeQuestionModalForm">
        <div className="profileInfo">
          <span className="profile"><img src="/images/post1.png" alt="" /></span>
          <p className="discription">Homemade Burger with American Cheese and Burrata</p>
        </div>
        <div className="askMeQuestionModalHolder">
          <Input
            onChange={e => {
              setEmail(e.target.value)
            }}
            placeholder="Do you have any reccomended flour
  substitutes for this recipe?"
            inputClasses="spacer"
            name="textarea"
            value={email}
            type="textarea"
            // materialDesign
          />
        </div>
        <div className="askMeQuestionModalButtons">
          <Button className="buttonOutlineGray" onClick={handleClose}>Cancel</Button>
          <Button className="buttonGreen" onClick={handleClose}>Ask Me</Button>
        </div>
      </div>
    </Modal>
  )
}
export default styled(AskMeQuestionModal)``
