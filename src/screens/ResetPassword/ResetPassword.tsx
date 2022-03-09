import { Button, Input, Slicklider } from "@Components"
import {
  AppleIcon,
  Edit,
  EnvelopIcon,
  Eye,
  FacebookIcon,
  GoogleIcon,
  LinkedInIcon,
} from "@Icons"
import { AuthLayout } from "@Layouts"
import { AuthServices } from "@Utils/enums"
import { useFormik } from "formik"
import Link from "next/link"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import {
  ReactChild,
  ReactChildren,
  ReactElement,
  ReactNode,
  useState,
} from "react"
import * as yup from "yup"
import { ResetContainer } from "./resetpassword.styled"

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Enter valid email address"),
  password: yup.string().required("Password is required"),
  confirmpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
})
type IResetPasswordProps = {
  onSubmit?: (...args: any[]) => void
  title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
}
export function ResetPassword(props: IResetPasswordProps) {
  const { onSubmit, title = "RESET PASSWORD" } = props

  const {
    values,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    errors,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validationSchema,
    onSubmit: values => {
      onSubmit?.(true)
    },
  })

  return (
    <ResetContainer className="input_wrapper">
      {title && <h1>{title}</h1>}
      <Input
        hasRightIcon
        rightIcon={{
          icon: Eye,
        }}
        type="password"
        placeholder="Password"
        className="password-input"
        id="password"
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      <Input
        type="password"
        placeholder="confirm Password"
        className="confirmpassword-input"
        id="confirmpassword"
        name="confirmpassword"
        onChange={handleChange}
        value={values.confirmpassword}
        onBlur={handleBlur}
      />

      <Button onClick={handleSubmit}>RESET PASSWORD</Button>
    </ResetContainer>
  )
}
