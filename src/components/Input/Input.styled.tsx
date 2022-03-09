import styled, { css } from "styled-components"
export const InputContainer = styled.div`
  .right {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.rightIcon {
    input {
      padding-right: 3rem;
    }
  }
  &.leftIcon {
    input {
      padding-left: 1.2rem;
    }
  }
  .left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
export const ErrorWrapper = styled.p`
  color: ${({ theme }) => theme.colors.red};
`
export const InputWrapper = styled.div<{
  width?: string | number
  type?: string
}>`
  border-radius: 5px;
  position: relative;
  border: 1px solid gray;
  /* border: 1px solid gray; */
  /* padding: 1rem; */
  /* display: flex; */
  /* align-items: center; */
  font-size: 1.2rem;
  ${({ width }) => {
    if (typeof width === "string") {
      return css`
        width: ${width};
      `
    }
    if (typeof width === "number") {
      return css`
        width: ${width}px;
      `
    }
  }}
  &.w-5 {
    width: 5%;
  }
  &.w-10 {
    width: 10%;
  }
  &.w-15 {
    width: 15%;
  }
  &.w20 {
    width: 20%;
  }
  &.w-25 {
    width: 25%;
  }
  &.w-30 {
    width: 30%;
  }
  &.w-35 {
    width: 35%;
  }
  &.w-40 {
    width: 40%;
  }
  &.w-45 {
    width: 45%;
  }
  &.w-50 {
    width: 50%;
  }
  &.w-55 {
    width: 55%;
  }
  &.w-60 {
    width: 60%;
  }
  &.w-65 {
    width: 65%;
  }
  &.w-70 {
    width: 70%;
  }
  &.w-75 {
    width: 75%;
  }
  &.w-80 {
    width: 80%;
  }
  &.w-85 {
    width: 85%;
  }
  &.w-90 {
    width: 90%;
  }
  &.w-95 {
    width: 95%;
  }
  &.w-100 {
    width: 100%;
  }
  i.left,
  svg.left {
    /* margin-right: 0.5rem; */
    width: 2rem;
  }
  i.right,
  svg.right {
    width: 2rem;
    margin-right: 3px;
    /* margin-left: 0.5rem; */
  }
`
export const InputElWrapper = styled.div`
  width: 100%;
`
export const InputEl = styled.input`
  border-radius: 5px;
  border: none;
  outline: none;
  width: 100%;
  color: currentColor;
  color: inherit;
  padding: 1rem;
  padding-right: 3px;
  /* padding-left: 0.5rem;
    padding-right: 0.5rem; */
  font-size: inherit;
`
export const TextAreaContainer = styled.div``
export const TextAreaWrapper = styled.div``
