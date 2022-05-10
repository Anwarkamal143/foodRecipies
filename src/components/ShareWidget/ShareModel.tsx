// import { Announcement } from 'assets/svgs';
import { Button } from "@components"
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
  isSearch?: boolean
}

function SocialShareLinks({
  isOpen,
  className,
  user,
  isSearch = true,
  error,
  onSave,
  value,
  onCancel,
}: Props): ReactElement {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [email, setEmail] = useState(value)
  const [media, setisMedia] = useState(true)
  const [page, setPage] = useState<any>({})
  const handleClose = () => {
    onCloseModel()
    onCancel?.()
    setisMedia(true)
    setPage("")
  }
  const onMediaClcik = (e: any) => {
    setisMedia(e.isMedia)
    setPage(e)
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
      title={
        <span className="title-holder">{`${
          page?.title ? page?.title : "Share List"
        }`}</span>
      }
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      <Card>
        {media && (
          <div className="inviteModal">
            {isSearch && (
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
            )}
            <ul className="Social_icons">
              <li>
                <Icon className="icon icon-link">
                  <AttachmentIcon />
                </Icon>
                Copy Link
              </li>
              <li>
                <Icon
                  className="icon icon-sms"
                  onClick={() =>
                    onMediaClcik({
                      isMedia: false,
                      linkPage: "sms",
                      title: "Send Recipe by SMS",
                    })
                  }
                >
                  <MessageIcon />
                </Icon>
                SMS
              </li>
              <li>
                <Icon
                  className="icon icon-facebook"
                  onClick={() =>
                    onMediaClcik({
                      isMedia: false,
                      linkPage: "facebook",
                      title: "Email Recipe",
                    })
                  }
                >
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
        )}
        {page?.linkPage === "sms" && (
          <div className="smsLink">
            <p className="discription">
              Send a free text message with a link to this recipe.
            </p>
            <Input
              onChange={e => {
                setEmail(e.target.value)
              }}
              error={error}
              label="123-456-7890"
              inputClasses="spacer"
              type="tel"
              value={email}
              // materialDesign
            />
            <Button>Send Recipe</Button>
          </div>
        )}
        {page?.linkPage === "facebook" && (
          <div className="smsLink">
            <p className="discription">
              Send an email with a link to this recipe.
            </p>
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
            <Button>Send Recipe</Button>
          </div>
        )}
      </Card>
    </Modal>
  )
}
export const ShareSocialLinks = styled(SocialShareLinks)`
  .Social_icons {
    display: flex;
  }
`
