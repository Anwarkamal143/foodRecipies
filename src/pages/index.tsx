import { useAppSelector } from "@hooks"
import { getPageLayout } from "@layouts"
import { Dashboard, MyFeedsScreen } from "@screens"

export default function MyFeeds() {
  const { role } = useAppSelector(state => state.user)
  return role === "admin" ? <Dashboard /> : <MyFeedsScreen />
}
MyFeeds.layout  ={
  layout: getPageLayout,
}