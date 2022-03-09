import styled from "styled-components"

export const SliderItem = styled.div`
  position: relative;
  font-size: 1rem;
`
export const SliderItemContentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  img {
    width: 30px;
  }
  span {
    color: white;
    font-size: 0.8em;
  }
`
