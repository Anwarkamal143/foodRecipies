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
      title={<span className="title-holder">Task</span>}
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

.profileStatusWeekly {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 30px;

  span {
    width: 30px;
    height: 30px;
    background: #F1F4FB;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin: 0 5px;
    color: #7474A9;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
  }
}

.receipeDetails {
  border: 1px solid #F2F3F5;
  border-radius: 15px;
  margin: 0 0 15px;
  padding: 20px;

  .recipeholder {
    display: flex;
    align-items: center;
  }

  .checkIcon {
    margin: 0 15px 0 0;
  }

  .imageIcon {
    width: 36px;
    margin: 0 15px 0 0;
    
    svg {
      fill: #E0464D;
    }
  }

  .recipename {
    font-size: 18px;
    line-height: 1.4;
    color: #1E1E2D;
    font-weight: 600;
    display: block;
  }

  .receipeRatings {
    color: #86909C;
    font-size: 10px;
    line-height: 1.5;
    display: block;
  }
}

.profileStatusModalButtons {
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .btnStart {
    width: 135px;
    height: 40px;
    background: #E0464D;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    transition: all 0.25s ease-in-out;

    &:hover {
      background: #d3262e;
    }
  }

  .btnIdeaLamp {
    width: 40px;
    height: 40px;
    border: 1px solid #F2F3F5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin: 0 0 0 15px;
    transition: all 0.25s ease-in-out;

    &:hover {
      background: #F2F3F5;
    }
  }
}
`
