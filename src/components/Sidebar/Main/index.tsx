import { useRoutes } from "@hooks"
import NavList from "../components/NavList/NavList"

const Main = ({ className }: { className?: string }) => {
  const routes = useRoutes()
  console.log({ routes })
  return (
    <div className={`${className}`}>
      <NavList routes={routes} />
    </div>
  )
}

export default Main
