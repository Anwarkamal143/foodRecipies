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

    .tab-link {
      width: 30px;
      height: 30px;
      background: #f1f4fb;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      margin: 0 5px;
      color: #7474a9;
      font-size: 12px;
      line-height: 16px;
      font-weight: 600;
      transition: all 0.4s ease;
      position: relative;
      cursor: pointer;

      &:hover {
        background: #e0464d;
        color: #fff;
      }

      &.active {
        background: #e0464d;
        color: #fff;
        border: 2px solid #fff;

        &:after {
          opacity: 1;
          visibility: visible;
        }
      }

      &:after {
        position: absolute;
        left: -3px;
        right: -3px;
        top: -3px;
        bottom: -3px;
        content: "";
        border: 1px solid #e0464d;
        border-radius: 100%;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;
      }
    }
  }

  .receipeDetails {
    border: 1px solid #f2f3f5;
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
        fill: #e0464d;
      }
    }

    .recipename {
      font-size: 18px;
      line-height: 1.4;
      color: #1e1e2d;
      font-weight: 600;
      display: block;
    }

    .receipeRatings {
      color: #86909c;
      font-size: 10px;
      line-height: 1.5;
      display: block;
    }

    .receipeTextbox {
      flex-grow: 1;
      flex-basis: 0;
      min-width: 0;
      padding: 0 50px 0 0;
      position: relative;
    }

    .img-loader {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 40px;

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
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
      background: #e0464d;
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
      border: 1px solid #f2f3f5;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      margin: 0 0 0 15px;
      transition: all 0.25s ease-in-out;

      &:hover {
        background: #f2f3f5;
      }
    }
  }
`
