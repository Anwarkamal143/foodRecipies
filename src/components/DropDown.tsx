import { Menu, Transition } from "@headlessui/react"
import { ReactElement, ReactNode, useState } from "react"
type ItemProps = { item: any; isActive: boolean; onClick?: any }
type IDropDownProps = {
  renderItem?: (props: ItemProps) => ReactElement | ReactNode
  className?: string
  items: any[]
  button?: (...args: any) => ReactElement | ReactNode
}

export function DropDown(props: IDropDownProps) {
  const { renderItem, className, items, button } = props
  const [selected, setSelected] = useState("Most Popular")
  return (
    <Menu as="div" className="relative">
      <Menu.Button>{button?.(selected, setSelected)}</Menu.Button>

      {/* Use the Transition component. */}
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute z-10 py-4 origin-top-right bg-white shadow-lg -right-3 w-52 rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none md:right-0 sortByFilterDrop">
          {items.map((item, i) => {
            return (
              <Menu.Item key={i}>
                {({ active }: { active: boolean }) =>
                  renderItem?.({ item, isActive: active, onClick: setSelected })
                }
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
