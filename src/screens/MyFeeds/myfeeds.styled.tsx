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
  padding: 0 10px;
  width: calc(100% - 297px);
  max-width: 800px;
  margin: 0 auto;

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

  @media (max-width: 767px) {
    flex-flow: row wrap;
  }
`
export const StoriesWrapper = styled.div``
export const FeedsWidget = styled.div`
  border: 1px solid #f2f3f5;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.02);
  margin: 0 0 20px;
  padding: 15px 10px;
  font-size: 12px;
  line-height: 15px;
  border-radius: 10px;

  @media (max-width: 1023px) {
    display: none !important;
  }

  .head {
    position: relative;
    padding: 0 30px 0 30px;
    margin: 0 0 10px;

    .img-icon {
      position: absolute;
      left: 10px;
      top: 0;
      width: 12px;

      svg,
      img {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }

  .content {
    padding: 5px 10px;
    font-size: 13px;
    line-height: 18px;
    transition: all 0.4s ease;
    color: #4b4b4b;

    &:hover {
      background: #f8f8f8;
    }
  }

  .link {
    font-weight: 400;
    transition: all 0.4s ease;

    &:hover {
      color: #e0464d;
    }
  }

  .close {
    position: absolute;
    right: 0;
    top: -5px;
    width: 24px;
    height: 24px;
    border: 1px solid #f2f3f5;
    border-radius: 100%;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    .close-icon {
      width: 14px;
      height: 14px;
      display: block;
      position: relative;

      &:after,
      &:before {
        position: absolute;
        height: 1px;
        left: 0;
        right: 0;
        content: "";
        background: #000;
        top: 7px;
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }
`

export const MainContentWrapper = styled.div``
export const SlidertWrapper = styled.div`
  display: flex;
`
export const AddStorie = styled.div`
  width: 120px;
  min-width: 120px;
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

  @media (max-width: 767px) {
    flex-flow: row wrap;
  }

  > div {
    @media (max-width: 767px) {
      width: 100%;
      order: 2;
    }

    button {
      @media (max-width: 767px) {
        display: block;
        width: 100%;
      }
    }
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
    display: none !important;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`
export const HeaderCooks = styled.div``
export const HeaderTitle = styled.h2``
export const HeaderRightSide = styled.span``
