import { useAppSelector } from "@redux/hooks"
import { ADMINROUTES, PERSONALROUTES } from "@routes/routes"
import { useEffect, useState } from "react"

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useRoutes = () => {
  const user = useAppSelector(state => state.user)
  const [routes, setRoutes] = useState(ADMINROUTES)
  useEffect(() => {
    if (user.role !== "admin") {
      setRoutes(PERSONALROUTES)
    } else {
      setRoutes(ADMINROUTES)
    }
  }, [user.role])
  return routes
}
