import { Button, Input } from "@components"
import React from "react"

type Props = {
  setView?: any
  view?: string
}

const SignUpSide = (props: Props) => {
  const { setView, view } = props
  return (
    <div>
      {view === "0" && (
        <div>
          <img
            className="mx-auto block h-10 w-auto md:h-[3.5rem]"
            src="/svg/logo-white.svg"
            alt="brand"
          ></img>
          <h2>Create a New Account</h2>
          <p>
            Create an account to save your favorite recipes, follow your
            favorite cooks, and personalize your cooking experience.
          </p>
          <Button onClick={() => setView?.("1")}>Sign up</Button>
        </div>
      )}
      {view === "1" && (
        <div>
          <h2>Create a New Account</h2>
          <p>
            Create an account to save your favorite recipes, follow your
            favorite cooks, and personalize your cooking experience.
          </p>
          <Input label="Email address" />

          <Button onClick={() => setView?.("2")}>Sign Up with Email</Button>
        </div>
      )}
      {view === "2" && (
        <div>
          <h2>Create a New Account</h2>

          <Input label="Email address" />
          <Input label="Password" />
          <Input label="Username" />

          <Button onClick={() => setView?.("0")}>Sign Up with Email</Button>
          <span>
            By clicking sign up, you agree to
            <p>our Terms of Service</p>
            and
            <p>Privacy Policy</p>
          </span>
        </div>
      )}
    </div>
  )
}

export default SignUpSide
