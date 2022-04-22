import { ProfileSteps } from "@components"
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import { DashboardWrapper } from "./dashboard.styled"

export type PageLayoutType = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  children: React.ReactNode | JSX.Element | React.ReactNode[]
  styles?: React.CSSProperties
  otherProps?: Record<string, unknown>
  nossr?: boolean
}

export function DashboardLayout(props: PageLayoutType) {
  const {
    otherProps,

    children,
    styles,
    nossr = false,
    ...rest
  } = props
  return (
    // <Page>
      <DashboardWrapper style={styles} {...otherProps} {...(rest as any)}>
        <ProfileSteps />
        {children}
      </DashboardWrapper>
    // </Page>
  )
}
