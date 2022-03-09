import styled from "styled-components"

export const InputContainer = styled.input`
    display: flex;
    align-items: center;
    /* padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`}; */
    font-size: ${({ theme }) => theme.fontSizes[2]};
    margin: 0;
    .leftIcon {
        margin-right: 0.3rem;
    }
    .rightIcon {
        margin-left: 0.3rem;
    }
    &:focus,
    &:active {
        border: none;
        outline: none;
    }
    border: none;
    outline: none;
    /* cursor: pointer; */
`
