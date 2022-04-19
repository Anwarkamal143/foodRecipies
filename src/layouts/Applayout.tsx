// import { Header, Sidebar } from "@Components"
import { StyledLayoutWrapper } from "@styled"
import { ComponentType, ReactElement, ReactNode } from "react"
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
export const getLayout = (page: ReactElement | ReactNode | ComponentType) => <AppLayout>{page}</AppLayout>