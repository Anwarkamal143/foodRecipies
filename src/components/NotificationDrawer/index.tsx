import { CrossIcon } from "@icons"
import { useState } from "react"
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

const NotificationDrawer = (props: Props) => {
  const {
    className,
    filterOption = false,
    title = "Smart Search",
    onSearch,
    onClose,
    header = true,
    value,
    activeFocus,
  } = props
  const [searchText, setSearchText] = useState("")
  const [filter, setFilter] = useState(false)
  const handleSearch = (searchTextt: string) => {
    onSearch?.(searchTextt)
  }

  return (
    <div className={className}>
      {header && (
        <div className="notification-header">
          <span className="userName">R</span>
          <h3>{title}</h3>
          <div className="notification-header-close" onClick={onClose}>
            <CrossIcon />
          </div>
        </div>
      )}
      <div className="notifications-area">
        <div className="notification-box">
          <strong className="notification-title">New Notifications</strong>
          {[1, 1].map((value, idx) => (
            <div key={idx} className="notification-row new-notifcation">
              <div className="user-image-area">
                <div className="user-image">
                  <img src="/images/profile-img.png" alt="lsjf-skfl" />
                </div>
                <div className="reaction-type">
                  <img src="images/userfollow.svg" alt="userfollow.svg" />
                </div>
              </div>
              <div className="text-holder">
                <p>
                  <strong>Gloria Merine</strong> Liked your reviews
                </p>
                <span className="time-posted">a week ago</span>
              </div>
              <span className="alert-sign"></span>
            </div>
          ))}
        </div>
        <div className="notification-box">
          <strong className="notification-title">Older Notifications</strong>
          {[1, 1].map((value, idx) => (
            <div key={idx} className="notification-row">
              <div className="user-image-area">
                <div className="user-image">
                  <img src="/images/profile-img.png" alt="lsjf-skfl" />
                </div>
                <div className="reaction-type">
                  <img src="images/userfollow.svg" alt="userfollow.svg" />
                </div>
              </div>
              <div className="text-holder">
                <p>
                  <strong>Gloria Merine</strong> Liked your reviews
                </p>
                <span className="time-posted">a week ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export const SearchHeader = styled(NotificationDrawer)`
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

  .notification-box {
    position: relative;
    overflow: hidden;
  }

  .notification-title {
    display: block;
    font-size: 12px;
    line-height: 15px;
    color: #8d8d96;
    padding: 0 0 10px;
    border-bottom: 1px solid #e6e6e6;
    margin: 0 0 10px;
  }

  .notification-row {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0 0 10px;
    font-size: 15px;
    line-height: 18px;
    border-radius: 10px;
    color: #3b3b3b;
    cursor: pointer;

    &:hover {
      background: #f8f8f8;
    }

    .user-image-area {
      width: 40px;
      height: 40px;
      position: relative;

      .user-image {
        width: 100%;
        height: 100%;
        object-fit: cover;

        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }

      .reaction-type {
        width: 18px;
        position: absolute;
        right: -4px;
        bottom: -4px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .text-holder {
      padding: 0 0 0 10px;
      width: calc(100% - 80px);
    }

    strong {
      font-weight: 700;
    }

    .time-posted {
      font-size: 13px;
      line-height: 15px;
      display: block;
      color: #3877e9;
    }
  }

  .alert-sign {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #3677eb;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
`
