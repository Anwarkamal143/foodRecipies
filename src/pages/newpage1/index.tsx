import { getPageLayout } from "@layouts"
import { MyNewScreen } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: false,
  },
}
export default NewPage1
