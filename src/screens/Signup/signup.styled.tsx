import styled from "styled-components"

export const SignupContainer = styled.div`
  flex: 1;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  .signUpHeader {
    margin-left: auto;
  }
`
export const SignupFormWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  .signupform {
    width: 60%;
    .heading {
      margin-bottom: 1rem;
    }
    p {
      padding: ${({ theme }) => theme.space["1.2"]} 0;
      font-weight: bold;
      font-size: 1em;
    }
    button {
      margin-top: ${({ theme }) => theme.space["1.2"]};
    }
  }
  .social_icons {
    padding: 2rem 0;
    display: flex;
    > div:not(:last-child) {
      margin-right: 2rem;
    }
    svg {
      cursor: pointer;
    }
    svg:not(:last-child) {
      margin-right: 2rem;
    }
  }
  .signup-input {
    margin-bottom: ${({ theme }) => theme.space["1.4"]};
  }
`
