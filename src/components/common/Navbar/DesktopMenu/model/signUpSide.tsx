import { Button, Input } from "@components"
import { CheckCircle } from "@icons"
import { useFormik } from "formik"
import React, { useState } from "react"
import * as yup from "yup"

type Props = {
  setView?: any
  view?: string
}
const validationSchema = yup.object().shape({
  email: yup.string().required("Email or username is required!"),
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
})
const SignUpSide = (props: Props) => {
  const [formValue, setFormValue] = useState<any>("")
  const {
    values,
    handleChange,
    errors,
    resetForm,
    // tslint:disable-next-line: react-hooks-nesting
  } = useFormik({
    validationSchema,
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    onSubmit: () => {
      console.log("onSubmit")
    },
  })
  const { setView, view } = props
  const handleSubmit = e => {
    e.preventDefault()
    if (view === "1") {
      if (!values.email) {
        errors.email = "Required"
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address"
      } else {
        setFormValue(values.email)
        setView("2")
      }
    }
    if (values.password.match(/^[A-Za-z]\w{7,14}$/)) {
      setView("0")
      resetForm()
    }
  }
  return (
    <form className="login-right-area" onSubmit={handleSubmit}>
      {view === "0" && (
        <>
          <div className="logo-holder">
            <img src="/images/logo.png" alt="brand"></img>
          </div>
          <h2>Create a New Account</h2>
          <p>
            Create an account to save your favorite recipes, follow your
            favorite cooks, and personalize your cooking experience.
          </p>
          <Button
            onClick={() => setView?.("1")}
            type="default"
            className="button-circle button-outline"
          >
            Sign up
          </Button>
        </>
      )}
      {view === "1" && (
        <>
          <h2>Create a New Account</h2>
          <p>
            Create an account to save your favorite recipes, follow your
            favorite cooks, and personalize your cooking experience.
          </p>
          <div className="field-holder">
            <Input
              label="Email address"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              validations={[{ noSpace: true }]}
              required
            />
          </div>
          <Button htmlType="submit" className="button-circle">
            Sign Up with Email
          </Button>
        </>
      )}
      {view === "2" && (
        <>
          <h2>Create a New Account</h2>
          <div className="field-area">
            <Input
              name="email"
              label="Email address"
              defaultValue={formValue}
              value={formValue}
              validations={[{ noSpace: true }]}
            />
          </div>
          <div className="field-area">
            <Input
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              validations={[{ noSpace: true }]}
              required
            />
          </div>
          <div className="field-area">
            <Input
              name="username"
              label="Username"
              value={values.username}
              onChange={handleChange}
              error={errors.username}
              validations={[{ noSpace: true }]}
              required
            />
          </div>
          <div className="block-recommendation">
            <label className="label-personalize" htmlFor="reccomendatoin">
              <input type="checkbox" id="reccomendatoin" />
              <span className="fake-check-label">
                <span className="fake-check">
                  <CheckCircle />
                </span>
                Yes! Send me your personalized reccomendations.
              </span>
            </label>
          </div>
          <Button className="button-circle" htmlType="submit">
            Sign Up
          </Button>
          <span className="terms-area">
            By clicking sign up, you agree to{" "}
            <span className="link-text">our Terms of Service</span> and{" "}
            <span className="link-text">Privacy Policy</span>
          </span>
        </>
      )}
    </form>
  )
}

export default SignUpSide
