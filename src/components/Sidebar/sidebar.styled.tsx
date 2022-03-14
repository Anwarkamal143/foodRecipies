import styled from "styled-components"

export const SidebarContainer = styled.div`
  /* flex: 1; */
  /* 50 for header and 10 for margin top = 60px */
  height: calc(100vh - 4rem);
  /* height: 100%; */
  overflow: auto;
  /* background-color: rgb(251, 251, 255); */
  position: sticky;
  top: 4rem;
  border-right: 1px solid #f2f3f5;
  /* width: 25em; */
  width: 250px;
  min-width: 250px;
`
