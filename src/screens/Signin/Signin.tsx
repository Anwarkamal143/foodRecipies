import { FacebookIcon } from "@icons"
import { AuthLayout } from "@layouts"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import * as yup from "yup"

const getIcon = (title: string) => {
  switch (title) {
    case "facebook":
      return <FacebookIcon />
    default:
      break
  }
}
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Enter valid email address"),
  password: yup.string().required("Password is required"),
})
type ISignInProps = {
  providers: Record<string, any>
}
export function SignIn(props: ISignInProps) {
  const router = useRouter()

  const {
    values,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    errors,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      if (values.password !== "admin") {
        // setIsResetPassword(true);
      }
    },
  })

  return <AuthLayout>hey</AuthLayout>
}
