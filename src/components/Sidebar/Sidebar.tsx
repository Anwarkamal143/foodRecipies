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
          className="flex-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-100 pt-0"
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
.userWidget {
  width: 100%;
  border: 1px solid #f2f3f5;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 18px 20px;

  .userWidgetWrap {
    width: 100%;
    display: flex;
    align-items: center;
    padding-right: 15px;
  }

  .userWidgetImage {
    width: 34px !important;
    height: 34px !important;
    border: 0 !important;
    margin: 0 20px 0 0;
  }

  .userWidgetText {
    flex-grow: 1;
    flex-basis: 0;
  }

  .userWidgetName {
    font-size: 14px;
    line-height: 18px;
    color: #1e1e2d;
    display: block;
  }

  .userWidgetDesignation {
    font-size: 10px;
    line-height: 14px;
    color: #1e1e2d;
    display: block;
  }

  .userWidgetDropdown {
    right: -20px;
  }
}

.sidebarList {
  overflow: hidden;

  .sidebarListTitle {
    text-transform: uppercase;
  }

  .sidebarListTitle {
    padding-top: 5px;

    &:first-child {
      padding-top: 0;
    }
    
    span {
      color: #7474a9;
      font-size: 10px;
      line-height: 14px;
      font-weight: 600;
    }
  }

  li {
    + li {
      margin-top: 8px;
    }
    
    a {
      display: flex;
      align-items: center;
      position: relative;
      color: #7474a9;

      span {
        display: block;
        font-size: 14px;
        line-height: 18px;
        width: 100%;
        padding: 8px 15px 10px 34px;
      }

      .sidebarListIcon {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      svg {
        width: 18px;
        height: 18px;
      }

      &:hover,
      &.active {
        color: #e0464d;

        svg {
          path {
            stroke: #e0464d;
          }
        }
      }
    }

    .sidebarListOpener {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

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
      background: #7474a9;
      content: '';
    }

    &:after {
      position: absolute;
      top: 16px;
      left: 3px;
      width: 5px;
      height: 5px;
      content: '';
      border-radius: 100%;
      background: #7474a9;
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
      }
    }
  }
}
`
