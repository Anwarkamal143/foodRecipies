// import { Announcement } from 'assets/svgs';
import { PlusCircleIcon } from "@heroicons/react/outline"
import { useOpenClose } from "@hooks"
import {
  AttachmentIcon,
  FacebookIcon,
  HorizontalDotsIcon,
  MessageIcon,
  PhoneIcon,
  TelegramIcon,
  TwitterIcon,
} from "@icons"
import { ReactElement, useEffect, useState } from "react"
import styled from "styled-components"
import { Card } from "../Card"
import { Icon } from "../Icon"
import { Input } from "../Input"
import { Modal } from "../Model"

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

function SocialShareLinks({
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
      title={<span className="title-holder">Share List</span>}
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      <Card>
        <div>
          <Input
            onChange={e => {
              setEmail(e.target.value)
            }}
            error={error}
            label="Invite by email"
            inputClasses="mb-25"
            name="email"
            value={email}
            icon={<PlusCircleIcon />}
            // materialDesign
          />
          <div className="Social_icons">
            <span>
              <Icon>
                <AttachmentIcon />
              </Icon>
              Copy Link
            </span>
            <span>
              <Icon>
                <MessageIcon />
              </Icon>
              SMS
            </span>
            <span>
              <Icon>
                <FacebookIcon />
              </Icon>
              Facebook
            </span>
            <span>
              <Icon>
                <TwitterIcon />
              </Icon>
              Twitter
            </span>
            <span>
              <Icon>
                <PhoneIcon />
              </Icon>
              whatsapp
            </span>
            <span>
              <Icon>
                <TelegramIcon />
              </Icon>
              Telegram
            </span>
            <span>
              <Icon>
                <HorizontalDotsIcon />
              </Icon>
              More
            </span>
          </div>
        </div>
      </Card>
    </Modal>
  )
}
export const ShareSocialLinks = styled(SocialShareLinks)`
  .Social_icons {
    display: flex;
  }
`
