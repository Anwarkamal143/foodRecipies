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
  padding: 20px 20px 20px 270px;
  height: 100%;
  width: 100%;

  @media (max-width: 1199px) {
    padding: 20px 20px 20px 220px;
  }

  @media (max-width: 767px) {
    padding: 15px 15px 60px;
  }

  .button.button-sm.buttonFilter {
    background: #fff;
    border-color: #e5e8ef;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 107px;

    svg {
      margin: 0;
    }

    .text-button {
      padding: 0 5px;
      color: #7474a9;

      + svg {
        margin-top: 2px;
      }
    }

    &:hover {
      background: #e5e8ef;
    }
  }

  .sortByFilter {
    @media (max-width: 767px) {
      order: 1;
      display: block !important;
      width: 100%;
      margin: 0 0 10px;
    }
    
    .sortByFilterlbl {
      font-size: 12px;
      color: #7474a9;
      line-height: 20px;

      @media (max-width: 767px) {
        display: block;
        width: 100%;
        margin: 0 0 10px;
      }
    }

    button {
      @media (max-width: 767px) {
        display: block;
        width: 100%;
      }
    }

    .sortByFilterDrop {
      margin-top: 0 !important;

      .item {
        padding: 5px 20px;
        font-size: 12px;
        line-height: 20px;
        color: #7474a9;
        cursor: pointer;
        transition: all 0.4s ease;

        &:hover {
          background: #e5e8ef;
        }
      }
    }
  }
  
  .postFeed.feedsWidget {
    border-radius: 20px;
    border-color: #f2f3f5;

    @media (max-width: 767px) {
      padding: 10px;
    }
  }
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
