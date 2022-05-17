import { BagIcon, CrossIcon, FeedIcon, SettingsHexaIcon, ShopIcon, SideHeartIcon, SignoutIcon, SmsIcon, StarIcon, UsereditIcon } from "@icons"
import styled from "styled-components"

type Props = {
  className?: string
  header?: boolean
  filterOption?: boolean
  title?: string
  onSearch?: (text?: string) => void
  onClose?: () => void
  value?: string
  activeFocus?: any
}

const ProfileDrawer = (props: Props) => {
  const { className, title = "Smart Search", onClose, header = true } = props
  return (
    <div className={className}>
      {header && (
        <div className="notification-header">
          <span className="userName">R</span>
          <h3>Ryandavid</h3>
          <div className="notification-header-close" onClick={onClose}>
            <CrossIcon />
          </div>
        </div>
      )}
      <div className="userDropdownArea">
        <div className="userDropdownBox">
          <ul className="userDropdownList">
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <SideHeartIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">Your Favorites & Followed Cooks</strong>
                  <span className="subtext">(Saved Recipes, Shopping Lists, and Cooks)</span>
                </div>
              </div>
            </li>
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <FeedIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">My Food Feed +</strong>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="userDropdownBox">
          <ul className="userDropdownList">
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <BagIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">My Shopping Lists</strong>
                </div>
              </div>
            </li>
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <StarIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">My Recipe Reviews</strong>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="userDropdownBox">
          <strong className="title">Account Settings</strong>
          <ul className="userDropdownList">
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <UsereditIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">Edit Your Public Profile</strong>
                </div>
              </div>
            </li>
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <SmsIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">Email & Newsletter Preferences</strong>
                </div>
              </div>
            </li>
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <SettingsHexaIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">Personalizations</strong>
                </div>
              </div>
            </li>
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <ShopIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">Shop Credit</strong>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="userDropdownBox">
          <ul className="userDropdownList">
            <li>
              <div className="linkHolder">
                <span className="icon">
                  <SignoutIcon />
                </span>
                <div className="textbox">
                  <strong className="subtitle">log Out</strong>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export const ProfileDrawerC = styled(ProfileDrawer)`
  position: relative;

  .notification-header-close {
    position: absolute;
    right: 0;
    top: 5px;
    transition: all 0.4s ease;
    cursor: pointer;

    @media (max-width: 767px) {
      right: 0;
    }

    &:hover {
      color: #e0464d;
      transform: rotate(180deg);

      path {
        fill: #e0464d;
      }
    }
  }

  .notification-header {
    display: flex;
    align-items: center;
    padding: 0 0 30px;

    .userName {
      width: 26px;
      height: 26px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #1e1e2d;
      font-size: 12px;
      line-height: 15px;
      font-weight: 400;
    }

    h3 {
      margin: 0 0 0 10px;
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
    }
  }

  .userDropdownArea {
    overflow: hidden;
  }

  .userDropdownBox {
    overflow: hidden;
    padding: 10px 0 0;

    + .userDropdownBox {
      border-top: 1px solid #E6E6E6;
      padding-top: 10px;
      margin-top: 5px;
    }

    .title {
      display: block;
      font-size: 10px;
      line-height: 16px;
      color: #999;
      margin: 15px 0;
    }
  }

  .userDropdownList {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #1E1E2D;

    li {
      margin: 0 0 5px;
      line-height: 0;

      .icon {
        width: 20px;
        height: 20px;
        min-width: 20px;
        display: flex;
        align-items: center;
        margin: 2px 20px 0 0;
      }

      .textbox {
        flex-grow: 1;
        flex-basis: 0;
      }

      .subtitle {
        display: block;
        font-size: 14px;
        line-height: 24px;
        color: #1E1E2D;
        transition: all 0.4s ease;
      }

      .subtext {
        display: block;
        font-size: 10px;
        line-height: 16px;
        color: rgba(30, 30, 45, 0.7);
      }

      .linkHolder {
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        align-items: flex-start;
        transition: all 0.4s ease;

        &:hover {
          background: #f8f8f8;
          
          .subtitle {
            color: #ff6067;
          }
        }
      }
    }
  }
`
