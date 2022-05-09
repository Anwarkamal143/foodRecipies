import { Button, Input, Modal } from "@components"
import { useOpenClose } from "@hooks"
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
      className={`modal-popups ${className}`}
      isOpen={isOpenModel}
      title={<span className="title-holder">Ask Me a Question</span>}
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      <div className="smsLink">
        <span>
          <span className="proifle">R</span>
          <p className="discription">Noodles with eggs and vegetables</p>
        </span>
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
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Ask Me</Button>
      </div>
    </Modal>
  )
}
export default styled(AskMeQuestionModal)``
