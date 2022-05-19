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
          page?.title ? page?.title : "Share Via"
        }`}</span>
      }
      showFooter={false}
      showHeader={true}
      onClose={handleClose}
    >
      <Card>
        {media && (
          <div className="inviteModal shareModal">
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
            <div className="shareRecipeBox">
              <strong className="title">Homemade Burger with American Cheese and Burrata</strong>
              <div className="image-holder">
                <img src="/images/share-image.png" alt="" />
              </div>
              <div className="textbox">
                <p>Credibly reinvent resource maximizing systems vis-a-vis value-added customer service. Authoritatively seize ...</p>
              </div>
            </div>
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
          <div className="smsLink shareFormElements">
            <div className="shareRecipeDescription">
              <strong className="title">Homemade Burger with American Cheese and Burrata</strong>
              <div className="textbox">
                <p>Credibly reinvent resource maximizing systems vis-a-vis value-added customer service. Authoritatively seize ...</p>
              </div>
            </div>
            <p className="label">
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
              placeholder="123-456-7890"
              // materialDesign
            />
            <Button className="buttonGreen">Send Recipe</Button>
          </div>
        )}
        {page?.linkPage === "facebook" && (
          <div className="smsLink shareFormElements">
            <div className="shareRecipeDescription">
              <strong className="title">Homemade Burger with American Cheese and Burrata</strong>
              <div className="textbox">
                <p>Credibly reinvent resource maximizing systems vis-a-vis value-added customer service. Authoritatively seize ...</p>
              </div>
            </div>
            <p className="label">
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
              // icon={<PlusCircleIcon />}
              placeholder="Email Address"
              // materialDesign
            />
            <Button className="buttonGreen">Send Recipe</Button>
          </div>
        )}
      </Card>
    </Modal>
  )
}
export const ShareSocialLinks = styled(SocialShareLinks)`
  .modal-title {
    color: #1E1E2D;
  }

  .modal-header {
    margin: 0 0 15px;
    
    .close {
      font-size: 30px;
      padding: 0.9rem 1rem;
    }
  }

  .modal-content {
    padding: 30px 40px;
  }

  .shareRecipeBox {
    background: #fff;
    border: 1px solid #F2F3F5;
    border-radius: 20px;
    overflow: hidden;
    padding: 12px;
    margin: 0 0 12px;
    display: none;

    .title {
      display: block;
      font-size: 14px;
      line-height: 1.5;
      color: #1E1E2D;
      margin: 0 0 15px;
    }

    .image-holder {
      overflow: hidden;
      border-radius: 15px;

      img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 15px;
      }
    }

    .textbox {
      font-size: 12px;
      line-height: 20px;
      color: #1E1E2D;
      padding: 10px 3px 5px;

      p {
        margin: 0;
      }
    }
  }

  .shareModal {
    .shareRecipeBox {
      display: block;
    }
  }

  .shareRecipeDescription {
    overflow: hidden;
    margin: 0 0 25px;
    
    .title {
      display: block;
      font-size: 14px;
      line-height: 1.5;
      color: #1E1E2D;
      margin: 0 0 10px;
    }

    .textbox {
      font-size: 12px;
      line-height: 20px;
      color: #1E1E2D;

      p {
        margin: 0;
      }
    }
  }
  
  .Social_icons {
    margin: 0 -9px;

    @media (max-width: 575px) {
      margin: 0;
    }

    li {
      @media (max-width: 575px) {
        padding: 12px 14px;
      }
    }
  }

  .shareFormElements {
    overflow: hidden;

    .label {
      display: block;
      font-size: 10px;
      line-height: 15px;
      margin: 0 0 10px;
      color: #273746;
    }

    .text-input {
      margin: 0 0 15px;
      
      label {
        display: none;
      }

      .form-control {
        width: 100%;
        height: 36px;
        border-color: #E5E8EF;
        border-radius: 5px;
        font-size: 10px;
        line-height: 16px;
        color: #929BAA;
        padding: 8px 15px;
      }
    }

    .buttonGreen {
      width: 100%;
      display: block;
      background: #11C278;
      color: #fff;
      height: 32px;
      font-size: 10px;
      line-height: 16px;
      padding: 5px 10px;
      border-radius: 16px;

      &:hover {
        background: #000;
      }
    }
  }
`
