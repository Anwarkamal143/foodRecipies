import styled from "styled-components"

export const DropDownItem = styled.div`
  color: black;
  padding: 15px;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  border-bottom: 1px solid #f1f1f4;

  &:last-child {
    border: none;
  }

  &:hover {
    background: #fafafa;
  }

  .user-status {
    display: block;
    color: #d0d0d0;
    font-size: 12px;
    line-height: 15px;
  }
`
