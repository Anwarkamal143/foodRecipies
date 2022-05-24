import { getPageLayout } from "@layouts"
import { MyNewScreen1 } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen1 />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: false,
  },
}
export default NewPage1
