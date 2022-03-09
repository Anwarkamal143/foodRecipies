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
import { useState } from "react"
import * as yup from "yup"

import { SignupContainer } from "./signin.styled"
import { OTPLink } from "../OTP"
import { ResetPassword } from "../ResetPassword"

const getIcon = (title: string) => {
  switch (title) {
    case "google":
      return <GoogleIcon />
    case "linkedin":
      return <LinkedInIcon />
    case "apple":
      return <AppleIcon />

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

  return <AuthLayout>hey


    
  </AuthLayout>
}
