// import { Announcement } from 'assets/svgs';
import { useOpenClose } from "@hooks"
import { ReactElement, useEffect, useState } from "react"
import styled from "styled-components"
import { Modal } from "../Model"
import DailyTask from "./dailyTask"
type User = {
  firstName?: string
  lastName?: string
  username?: string
  profileImage?: string
}
type Props = {
  isOpen?: boolean
  className?: string
  user?: User
  value?: string
  onSave?: (...args: any) => void
  error?: string
  onCancel?: (...args: any) => void
}

function ProfileTaskModel({
  isOpen,
  className,
  user,
  error,
  onSave,
  value,
  onCancel,
}: Props): ReactElement {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [email, setEmail] = useState(value)
  const handleClose = () => {
    onCloseModel()
    onCancel?.()
  }

  useEffect(() => {
    if (isOpen) {
      onOpenModel()
      setEmail(value)
    }
  }, [isOpen])

  const handleSave = () => {
    onCloseModel()

    onSave?.(email)
  }
  return (
    <Modal
      className={`modal-popups ${className}`}
      isOpen={isOpenModel}
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      {isOpenModel && <DailyTask />}
    </Modal>
  )
}
export default styled(ProfileTaskModel)`
  .profileStatusModal {
    padding-bottom: 10px;
  }
`
