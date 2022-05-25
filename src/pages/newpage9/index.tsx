import { getPageLayout } from "@layouts"
import { MyNewScreen8 } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen8 />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: false,
  },
}
export default NewPage1
