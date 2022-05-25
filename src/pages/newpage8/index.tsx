import { getPageLayout } from "@layouts"
import { MyNewScreen7 } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen7 />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: true,
  },
}
export default NewPage1
