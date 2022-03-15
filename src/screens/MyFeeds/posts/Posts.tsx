import { Card } from "@Components"
import { useFormik } from "formik"
import PostBody from "./PostBody"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
}
function Posts(props: IMyFeedProps) {
  const { className, onSubmit } = props
  const {
    values,
    handleSubmit,
    isSubmitting,

    setFieldValue,
  } = useFormik({
    initialValues: {
      opts: {},
    },
    onSubmit: values => {
      onSubmit?.(true)
    },
  })

  return (
    <Card className="postFeed">
      <Card.Header>
        <PostHeader />
      </Card.Header>
      <Card.Body>
        <PostBody />
      </Card.Body>
      <Card.Footer>
        <PostFooter />
      </Card.Footer>
    </Card>
  )
}
export const Post = Posts
