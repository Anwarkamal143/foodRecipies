import { useAppSelector } from "@hooks"
import { MyFeedsScreen } from "@screens"
import { Dashboard } from "src/screens/Dashboard/Dashboard"

export default function MyFeeds() {
  const { role } = useAppSelector(state => state.user)
  return role === "admin" ? <Dashboard /> : <MyFeedsScreen />
}
