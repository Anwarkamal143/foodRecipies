import clsxm from "@Lib/clsxm"
import Link, { LinkProps } from "next/link"
import * as React from "react"

export type UnstyledLinkProps = {
  href: string
  children: React.ReactNode
  openNewTab?: boolean
  className?: string
  nextLinkProps?: Omit<LinkProps, "href">
} & React.ComponentPropsWithRef<"a">

const UnstyldLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith("/") && !href.startsWith("#")

    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a ref={ref} {...rest} className={className}>
            {children}
          </a>
        </Link>
      )
    }

    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
        className={clsxm("cursor-newtab", className)}
      >
        {children}
      </a>
    )
  }
)

export const UnstyledLink = UnstyldLink
