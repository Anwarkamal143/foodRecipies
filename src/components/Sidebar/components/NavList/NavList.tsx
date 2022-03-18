import { ADMINROUTES, INavItem } from "@routes/routes"
import { isValidElement } from "react"
import styled from "styled-components"
import { Item, NestedItems } from "./Item"

type INavListProps = {
  routes?: INavItem[]
  className?: string
}
const NavList = (props: INavListProps) => {
  const { className, routes = ADMINROUTES } = props
  return (
    <ul className={`sidebarList ${className}`}>
      {routes?.map(r => {
        let Icon: any = r.icon
        const {
          meta: { hasChilds = false, divider = false },
        } = r
        if (Icon && isValidElement(<Icon />)) {
          Icon = <Icon />
        }
        return hasChilds ? (
          <NestedItems {...r} icon={Icon} key={r.route} isNested={true} />
        ) : (
          <Item {...r} icon={Icon} key={r.route} />
        )
      })}
    </ul>
  )
}

export default styled(NavList)``
