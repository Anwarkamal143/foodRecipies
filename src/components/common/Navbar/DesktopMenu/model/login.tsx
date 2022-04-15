import { Modal } from "@components"
import { useOpenClose } from "@hooks"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import LoginSide from "./loginSide"
import SignUpSide from "./signUpSide"

type login = {
  className?: string
  isOpen: boolean
  onCancel?: (...args: any[]) => void
}

const LoginModel = ({ className, isOpen, onCancel }: login) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [view, setView] = useState("0")
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
    <div className={className}>
      <Modal
        className={className}
        isOpen={isOpenModel}
        title="title"
        showFooter={false}
        onClose={handleClose}
      >
        <div className="login-area">
          <LoginSide setView={setView} view={view} />
          <SignUpSide setView={setView} view={view} />
        </div>
      </Modal>
    </div>
  )
}

export default styled(LoginModel)``
