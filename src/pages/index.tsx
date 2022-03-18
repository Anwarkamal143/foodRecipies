import { useAppSelector } from "@hooks"
import { Dashboard, MyFeedsScreen } from "@screens"

export default function MyFeeds() {
  const { role } = useAppSelector(state => state.user)
  return role === "admin" ? <Dashboard /> : <MyFeedsScreen />
}
