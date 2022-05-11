import { Signup } from "@Screens"
import { GetServerSideProps } from "next"
import type { Session } from "next-auth"
import { getProviders, getSession, useSession } from "next-auth/react"
import styled from "styled-components"

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
