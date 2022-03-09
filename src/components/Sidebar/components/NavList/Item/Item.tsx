import { ChevronDownSVG } from "@Icons"
import { INavItem } from "@Routes/routes"
import { isValidElement, useEffect, useState } from "react"
import { NavLink } from "src/components/NavLink"
import { useMathPath } from "src/hooks/useMathPath"
import styled from "styled-components"
type INavItemProps = INavItem & {
  className?: string
  anchorClass?: string
  itemClass?: string
  iconClass?: string
  isNested?: true | false
  activeClassName?: string
  inActiveClassName?: string
}

const Item = (props: INavItemProps) => {
  const {
    route = "",
    icon: Icon,
    className,
    name,
    anchorClass = "",
    itemClass = "",
    iconClass = "",
    isNested = false,

    ...rest
  } = props
  const { isActive } = useMathPath(props)

  return rest?.meta?.divider ? (
    <li className={`relative text-gray-500  item-${name} ${itemClass}`}>
      {Icon && (
        <div
          className={`absolute inset-y-0 left-0 flex items-center  pointer-events-none icon-${name} ${iconClass}`}
        >
          {Icon}
        </div>
      )}
      <span
        className={`inline-block w-full py-2  pr-4 text-xs rounded   link-${name} ${anchorClass}`}
      >
        {name}
      </span>
    </li>
  ) : (
    <li>
      <NavLink
        href={route}
        {...rest}
        className={`relative text-gray-500 cursor-pointer hover:text-white focus-within:text-white item-${name} ${itemClass}
        
        ${isActive ? "text-white" : ""}
        `}
      >
        <>
          {Icon && (
            <div
              className={`absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none icon-${name} ${iconClass}`}
            >
              {Icon}
            </div>
          )}
          <span
            className={`inline-block w-full py-2 ${
              isNested ? "pl-2" : "pl-8"
            } ${
              isActive ? "bg-gray-800 text-white" : ""
            } pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800 link-${name} ${anchorClass}`}
          >
            {name}
          </span>
        </>
      </NavLink>
    </li>
  )
}

export const NestedItems = (
  props: INavItemProps & { isNestedChild?: boolean }
) => {
  const [isOpen, setIsOpen] = useState(false)

  const { isActive } = useMathPath(props)
  const {
    route = "",
    icon: Icon,
    className,
    name,
    meta: { routes = [] },
    isNested = false,
    isNestedChild = false,
    ...rest
  } = props

  useEffect(() => {
    setIsOpen(isActive)
  }, [isActive])
  return (
    <li>
      <NavLink
        href={route}
        {...rest}
        onClick={() => {
          console.log("hello")
          setIsOpen(!isOpen)
        }}
      >
        <div
          className={`relative flex justify-between w-full text-gray-500 cursor-pointer hover:text-white  focus-within:text-white
          
          ${isActive ? "text-white" : ""}
          `}
        >
          <div className="flex items-center w-full">
            {Icon && (
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                {Icon}
              </div>
            )}
            <span
              className={`inline-block w-full py-2 ${
                isNestedChild ? "pl-2" : "pl-8"
              } ${
                isActive ? "bg-gray-800 text-white" : ""
              } pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800`}
            >
              {name}
            </span>
          </div>
          <button
            type="button"
            className={`absolute right-0 flex items-center p-1 ${
              isActive ? "text-white" : ""
            }`}
            tabIndex={-1}
          >
            <ChevronDownSVG />
          </button>
        </div>
      </NavLink>
      {isOpen && (
        // <div className="">
        <ul className="flex flex-col pt-2 pl-4 space-y-1 text-gray-500 border-l border-gray-700">
          {routes?.map(r => {
            let Icon: any = r.icon
            const {
              meta: { hasChilds = false },
            } = r
            if (Icon && isValidElement(<Icon />)) {
              Icon = <Icon />
            }
            return hasChilds ? (
              // <ul>
              <NestedItems {...r} icon={Icon} isNested isNestedChild />
            ) : (
              // </ul>
              <Item {...r} icon={Icon} isNested />
            )
          })}
        </ul>
        // </div>
      )}
    </li>
  )
}
export default styled(Item)``
