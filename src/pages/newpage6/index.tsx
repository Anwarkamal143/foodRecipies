import { getPageLayout } from "@layouts"
import { MyNewScreen5 } from "@screens"

const NewPage1 = () => {
  return <MyNewScreen5 />
}

// MyFeeds.pageLayout = Page

NewPage1.layout = {
  layout: getPageLayout,
  props: {
    sidebar: false,
  },
}
export default NewPage1
