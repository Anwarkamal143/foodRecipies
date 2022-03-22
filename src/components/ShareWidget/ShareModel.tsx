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
  TwitterIcon
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
        <div className="inviteModal">
          <Input
            onChange={e => {
              setEmail(e.target.value)
            }}
            error={error}
            label="Invite by email"
            inputClasses="spacer"
            name="email"
            value={email}
            icon={<PlusCircleIcon />}
            // materialDesign
          />
          <ul className="Social_icons">
            <li>
              <Icon className="icon icon-link">
                <AttachmentIcon />
              </Icon>
              Copy Link
            </li>
            <li>
              <Icon className="icon icon-sms">
                <MessageIcon />
              </Icon>
              SMS
            </li>
            <li>
              <Icon className="icon icon-facebook">
                <FacebookIcon />
              </Icon>
              Facebook
            </li>
            <li>
              <Icon className="icon icon-twitter">
                <TwitterIcon />
              </Icon>
              Twitter
            </li>
            <li>
              <Icon className="icon icon-whatsapp">
                <PhoneIcon />
              </Icon>
              whatsapp
            </li>
            <li>
              <Icon className="icon icon-telegram">
                <TelegramIcon />
              </Icon>
              Telegram
            </li>
            <li>
              <Icon className="icon icon-more">
                <HorizontalDotsIcon />
              </Icon>
              More
            </li>
          </ul>
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
