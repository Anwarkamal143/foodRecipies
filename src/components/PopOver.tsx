import { Popover } from "@headlessui/react"
import React, { cloneElement, ReactElement, ReactNode } from "react"

type IPopOverProps = {
  children: ReactElement
  button: ReactNode | HTMLElement | string | ReactElement
}

export function PopOver(props: IPopOverProps) {
  const { button, children } = props
  return (
    <Popover className="relative">
      <Popover.Button>{button ? button : "Select"}</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          {/* <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a> */}
          {cloneElement(children, {})}
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  )
}
