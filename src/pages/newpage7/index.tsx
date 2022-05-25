import { getPageLayout } from "@layouts"
import { MyNewScreen6 } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen6 />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: false,
  },
}
export default NewPage1
