import { Button, Input } from "@components"
import { CheckCircle } from "@icons"
import React from "react"

type Props = {
  setView?: any
  view?: string
}

const SignUpSide = (props: Props) => {
  const { setView, view } = props
  return (
    <div className="login-right-area">
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
            <Input label="Email address" />
          </div>
          <Button
            onClick={() => setView?.("2")}
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
            <Input label="Email address" />
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
    </div>
  )
}

export default SignUpSide
