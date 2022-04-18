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

export default styled(LoginModel)`
  &.ReactModal__Content {
    max-width: 893px;
    border-radius: 15px;

    .close {
      position: absolute;
      right: 25px;
      top: 9px;
      padding: 0;
      margin: 0;
      font-size: 30px;
    }

    .button {
      display: block;
      font-size: 14px;
      line-height: 18px;
      font-weight: 700;
      width: 100%;
      height: 48px;
    }
  }

  .login-area {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: 392px;

    @media (max-width: 767px) {
      display: block;
    }

    &:after {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      content: "";
      background: #e1e1e1;
      width: 1px;

      @media (max-width: 767px) {
        display: none;
      }
    }
  }

  .login-left-area {
    width: 50%;
    padding: 28px 6.8%;
    color: rgba(30, 30, 45, 0.7);
    font-size: 14px;
    line-height: 18px;

    @media (max-width: 767px) {
      width: 100%;
      padding: 20px 0;
      border-bottom: 1px solid #e1e1e1;
    }

    h2 {
      font-size: 30px;
      line-height: 1.3;
      margin: 0 0 14px;
      color: #1e1e2d;
    }

    p {
      margin: 0 0 37px;
    }
  }

  p {
    &.small-text {
      margin: 0 0 20px;
    }
  }

  .small-text {
    font-size: 12px;
    line-height: 15px;
  }

  .login-right-area {
    width: 50%;
    padding: 0 5% 0 8%;
    color: #898989;
    font-size: 13px;
    line-height: 1.538;

    @media (max-width: 767px) {
      width: 100%;
      padding: 20px 0;
    }

    h2 {
      font-size: 23px;
      line-height: 1.3;
      margin: 0 0 16px;
      color: #1e1e2d;
    }

    p {
      margin: 0 0 30px;
    }
  }

  .field-holder {
    margin: 0 0 15px;
  }

  .password-reset {
    text-align: right;
    color: #ff6067;
    font-size: 12px;
    line-height: 15px;
    margin: -9px 0 22px;
  }

  .link-text {
    color: #ff6067;
    cursor: pointer;
  }

  .text-password {
    cursor: pointer;
    transition: all 0.4s ease;
    display: inline-block;
    vertical-align: top;
    position: relative;

    &:hover {
      padding: 0 18px 0 0;

      .img-arrow {
        opacity: 1;
        visibility: visible;
      }
    }

    .img-arrow {
      width: 14px;
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
        fill: #ff6067;
      }
    }
  }

  .logo-holder {
    max-width: 261px;
    width: 100%;
    margin: 0 0 23px;
  }

  .block-recommendation {
    margin: 0 0 10px;
  }

  .label-personalize {
    font-size: 11px;
    line-height: 15px;

    input[type="checkbox"] {
      opacity: 0;
      visibility: visible;
      position: absolute;

      &:checked {
        + .fake-check-label {
          .fake-check {
            path {
              fill: #ff6067;
            }
          }
        }
      }
    }

    .fake-check-label {
      display: inline-block;
      vertical-align: top;
      position: relative;
      padding: 0 0 0 20px;
    }

    .fake-check {
      position: absolute;
      left: 0;
      top: -1px;
      width: 16px;

      svg {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }

  .terms-area {
    display: block;
    text-align: center;
    font-size: 10px;
    line-height: 1.5;
    color: rgba(30, 30, 45, 0.7);
    max-width: 240px;
    margin: 0 auto;
    padding: 13px 0 0;
  }
`
