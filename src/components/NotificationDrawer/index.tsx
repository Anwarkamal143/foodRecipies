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
        <div className="searchHeaderHeading">
          <span className="userName">R</span>
          <h3>{title}</h3>
          <div className="searchHeaderClose" onClick={onClose}>
            <CrossIcon />
          </div>
        </div>
      )}
      <div className="searchHeaderForm">
        <div>
          New Notifications
          <hr />
          {[1, 1].map((value, idx) => (
            <div key={idx}>
              <div>
                <img src="/images/profile-img.png" alt="lsjf-skfl" />
                <img src="images/userfollow.svg" alt="userfollow.svg" />
              </div>
              <span>
                <strong>Gloria Merine</strong>
                Liked your reviews
              </span>
              <span>a week ago</span>
              <span />{" "}
            </div>
          ))}
        </div>
        <div>
          Older Notifications
          <hr />
          {[1, 1].map((value, idx) => (
            <div key={idx}>
              <div>
                <img src="/images/profile-img.png" alt="lsjf-skfl" />
                <img src="images/userfollow.svg" alt="userfollow.svg" />
              </div>
              <span>
                <strong>Gloria Merine</strong>
                Liked your reviews
              </span>
              <span>a week ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export const SearchHeader = styled(NotificationDrawer)`
  .searchHeaderHeading {
    overflow: hidden;
    text-align: center;
    position: relative;
    margin: 0 0 25px;

    @media (max-width: 767px) {
      text-align: left;
    }

    h3 {
      font-size: 16px;
      line-height: 20px;
      color: #e0464d;
    }

    .searchHeaderClose {
      position: absolute;
      right: 25px;
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
  }

  .searchHeaderForm {
    position: relative;

    label {
      display: none;
    }

    .form-control {
      width: 100%;
      height: 34px;
      font-size: 12px;
      line-height: 18px;
      padding: 7px 70px 7px 18px;
      color: #8d8d96;
      border: 1px solid #ff6067;
      border-radius: 20px;
    }

    .input-active {
      .form-control {
        border-color: #ff6067;
      }
    }

    .clearsearchbtn {
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      width: 9px;
      height: 9px;
      pointer-events: none;

      path {
        fill: #bdbdbd;
      }
    }

    .searchIcon,
    .active_search {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ff6067;
      border-radius: 0 20px 20px 0;
      transition: all 0.4s ease;
      cursor: pointer;

      &:hover {
        background: #000;
      }

      svg {
        width: 14px;
        height: 14px;

        path {
          fill: #fff;
        }
      }
    }
  }

  .filterButtons {
    display: none;
  }
`
