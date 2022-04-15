import { Button, Input } from "@components"
import React from "react"

type Props = {
  setView?: any
  view?: string
}

const LoginSide = (props: Props) => {
  const { setView, view } = props

  return (
    <div>
      {view === "0" && (
        <div>
          <h2>Log In</h2>
          <p>Hey you. Welcome back!</p>
          <Input label="Email address" />
          <Input label="Password" />
          <p>Forgot Password?</p>
          <Button>Login</Button>
        </div>
      )}
      {view !== "0" && (
        <div>
          <h2>Log In</h2>
          <span>
            {" "}
            <p>Already have an Online Cook acount?</p>Continue here!
          </span>
          <p>Forgot Password?</p>
          <Button onClick={() => setView?.("0")}>Login</Button>
        </div>
      )}
    </div>
  )
}

export default LoginSide
