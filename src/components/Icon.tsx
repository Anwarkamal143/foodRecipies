import { cloneElement, DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import styled from "styled-components"

export type IIconProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  children: React.ReactNode | JSX.Element | React.ReactNode[]
  styles?: React.CSSProperties
  otherProps?: Record<string, unknown>
  className?: string
}
function IconComp(props: IIconProps) {
  const { otherProps, children, styles, className } = props
  return (
    <span className={className} {...otherProps} style={styles}>
      {cloneElement(children as any, {})}
    </span>
  )
}

export const Icon = styled(IconComp)`
  border: 1px solid lightgray;
  border-radius: 100%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 0.5em;
  }
  svg {
    width: 2em;
    height: 2em;
  }
`
