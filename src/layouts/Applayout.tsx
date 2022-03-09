// import { Header, Sidebar } from "@Components"
import { StyledLayoutWrapper } from "@Styled"
import { MainContentWrapper } from "./applayout.styled"

export type LayoutType = {
  variant?: "small" | "regular"
  children: React.ReactNode | JSX.Element | React.ReactNode[]
  styles?: React.CSSProperties
  otherProps?: Record<string, unknown>
}

export function AppLayout(props: LayoutType) {
  const { otherProps, children, styles } = props
  return (
    <StyledLayoutWrapper>
      {/* <AppLayoutWrapper style={styles} {...otherProps}>
        <MainContainer> */}
      <MainContentWrapper>{children}</MainContentWrapper>
      {/* </MainContainer>
      </AppLayoutWrapper> */}
    </StyledLayoutWrapper>
  )
}
