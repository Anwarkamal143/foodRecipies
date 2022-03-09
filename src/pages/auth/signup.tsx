import { Signup } from "@Screens"
import { GetServerSideProps } from "next"
import type { Session } from "next-auth"
import { getSession, useSession } from "next-auth/react"
// eslint-disable-next-line
import { getProviders } from "next-auth/react"
import { useEffect, useState } from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
// import {   } from "next-auth/client/_utils"
function SignupForm({
  providers,
  className,
}: {
  providers: any
  className?: string
}) {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  console.log("Custom Signin page was called.", providers)
  return (
    <div className={className}>
      <Signup providers={providers} />
    </div>
  )
}
export default styled(SignupForm)`
  width: 100%;
`
// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps: GetServerSideProps<{
  session: Session | null
}> = async context => {
  return {
    props: {
      session: await getSession(context),
      providers: await getProviders(),
    },
  }
}
