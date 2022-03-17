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
      className={classNames(className, "modal-dialog")}
      style={{
        content: { ...modelStyle },
        overlay: {
          zIndex: 10,
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
`
