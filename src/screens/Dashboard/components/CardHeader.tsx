import { StikcyDropDown } from "@components"
import { VerticalDots } from "@icons"
import React, { ReactElement, ReactNode } from "react"
type Iheaderprops<T> = {
  items: T[]
  renderKey?: keyof T
  renderItem?: (props: any) => ReactElement | ReactNode
  triggerItem?: (props: any) => ReactElement | ReactNode
  title?: string
  className?: string
}

export function CardHeader<T>(props: Iheaderprops<T>) {
  const { renderItem, triggerItem, title, items, className } = props
  return (
    <div className={className}>
      {title && <p>{title} </p>}
      <StikcyDropDown
      className="dotsDrop"
        button={props =>
          triggerItem ? (
            triggerItem?.({ ...props })
          ) : (
            <VerticalDots
              onClick={props.handleToggle}
              ref={props.ref}
              {...props}
            />
          )
        }
        items={items}
        renderItems={props => {
          const { items = [] } = props
          return items.map((item: any, ind: number) => {
            return renderItem?.({ item, ...props, index: ind })
          })
        }}
      />
    </div>
  )
}
