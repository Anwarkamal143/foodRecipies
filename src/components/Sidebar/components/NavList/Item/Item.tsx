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
    <li className={`sidebarListTitle item-${name} ${itemClass}`}>
      {Icon && (
        <div
          className={`sidebarListIcon icon-${name} ${iconClass}`}
        >
          {Icon}
        </div>
      )}
      <span
        className={`link-${name} ${anchorClass}`}
      >
        {name}
      </span>
    </li>
  ) : (
    <li>
      <NavLink
        href={route}
        {...rest}
        className={`item-${name} ${itemClass}`}
      >
        <>
          {Icon && (
            <div
              className={`sidebarListIcon icon-${name} ${iconClass}`}
            >
              {Icon}
            </div>
          )}
          <span
            className={`link-${name} ${anchorClass}`}
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
          className={``}
        >
          <div className="flex items-center w-full">
            {Icon && (
              <div className="sidebarListIcon">
                {Icon}
              </div>
            )}
            <span
              className={` ${
                isNestedChild ? "" : ""
              } ${
                isActive ? "" : ""
              } `}
            >
              {name}
            </span>
          </div>
          <button
            type="button"
            className={`sidebarListOpener ${
              isActive ? "" : ""
            }`}
            tabIndex={-1}
          >
            <ChevronDownSVG />
          </button>
        </div>
      </NavLink>
      {isOpen && (
        // <div className="">
        <ul className="sidebarListNasted">
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
