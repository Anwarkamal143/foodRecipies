import clsxm from "@lib/clsxm"
import * as React from "react"
import { UnstyledLink, UnstyledLinkProps } from "./UnstyledLink"

const ULink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "block text-sm font-medium text-dark hover:underline hover:decoration-inherit",
          className
        )}
      >
        {children}
      </UnstyledLink>
    )
  }
)

export const UnderlineLink = ULink
