import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { cloneElement, FC } from "react"

type INavLinkPorps = LinkProps & {
  exact?: true | false
  className?: string
  activeClassName?: string
  inActiveClassName?: string
  matchQueryString?: true | false
  [key: string]: any
  onClick?: (...args: any) => void
}

const NavLink: FC<INavLinkPorps> = (props: INavLinkPorps) => {
  const {
    exact,
    className,
    href,
    activeClassName = "active",
    inActiveClassName = "inactive",
    matchQueryString,
    children,
    onClick,
    ...rest
  } = props

  const { pathname, query } = useRouter()
  console.log({ query, pathname })
  if (href && typeof href === "string") {
    let isActive = false
    if (exact) {
      isActive = href === pathname
    } else {
      isActive = pathname.includes(href)
    }
    // const { matchedRoute, matchedDefinition } = matchRoute(href)
    // const keys = Object.keys(query || {})
    // const nested = keys?.find(k => typeof query[k] !== "string") || ""
    // const newQuery = query || {}
    // let querys = ""
    // if (newQuery && newQuery[nested]) {
    //     const chunks = pathname.split("/")
    //     const newPath = chunks.slice(0, chunks.length - 1)
    //     querys = `${newPath.join("/")}/${(
    //         newQuery[nested] as string[]
    //     )?.join("/")}`
    // }
    // let isActive = false
    // if (exact) {
    //     isActive = querys
    //         ? querys === (matchedRoute as any)?.path
    //         : pathname === (matchedRoute as any)?.path
    // } else {
    //     isActive = querys
    //         ? !!querys.match((matchedRoute as any)?.path)?.length
    //         : !!pathname.match((matchedRoute as any)?.path)?.length
    // }
    // console.log(query, matchedRoute, querys, isActive)
    // if (matchedRoute && matchedDefinition) {
    //     return (
    //         <Link
    //             href={{
    //                 pathname: matchedDefinition.destination,
    //                 query: matchedRoute.params as any,
    //             }}
    //             as={matchedRoute.path}
    //             {...rest}>
    //             <a
    //                 onClick={e => {
    //                     if (onClick) {
    //                         e.stopPropagation()
    //                         onClick({
    //                             query,
    //                             matchedRoute,
    //                             isActive,
    //                             querys,
    //                         })
    //                     }
    //                 }}
    //                 className={`${
    //                     isActive ? activeClassName : inActiveClassName
    //                 } ${className}`}>
    //                 {children}
    //             </a>
    //         </Link>
    //     )
    // }
    return (
      <Link href={href} {...rest}>
        <a
          onClick={e => {
            if (onClick) {
              e.stopPropagation()
              e.preventDefault()
              onClick({
                query,
              })
            }
          }}
          className={`${
            isActive ? activeClassName : inActiveClassName
          } ${className}`}
        >
          {cloneElement(children, {
            activeClassName,
            inActiveClassName,
            ...props,
          })}
          {/* {children} */}
        </a>
      </Link>
    )
  }
  throw new Error("Please Provide href...")
}

export default NavLink
