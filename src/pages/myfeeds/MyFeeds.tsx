import { getPageLayout } from "@layouts"
import { MyFeedsScreen } from "@screens"

 const  MyFeeds =() =>{
  return <MyFeedsScreen  />
}

// MyFeeds.pageLayout = Page

MyFeeds.layout = {
  layout: getPageLayout
}
export default MyFeeds