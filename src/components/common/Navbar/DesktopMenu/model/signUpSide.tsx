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
})
const SignUpSide = (props: Props) => {
  const [formValue, setFormValue] = useState<any>("")
  const {
    values,
    handleChange,
    errors,
    // tslint:disable-next-line: react-hooks-nesting
  } = useFormik({
    validationSchema,
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      console.log("ho")
    },
  })
  const { setView, view } = props
  const handleSubmit = e => {
    e.preventDefault()
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
  console.log(formValue, 'formValue')
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
          <Button
            htmlType="submit"
            type="primary"
            className="button-circle"
          >
            Sign Up with Email
          </Button>
        </>
      )}
      {view === "2" && (
        <>
          <h2>Create a New Account</h2>
          <div className="field-area">
            <Input
              label="Email address"
              defaultValue={formValue}
              value={formValue}
              validations={[{ noSpace: true }]}
            />
          </div>
          <div className="field-area">
            <Input label="Password" />
          </div>
          <div className="field-area">
            <Input label="Username" />
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
          <Button
            onClick={() => setView?.("0")}
            type="primary"
            className="button-circle"
            htmlType="submit"
          >
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
