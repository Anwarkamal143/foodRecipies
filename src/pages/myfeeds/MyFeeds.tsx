import { getPageLayout } from "@layouts"
import { MyFeedsScreen } from "@screens"

 const  MyFeeds =() =>{
  return <MyFeedsScreen  />
}

// MyFeeds.pageLayout = Page

MyFeeds.getLayout = getPageLayout
export default MyFeeds