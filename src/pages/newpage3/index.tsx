import { getPageLayout } from "@layouts"
import { MyNewScreen2 } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen2 />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: true,
  },
}
export default NewPage1
