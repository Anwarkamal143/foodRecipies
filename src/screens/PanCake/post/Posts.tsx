import { Recipe } from "@apptypes/recipe"
import { Card, ShareSocialLinks } from "@components"
import { useOpenClose } from "@hooks"
import PostBody from "./PostBody"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
export type IPostType = Recipe
type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
  postFeed: any
}
function Posts(props: IMyFeedProps) {
  const { className, onSubmit, postFeed } = props
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  //   const {
  //     values,
  //     handleSubmit,
  //     isSubmitting,
  // setValues,
  //     setFieldValue,
  //   } = useFormik({
  //     initialValues: {},
  //     onSubmit: values => {
  //       onSubmit?.(true, values)
  //     },
  //   })
  return (
    <>
      <Card className="postFeed">
        <Card.Header>
          <PostHeader post={postFeed} onSubmit={onSubmit} />
        </Card.Header>
        <Card.Body>
          <PostBody post={postFeed} onSubmit={onSubmit} />
        </Card.Body>
        <Card.Footer>
          <PostFooter
            post={postFeed}
            onSubmit={onSubmit}
            onSocialItemClick={onOpenModel}
          />
        </Card.Footer>
      </Card>
      <ShareSocialLinks isOpen={isOpenModel} onCancel={onCloseModel} isSearch={false} />
    </>
  )
}
export const Post = Posts
