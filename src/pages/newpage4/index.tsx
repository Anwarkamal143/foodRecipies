import { getPageLayout } from "@layouts"
import { MyNewScreen3 } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen3 />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: false,
  },
}
export default NewPage1
