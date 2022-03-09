import styled from "styled-components"

export const FeedsContainer = styled.div`
  display: flex;
  /* height: 100%; */
`

export const LeftContainer = styled.div`
  /* background: #6e6c6c; */
  width: 70%;
  padding: 0px 2rem;
`
export const RightContainer = styled.div`
  /* background: lightgray; */
  width: 30%;
  /* height: 100%; */
`
export const StoriesWrapper = styled.div``

export const MainContentWrapper = styled.div``
export const SlidertWrapper = styled.div`
  display: flex;
`
export const AddStorie = styled.div`
  width: 100px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 5px;
  margin: 10px 5px;
`
export const FilterSection = styled.div`
  /* width: 100px; */
  /* height: 100%; */
  padding: 1rem;
  display: flex;

  justify-content: space-between;
  .sortBy {
    display: flex;
    align-items: center;
    span {
      margin-right: 1rem;
    }
  }
`
