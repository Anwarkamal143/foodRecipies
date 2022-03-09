import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"

export type StyledTypes = {
  children: ReactNode | JSX.Element
}

export function StyledLayoutWrapper(props: StyledTypes) {
  const { children } = props
  // console.log({ theme })
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      {children}
    </ThemeProvider>
  )
}
