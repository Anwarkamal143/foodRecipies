// import 'cropperjs/dist/cropper.css';
import classNames from "classnames"
import React, { CSSProperties } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import { Button } from "../Button"

// Modal.setAppElement("#root")
// if (typeof window !== "undefined") {
Modal.setAppElement("#__next")
// }
interface IStyle {
  model?: CSSProperties
  header?: CSSProperties
  body?: CSSProperties
  content?: CSSProperties
  overlayStyle?: CSSProperties
  footer?: CSSProperties
  dialog?: CSSProperties
}

const Model = ({
  isOpen,
  onClose,
  title,
  children,
  onOk,
  footerChange,
  confirmLoading,
  isDisabled,
  showHeader = true,
  showFooter = true,
  styles = {},
  className,
}: {
  isOpen: boolean
  onClose?: any
  title?: string | React.ReactNode
  onOk?: Function
  confirmLoading?: boolean
  isDisabled?: boolean
  children?: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
  footerChange?: boolean
  styles?: IStyle
  className?: string
}) => {
  const {
    model: modelStyle,
    content: contentStyle,
    overlayStyle,
    body: bodyStyle,
    dialog: dialogStyle,
  } = styles

  const onOkHanlder = () => {
    onOk && onOk()
  }
  const onCloseHanlder = () => {
    onClose && onClose()
  }
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      className={classNames(className, "modal-dialog modal-dialog-centered")}
      style={{
        content: { ...modelStyle },
        overlay: {
          zIndex: 50,
          backgroundColor: "rgba(0,0,0,0.6)",
          ...overlayStyle,
        },
      }}
    >
      <div className="modal-content" style={contentStyle}>
        {showHeader && (
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onCloseHanlder}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <div className="modal-body" style={bodyStyle}>
          {children}
        </div>
        {showFooter && (
          <div className="text-right modal-footer">
            {/* we can remove the type for cancel button and chagne the type to primary for save button and remove the size from both ot them to go back to previous viwe */}
            <Button
              onClick={onCloseHanlder}
              isLoading={false}
              disabled={false}
              type="text"
              size="small"
              className="button-close"
            >
              Cancel
            </Button>
            <Button
              isLoading={confirmLoading}
              onClick={onOkHanlder}
              type="text"
              htmlType="submit"
              size="small"
              disabled={confirmLoading || isDisabled}
            >
              {footerChange ? "Leave" : "Save"}
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default styled(Model)`
  @media (min-width: 576px) {
    max-width: 405px;
  }

  /* we can remove this styles if we have to revert back to default buttons tyles */
  .modal-footer {
    border: none;
    justify-content: flex-end !important;
    text-align: right !important;

    .button {
      margin: 0;

      + .button {
        margin-left: 14px;
      }
    }
  }
  .button {
    text-transform: uppercase;

    &.button-sm {
      min-width: inherit;
      font-size: 16px;
      line-height: 20px;
      padding: 5px 10px;
      color: rgba(2, 94, 147, 0.8);
      border: none;

      &:hover {
        background: #9fa8da;
        color: #fff;
        border: none;
      }

      &.button-close {
        color: rgba(151, 189, 210, 1);

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    border: 0;
    padding: 0;
  }

  .modal-header {
    margin: 0 0 25px;

    @media (max-width: 430px) {
      margin: 0 0 15px;
    }

    .close {
      font-size: 25px;
    }
  }

  .modal-title {
    display: block;
    font-weight: 700;
    color: #1e1e2d;
    font-size: 16px;
    line-height: 21px;
  }

  .modal-content {
    border-radius: 15px;
    padding: 25px 40px;

    @media (max-width: 430px) {
      padding: 15px;
    }

    .feedsWidget {
      padding: 0;
      border: 0;
      margin: 0;
      box-shadow: none;
    }
  }

  .inviteModal {
    width: 100%;

    .text-input {
      .icon {
        width: 26px;
        font-size: 26px;
        left: 4px;
        color: #e0464d;
      }

      label {
        font-size: 10px;
        top: 50%;
        transform: translateY(-50%);
      }

      &.input-active {
        label {
          display: none;
        }
      }

      &.ico-input {
        label {
          left: 36px;
        }

        .form-control {
          padding-left: 36px;
        }
      }

      &.spacer {
        margin: 0 0 20px;
      }
    }

    .form-control {
      width: 100%;
      height: 32px;
      border: 1px solid #e0464d;
      border-radius: 20px;
      outline: none;
      font-size: 10px;
      line-height: 14px;
      color: #1e1e2d;
      padding: 8px 10px;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }

  .Social_icons {
    list-style: none;
    padding: 0;
    margin: -12px -9px -7px;
    display: flex;
    flex-flow: row wrap;
    font-size: 10px;
    text-align: center;
    color: #1e1e2d;

    li {
      padding: 12px 9px;
    }

    .icon {
      width: 50px;
      height: 50px;
      margin: 0 0 3px;
      border-radius: 100%;
      border-color: #e5e8ef;
      transition: all 0.25s ease-in-out;

      &.icon-link {
        background: #c3c3d7;
        border-color: #c3c3d7;

        svg {
          width: 18px;
          height: 18px;
        }

        &:hover {
          background: #adaddb;
          border-color: #adaddb;
        }
      }

      &.icon-sms {
        background: #1e1e2d;
        border-color: #1e1e2d;

        svg {
          width: 20px;
          height: 20px;
        }

        &:hover {
          background: #000;
          border-color: #000;
        }
      }

      &.icon-facebook {
        background: #425a94;
        border-color: #425a94;

        svg {
          width: 22px;
          height: 22px;

          path {
            fill: #fff;
          }
        }

        &:hover {
          background: #2d4a8f;
          border-color: #2d4a8f;
        }
      }

      &.icon-twitter {
        background: #57c0fa;
        border-color: #57c0fa;

        svg {
          width: 22px;
          height: 22px;

          path {
            fill: #fff;
          }
        }

        &:hover {
          background: #2ab2fd;
          border-color: #2ab2fd;
        }
      }

      &.icon-whatsapp {
        background: #66cf72;
        border-color: #66cf72;

        svg {
          width: 22px;
          height: 22px;

          path {
            fill: #fff;
          }
        }

        &:hover {
          background: #27ce3a;
          border-color: #27ce3a;
        }
      }

      &.icon-telegram {
        background: #59aae2;
        border-color: #59aae2;

        svg {
          width: 22px;
          height: 22px;

          path {
            fill: #fff;
          }
        }

        &:hover {
          background: #2e91d6;
          border-color: #2e91d6;
        }
      }
    }
  }
`
