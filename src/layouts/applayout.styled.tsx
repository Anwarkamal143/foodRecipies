import styled from "styled-components"
export const AppLayoutWrapper = styled.div``
export const MainContainer = styled.div`
  display: flex;
  /* height: calc(100vh - 4rem); */
  height: 100%;
  width: 100%;
`
export const MainContentWrapper = styled.div`
  /* flex: 1; */
  width: 100%;
`
export const MainContentSectionWrapper = styled.div`
  /* margin-top: 4rem; */
  margin-top: 6.2rem;
  display: flex;
  width: 100%;
  overflow: hidden;

  @media (max-width: 1023px) {
    margin-top: 112px;
  }

  @media (max-width: 767px) {
    margin-top: 84px;
  }
`
