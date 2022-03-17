import styled from "styled-components"

export const FeedsContainer = styled.div`
  display: flex;
  /* height: 100%; */
  @media (max-width: 1023px) {
    flex-flow: row wrap;
  }
`

export const LeftContainer = styled.div`
  /* background: #6e6c6c; */
  /* width: 70%; */
  padding: 0 30px 0 10px;
  width: calc(100% - 297px);

  @media (max-width: 1199px) {
    width: calc(100% - 250px);
    padding: 0 20px 0 0;
  }
  @media (max-width: 1023px) {
    width: 100%;
    padding: 0;
  }
`
export const RightContainer = styled.div`
  /* background: lightgray; */
  /* width: 30%; */
  /* height: 100%; */
  width: 297px;
  min-width: 297px;
  @media (max-width: 1199px) {
    width: 250px;
    min-width: 250px;
  }
  @media (max-width: 1023px) {
    width: 100%;
    min-width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
export const StoriesWrapper = styled.div``

export const MainContentWrapper = styled.div``
export const SlidertWrapper = styled.div`
  display: flex;
`
export const AddStorie = styled.div`
  width: 120px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 7px 0 0;
  height: 165px;
  padding: 18px;
  background: linear-gradient(
    180deg,
    rgba(42, 48, 67, 0.05) 0%,
    rgba(42, 48, 67, 0.06) 100%
  );
  border: 1px solid #f2f3f5;
  border-radius: 15px;
  font-size: 14px;
  line-height: 18px;
  color: #1e1e2d;
  svg {
    margin-bottom: 10px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 8px;
    padding: 3px;
    display: block;
  }
`
export const FilterSection = styled.div`
  /* width: 100px; */
  /* height: 100%; */
  padding: 35px 35px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1023px) {
    padding: 35px 0 25px;
  }
  .sortBy {
    display: flex;
    align-items: center;
    span {
      margin-right: 1rem;
    }
  }
`
export const SuggestedCooksSection = styled.div`
  width: 100%;
  @media (max-width: 1023px) {
    width: 48.5%;
  }
`
export const HeaderCooks = styled.div``
export const HeaderTitle = styled.h2``
export const HeaderRightSide = styled.span``
