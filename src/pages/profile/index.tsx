import { getPageLayout } from "@layouts"
import Profile from "src/components/Profile"

const NewPage1 = () => {
  return <Profile />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: false,
  },
}
export default NewPage1
