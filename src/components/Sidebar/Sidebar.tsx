import { useState } from "react"
import styled from "styled-components"
import { Scrollbar } from "../Scrollbar"
import Header from "./Header"
import Main from "./Main"
import SectionWrapper from "./Section"
import { SidebarContainer } from "./sidebar.styled"

const Sidebar = ({ className }: { className?: string }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <SidebarContainer
      className={`text-gray-300 flex flex-col  ease-linear duration-75 transition-all ${className} ${
        // isSidebarOpen ? "w-60" : "w-40"
        isSidebarOpen ? "" : ""
      }`}
    >
      <Scrollbar>
        {/* <SectionWrapper className="h-[7vh]"> */}
        <SectionWrapper>
          <Header
            isSidebarOpen={isSidebarOpen}
            onSideBarToggle={setIsSidebarOpen}
          />
        </SectionWrapper>
        {/* <SectionWrapper className="pt-0" division bottom>
          <Search />
        </SectionWrapper> */}
        <SectionWrapper
          // className=" max-h-[78vh]  overflow-y-scroll"
          // className="overflow-y-scroll h-[75vh]"
          className="flex-1 pt-0 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-100"
        >
          {/* <Main className="h-[73vh]" /> */}
          <Main />
        </SectionWrapper>

        {/* <SectionWrapper className="justify-self-end h-[5vh]"> */}
        {/* <Footer className="mt-auto justify-self-end" /> */}
        {/* </SectionWrapper> */}
      </Scrollbar>
    </SidebarContainer>
  )
}

export default styled(Sidebar)`
  .px-5.py-5.undefined {
    @media (max-width: 767px) {
      display: none;
    }
  }

  button {
    box-shadow: none !important;
    outline: none !important;
  }

  .userWidget {
    width: 100%;
    border: 1px solid #f2f3f5;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 18px 20px;

    @media (max-width: 1199px) {
      padding: 12px 10px;
      margin: 0 -5px;
      width: calc(100% + 10px);
    }

    @media (max-width: 767px) {
      display: none;
    }

    .sortByFilterDrop {
      right: -20px !important;

      .item {
        font-size: 14px;
      }
    }

    .userWidgetWrap {
      width: 100%;
      display: flex;
      align-items: center;
      padding-right: 15px;

      @media (max-width: 1199px) {
        padding-right: 10px;
      }
    }
    .userWidgetImage {
      width: 34px !important;
      min-width: 34px;
      height: 34px !important;
      border: 0 !important;
      margin: 0 20px 0 0;

      @media (max-width: 1199px) {
        margin: 0 10px 0 0;
      }
    }

    .userWidgetText {
      flex-grow: 1;
      flex-basis: 0;
      text-align: left;

      @media (max-width: 767px) {
        display: none;
      }
    }

    .userWidgetName {
      font-size: 14px;
      line-height: 18px;
      color: #4b4b4b;
      display: block;
    }

    .userWidgetDesignation {
      font-size: 10px;
      line-height: 14px;
      color: #4b4b4b;
      display: block;
    }

    .userWidgetDropdown {
      right: -20px;
    }
  }

  .sidebarList {
    padding-bottom: 80px;

    @media (max-width: 1199px) {
      margin: 0 -5px;
    }

    @media (max-width: 767px) {
      display: flex;
      margin: 0;
      padding-bottom: 0;
    }

    .sidebarListTitle {
      text-transform: uppercase;
    }

    .sidebarListTitle {
      padding-top: 5px;

      @media (max-width: 767px) {
        display: none;
      }

      &:first-child {
        padding-top: 0;
      }

      span {
        color: #7b7b7b;
        font-size: 10px;
        line-height: 14px;
        font-weight: 400;
      }
    }

    li {
      @media (max-width: 767px) {
        min-width: 20%;
        padding: 3px 0 0;
      }

      + li {
        margin-top: 8px;

        @media (max-width: 767px) {
          margin-top: 0;
        }
      }

      a {
        display: flex;
        align-items: center;
        position: relative;
        color: #7b7b7b;

        @media (max-width: 767px) {
          width: 100%;
          height: 50px;
          justify-content: center;
        }

        &:after {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 25px;
          background: #e0464d;
          content: "";
          display: none;

          @media (max-width: 1199px) {
            right: -15px;
          }

          @media (max-width: 767px) {
            top: auto;
            bottom: -3px;
            left: 0;
            width: 100%;
            transform: none;
            height: 2px;
          }
        }

        &:hover {
          span {
            opacity: 1;
            visibility: visible;
          }
        }

        span {
          display: block;
          font-size: 14px;
          line-height: 18px;
          width: 100%;
          padding: 8px 15px 10px 34px;
          font-weight: 400;

          @media (max-width: 1199px) {
            padding: 8px 15px 10px 28px;
          }

          @media (max-width: 767px) {
            position: absolute;
            left: 50%;
            width: auto;
            display: inline-block;
            white-space: nowrap;
            background: #e0464d;
            color: #fff;
            font-size: 8px;
            line-height: 12px;
            padding: 2px 5px;
            font-weight: 400;
            border-radius: 4px;
            top: -4px;
            letter-spacing: 0.5px;
            transform: translate(-50%, 0);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
          }
        }

        .sidebarListIcon {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);

          @media (max-width: 767px) {
            position: static;
            transform: none;
          }

          &.cooks {
            margin: 0 -3px;

            @media (max-width: 767px) {
              margin: 7px 0 0;
            }

            svg {
              width: 22px;
              height: 22px;

              @media (max-width: 767px) {
                width: 28px;
                height: 28px;
              }
            }
          }
        }

        svg {
          width: 18px;
          height: 18px;

          @media (max-width: 767px) {
            width: 24px;
            height: 24px;
          }

          path {
            stroke: #7b7b7b;
          }
        }

        &:hover,
        &.active {
          color: #e0464d;

          svg {
            path {
              stroke: #e0464d;

              @media (max-width: 767px) {
                stroke: #7b7b7b;
              }
            }
          }
        }

        &:hover {
          @media (max-width: 767px) {
            background: rgba(0, 0, 0, 0.03);
            border-radius: 10px;
          }
        }

        &.active {
          @media (max-width: 767px) {
            color: #e0464d;
          }

          svg {
            path {
              @media (max-width: 767px) {
                stroke: #e0464d;
              }
            }
          }

          &:after {
            display: block;
          }
        }
      }
      .sidebarListOpener {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);

        @media (max-width: 767px) {
          display: none;
        }

        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
  .sidebarListNasted {
    border: 0;
    margin-top: 8px;
    position: relative;

    @media (max-width: 767px) {
      display: none;
    }

    li {
      position: relative;

      + li {
        margin-top: 0;
      }

      &:before {
        width: 1px;
        position: absolute;
        left: 5px;
        top: 0;
        bottom: 0;
        background: #7b7b7b;
        content: "";
      }

      &:after {
        position: absolute;
        top: 16px;
        left: 3px;
        width: 5px;
        height: 5px;
        content: "";
        border-radius: 100%;
        background: #7b7b7b;
        display: none;
      }

      &:first-child {
        &:before {
          top: 18px;
        }

        &:after {
          display: block;
        }
      }

      &:last-child {
        &:before {
          bottom: 14px;
        }

        &:after {
          top: auto;
          bottom: 12px;
          display: block;
        }
      }

      a {
        span {
          font-size: 12px;
          line-height: 16px;
          padding: 10px 15px 10px 34px;
          @media (max-width: 1199px) {
            padding: 10px 15px 10px 28px;
          }
        }
      }
    }
  }

  .sidebarList > li:nth-last-child(2),
  .sidebarList > li:last-child {
    @media (min-width: 768px) {
      position: fixed;
      left: 15px;
      width: 170px;
      bottom: 0;
      background: #fff;
    }

    @media (min-width: 1200px) {
      left: 20px;
      width: 210px;
    }
  }

  .sidebarList > li:nth-last-child(2) {
    @media (min-width: 768px) {
      bottom: 50px;
      padding-top: 10px;
      padding-bottom: 4px;
    }
  }

  .sidebarList > li:last-child {
    @media (min-width: 768px) {
      padding-top: 4px;
      padding-bottom: 10px;
    }
  }
`
