import { Card, ShareSocialLinks } from "@components"
import { useOpenClose } from "@hooks"
import { useFormik } from "formik"
import { POSTSDATA } from "src/screens/data"
import PostBody from "./PostBody"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
export type IPostType = typeof POSTSDATA[0]
type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
  post: IPostType
}
function Posts(props: IMyFeedProps) {
  const { className, onSubmit, post } = props
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const {
    values,
    handleSubmit,
    isSubmitting,

    setFieldValue,
  } = useFormik({
    initialValues: {},
    onSubmit: values => {
      onSubmit?.(true)
    },
  })

  return (
    <>
      <Card className="postFeed">
        <Card.Header>
          <PostHeader post={post} onSubmit={onSubmit} />
        </Card.Header>
        <Card.Body>
          <PostBody post={post} onSubmit={onSubmit} />
        </Card.Body>
        <Card.Footer>
          <PostFooter
            post={post}
            onSubmit={onSubmit}
            onSocialItemClick={onOpenModel}
          />
        </Card.Footer>
      </Card>
      <ShareSocialLinks isOpen={isOpenModel} onCancel={onCloseModel} />
    </>
  )
}
export const Post = Posts
