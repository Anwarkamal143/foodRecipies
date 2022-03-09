import { Button, EmailEdit, Input, SiteHeader } from "@Components"
import {
  AppleIcon,
  EnvelopIcon,
  Eye,
  FacebookIcon,
  GoogleIcon,
  LinkedInIcon,
} from "@Icons"
import { AuthLayout } from "@Layouts"
import { AuthServices } from "@Utils/enums"
import { useFormik } from "formik"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import React, { useState } from "react"
import * as yup from "yup"
import { SignupContainer, SignupFormWrapper } from "./signup.styled"

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
  confirmpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
})

type ISignupProps = {
  providers: Record<string, any>
}
export function Signup(props: ISignupProps) {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const {
    values,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    errors,
    handleChange,
    handleBlur,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema,
    onSubmit: values => {
      setTimeout(() => {
        setSubmitting(false)
      }, 2000)
    },
  })
  const handleEmail = () => {
    setEmail(values.email)
  }
  return (
    <AuthLayout>
      <SignupContainer>
        <SiteHeader className="signUpHeader" />
        <SignupFormWrapper>
          <div className="signupform">
            <h1 className="heading">Getting started</h1>
            {email ? (
              <>
                <EmailEdit
                  email={values.email}
                  onEditClick={() => setEmail("")}
                />
                <p>Enter a Valid Password</p>
              </>
            ) : (
              <>
                <div className="social_icons">
                  {Object.values(AuthServices).map((provider: any) => (
                    <div
                      className="icon"
                      key={provider}
                      onClick={() => signIn(provider)}
                    >
                      {getIcon(provider)}
                    </div>
                  ))}
                </div>
                <p>Or Sign up with Email</p>
              </>
            )}

            {!email ? (
              <Input
                hasRightIcon
                rightIcon={{
                  icon: EnvelopIcon,
                }}
                parentClasses="singup-email signup-input"
                type="email"
                placeholder="email"
                className="email-input"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email}
              />
            ) : (
              <>
                <Input
                  hasRightIcon
                  rightIcon={{
                    icon: Eye,
                  }}
                  // leftIcon={{
                  //   icon: Eye,
                  // }}
                  parentClasses="singup-password signup-input"
                  type="password"
                  placeholder="Password"
                  className="password-input"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password}
                />
                <Input
                  parentClasses="singup-confirmPassword signup-input"
                  type="password"
                  placeholder="Repeat Password"
                  className="confirmPassword-input"
                  id="confirmPassword"
                  name="confirmpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  error={errors.confirmpassword}
                />
              </>
            )}
            <Button
              disabled={isSubmitting}
              isLoading={isSubmitting}
              type="primary"
              shape="circle"
              onClick={e => {
                email ? handleSubmit() : handleEmail()
              }}
            >
              Next
            </Button>
          </div>
        </SignupFormWrapper>
      </SignupContainer>
    </AuthLayout>
  )
}
