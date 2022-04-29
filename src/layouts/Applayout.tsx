// import { Header, Sidebar } from "@Components"
import { Navbar, Sidebar } from "@components"
import { StyledLayoutWrapper } from "@styled"
import { cloneElement, ComponentType, ReactElement, ReactNode } from "react"
import { AppLayoutWrapper, MainContainer, MainContentSectionWrapper, MainContentWrapper } from "./applayout.styled"

export type LayoutType = {
  variant?: "small" | "regular"
  children: React.ReactNode | JSX.Element | React.ReactNode[]
  styles?: React.CSSProperties
  otherProps?: Record<string, unknown>,
  sidebar?: boolean
}

export function AppLayout(props: LayoutType) {
  const { otherProps, children, styles, sidebar = true, ...rest } = props

  console.log({props})

  return (
    <StyledLayoutWrapper>
      <AppLayoutWrapper style={styles} {...otherProps}>
        <MainContainer>
          <Navbar />
           <MainContentSectionWrapper>
              {sidebar && <Sidebar className="Sidebar" />}
                  <MainContentWrapper>
                    {cloneElement(children as any, {...rest, sidebar, styles, otherProps})}
                  </MainContentWrapper>
            </MainContentSectionWrapper>
      </MainContainer>
      </AppLayoutWrapper>
    </StyledLayoutWrapper>
  )
}
export const getLayout = (page: ReactElement | ReactNode | ComponentType) => <AppLayout>{page}</AppLayout>