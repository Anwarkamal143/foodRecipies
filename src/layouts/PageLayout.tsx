import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import NoSSR from "react-no-ssr"
import styled, { css } from "styled-components"

export type PageLayoutType = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  variant?: "small" | "regular"
  children: React.ReactNode | JSX.Element | React.ReactNode[]
  styles?: React.CSSProperties
  otherProps?: Record<string, unknown>
  nossr?: boolean
}
export const PageLayoutWrapper = styled.div<{ variant?: string }>`
  /* display: block;
    ${({ variant }) => {
    switch (variant) {
      case "small":
        return css`
          width: 50%;
        `
      case "regular":
        return css`
          width: 100%;
        `
    }
    return
  }} */
  padding: 0.5rem 0.5rem 0 0.5rem;
  height: 100%;
`

export function Page(props: PageLayoutType) {
  const {
    otherProps,
    variant = "regular",
    children,
    styles,
    nossr = false,
  } = props
  return nossr ? (
    <NoSSR>
      <PageLayoutWrapper variant={variant} style={styles} {...otherProps}>
        {children}
      </PageLayoutWrapper>
    </NoSSR>
  ) : (
    <PageLayoutWrapper variant={variant} style={styles} {...otherProps}>
      {children}
    </PageLayoutWrapper>
  )
}
