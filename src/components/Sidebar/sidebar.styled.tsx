import styled from "styled-components"

export const SidebarContainer = styled.div`
  /* flex: 1; */
  /* 50 for header and 10 for margin top = 60px */
  height: calc(100vh - 4rem);
  /* height: 100%; */
  overflow: auto;
  /* background-color: rgb(251, 251, 255); */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  top: 4rem;
  border-right: 1px solid #f2f3f5;
  /* width: 25em; */
  width: 250px;
  min-width: 250px;

  @media (max-width: 1199px) {
    width: 200px;
    min-width: 200px;
  }
`
