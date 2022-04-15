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
        <div className="qr-options-area">
          <LoginSide setView={setView} view={view} />
          <SignUpSide setView={setView} view={view} />
        </div>
      </Modal>
    </div>
  )
}

export default styled(LoginModel)`
  max-width: 371px;
  .link_copied {
    background: #255b87 !important;
    color: white !important;
  }import { Model } from 'components/modal';
import LoginSide from './loginSide';

  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
    margin: 0;
  }

  .modal-content {
    padding: 15px;
  }

  .modal-header {
    padding: 0 0 18px;
    justify-content: center;
    position: relative;
  }

  .modal-body {
    padding: 15px 0 0;
  }

  .modal-title {
    text-align: center;
    position: relative;

    .title-text {
      display: block;
      font-size: 16px;
      line-height: 24px;
      color: #000;
      font-weight: 500;
      margin: 0 0 11px;
    }

    .title-detail {
      display: block;
      font-size: 14px;
      line-height: 18px;
      color: #626263;
    }
  }

  .qr_badge {
    position: relative;
    padding: 17px 80px 17px 50px;
    border: 2px solid transparent;
    background: #f5f5f6;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    transition: all 0.4s ease;
    cursor: pointer;
    margin: 0 0 12px;
    border-radius: 8px;

    &:hover {
      background: #f5f5f6;
      border-color: #255b87;
    }

    .img-icon {
      position: absolute;
      width: 32px;
      left: 5px;
      top: 50%;
      transform: translate(0, -50%);

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }

    .img-arrow {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translate(0, -50%);
      width: 8px;

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }

  .user-link-copy {
    position: relative;
    padding: 15px 80px 15px 50px;
    border: 2px solid #d3dee7;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    transition: all 0.4s ease;
    cursor: pointer;
    border-radius: 8px;
    color: #626263;
    display: block;

    &:hover {
      .button {
        background: #255b87;
        border-color: #255b87;
        color: #fff;
      }
    }

    .img-icon {
      position: absolute;
      width: 32px;
      left: 5px;
      top: 50%;
      transform: translate(0, -50%);
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 18px;
      }
    }

    .button {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
      min-width: 54px;
      padding: 4px;

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }

    .user-link {
      display: inline-block;
      vertical-align: top;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: #626263;
      max-width: 100%;

      strong {
        color: #000;
      }
    }
  }

  .btn-back {
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    cursor: pointer;

    &:hover {
      color: #3b719e;
    }

    svg {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
  }

  .qr-container__qr-code {
    width: 184px;
    margin: 0 auto 15px;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .header-link-area__link-holder {
    text-align: center;
    display: inline-block;
    vertical-align: top;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #626263;
    max-width: 100%;

    strong {
      color: #000;
    }
  }

  .user-link-area {
    text-align: center;
    font-size: 13px;
    line-height: 15px;
    font-weight: 400;
    margin: 0 0 18px;

    .img-icon {
      font-size: 14px;
      line-height: 18px;
      margin: 0 5px 0 0;
    }

    .user-link {
      display: inline-block;
      vertical-align: top;
      color: #626263;
      max-width: 100%;

      strong {
        font-weight: 400;
        color: #000;
      }
    }
  }

  .qr-container__form {
    .button:not(:hover) {
      background: #000;
      border-color: #000;
      color: #fff;
    }
  }
`
