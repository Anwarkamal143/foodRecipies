import { Button, Input } from "@components"
import { AngleRight } from "@icons"
import React from "react"

type Props = {
  setView?: any
  view?: string
}

const LoginSide = (props: Props) => {
  const { setView, view } = props

  return (
    <div className="login-left-area">
      {view === "0" && (
        <>
          <h2>Log In</h2>
          <p>Hey you. Welcome back!</p>
          <div className="field-holder">
            <Input label="Email address" />
          </div>
          <div className="field-holder">
            <Input label="Password" />
          </div>
          <div className="password-reset">
            <span className="text-password">
              Forgot Password?{" "}
              <span className="img-arrow">
                <AngleRight />
              </span>
            </span>
          </div>
          <Button type="primary" className="button-circle">
            Login
          </Button>
        </>
      )}
      {view !== "0" && (
        <>
          <h2>Log In</h2>
          <span>
            {" "}
            <p className="small-text">
              Already have an Online Cook acount?{" "}
              <span className="link-text">Continue here!</span>
            </p>
          </span>
          <Button
            onClick={() => setView?.("0")}
            type="default"
            className="button-circle button-outline"
          >
            Login
          </Button>
        </>
      )}
    </div>
  )
}

export default LoginSide
