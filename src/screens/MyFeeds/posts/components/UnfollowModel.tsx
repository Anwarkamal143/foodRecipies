import { Button, Modal } from "@components"
import React from "react"
import styled from "styled-components"

type Props = {
  onCancel?: (...args: any) => void
  handleSave?: (...args: any) => void
  isOpen?: boolean
  className?: string
}
const UnfolloeModal = ({ isOpen, className, onCancel, handleSave }: Props) => {
  return (
    <Modal
      className={`modal-popups ${className}`}
      isOpen={isOpen}
      showFooter={false}
      showHeader={true}
      onClose={() => onCancel?.(false)}
      title={<span>UNFOLLOW</span>}
    >
      <span className="modal-description">Are you sure to Unfollow</span>
      <div className="btns-actions">
        <Button
          type="link"
          onClick={() => onCancel?.(false)}
          className="btn-cancel"
        >
          CANCEL
        </Button>
        <Button onClick={() => handleSave?.()} type="link">
          YES, UNFOLLOW
        </Button>
      </div>
    </Modal>
  )
}

export default styled(UnfolloeModal)`
  &.modal-post {
    &.modal-dialog {
      max-width: 376px;
      color: #495057;
      font-weight: 400;
      margin: 1rem auto;
    }

    .modal-content {
      padding: 22px 25px;
    }

    .modal-header {
      padding: 0;
      border: none;
      font-size: 16px;
      line-height: 20px;
      color: #252631;
      margin: 0 0 12px;

      .modal-title {
        font-size: 16px;
        line-height: 20px;
        color: #252631;
        font-weight: 500;
      }

      svg {
        margin: 0 20px 0 0;
      }

      .close {
        margin: 0;
        padding: 10px;
        position: absolute;
        right: 4px;
        top: 0;
      }
    }
    .modal-description {
      font-size: 16px;
      line-height: 22px;
      color: #495057;
      font-weight: 400;
      margin: 0 0 20px;
      display: block;
    }

    .modal-body {
      padding: 0;
    }
    price-description {
      background: #f8fafd;
      border-radius: 4px;
      padding: 18px;
      font-size: 13px;
      line-height: 17px;
    }

    .cost-detail {
      color: #8c8c8c;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 19px;
      padding: 0 10px;
    }

    .total-cost {
      display: flex;
      position: relative;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      padding: 15px 10px 0;

      .cost-title {
        color: #000;
      }

      &:before {
        border-top: 4px dashed #d0d0d0;
        left: 0;
        right: 0;
        top: -3px;
        content: "";
        position: absolute;
      }
    }

    .amount {
      font-size: 16px;
      line-height: 20px;
      color: #000;
      font-weight: 500;

      &.amount-fee {
        font-size: 13px;
      }
    }

    .btns-actions {
      justify-content: flex-end;
      padding: 20px 0 10px;

      .button {
        min-width: inherit;
        padding: 8px 18px;

        &.btn-cancel {
          color: #97bdd2;

          &:hover {
            color: #9fa8da;
          }
        }
      }
    }
  }
`
