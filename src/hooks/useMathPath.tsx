import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { INavItem } from "src/components/Sidebar/data/routes"

export const useMathPath = (route: INavItem) => {
  const [path, setPath] = useState({ isActive: false })
  const { pathname, query } = useRouter()
  useEffect(() => {
    console.log({ query, pathname, route })
    if (route.route && typeof route.route === "string") {
      let isActive = false

      if (route.exact) {
        isActive = route.route === pathname
      } else {
        isActive = pathname.includes(route.route)
      }

      setPath({ isActive })
    }
  }, [pathname, query, route])

  return { PathString: route?.route, ...path, setPath, query, pathname }
}
