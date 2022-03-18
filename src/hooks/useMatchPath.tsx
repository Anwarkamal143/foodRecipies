import { INavItem } from "@routes/routes"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const useMatchPath = (route: INavItem) => {
  const [path, setPath] = useState({ isActive: false })
  const { pathname, query } = useRouter()
  useEffect(() => {
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
