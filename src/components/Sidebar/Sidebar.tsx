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
        isSidebarOpen ? "w-96" : "w-40"
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
          className="flex-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-100"
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

export default styled(Sidebar)``
