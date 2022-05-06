import { useEffect, useState } from "react"
import { toast } from "src/components/toaster"
import styled from "styled-components"
type IType = {
  className?: string
}
function HeartIconAnimtaed({ className }: IType) {
  const [like, setLikes] = useState(0)
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (like) setActive(true)

    setTimeout(() => {
      setActive(false)
    }, 800)
  }, [like])
  return (
    <div
      className={`${className} like`}
      onClick={() => {
        toast.save("Chicken Parmigiana with Ragu Palenta")
        setLikes(like + 1)
      }}
    >
      <svg
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9649 3.12832C8.29171 -2.5454 0.857422 0.545461 0.857422 6.72603C0.857422 11.3672 11.0494 18.6272 11.9649 19.5712C12.8866 18.6272 22.5717 11.3672 22.5717 6.72603C22.5717 0.592318 15.6449 -2.5454 11.9649 3.12832Z"
          fill={active ? "#f65c8a" : "#3E4373"}
        />{" "}
      </svg>
      <i className={`${active ? "count-motion" : ""} `}>{like}</i>
      <span className={`${active ? "bubble-motion" : ""} `}></span>
    </div>
  )
}
export default styled(HeartIconAnimtaed)`
  &.like {
    position: relative;
    cursor: pointer;
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    transition: all 0.3s ease;
    margin: -4px 0 0;

    &::after {
      z-index: -2;
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: #f6f6f8;
      border-radius: 12px;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    svg {
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      z-index: 3;

      path {
        transition: all 0.2s ease;
      }
    }

    &:hover {
      &::after {
        border-radius: 10px;
        background: #feeef3;
        transform: scale(0.88);
      }
      svg {
        path {
          fill: #f65c8a;
        }
      }
    }

    &:active {
      svg {
        transform: scale(0.6);
      }
    }
  }

  i {
    position: absolute;
    font-size: 12px;
    font-weight: 400;
    padding: 6px 10px;
    color: white;
    background: #f65c8a;
    border-radius: 24px;
    line-height: 12px;
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: -apple-system, sans-serif;
    font-style: normal;
  }

  .count-motion {
    z-index: 5;
    transform: translatey(-160%);
  }

  span {
    opacity: 1;
    z-index: -2;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 255, 255, 0) 0%,
      #feeff3 100%
    );
  }

  .bubble-motion {
    animation: bubbleMotion 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    z-index: 1;
  }

  .dr {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 100px;
  }
`
