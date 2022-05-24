import { getPageLayout } from "@layouts"
import { MyNewScreen4 } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen4 />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: false,
  },
}
export default NewPage1
