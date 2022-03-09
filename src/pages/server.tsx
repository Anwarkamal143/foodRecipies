import { Button } from "@Components"
import { useSession } from "next-auth/react"
import { useAppDispatch, useAppSelector } from "src/app/hooks"
import { decrement, increment } from "src/app/reducers/Counter"
// import Layout from "../components/layout"

export default function Page({ context }: { context: any }) {
  const state = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  // This is possible because of the shared context configured in `_app.js` that
  // is used by `useSession()`.
  const { data: session, status } = useSession()
  const loading = status === "loading"
  console.log({ state })
  return (
    <div>
      {JSON.stringify(state)}
      <Button onClick={() => dispatch(increment())}>Add</Button>
      <Button onClick={() => dispatch(decrement())}>dec</Button>
      <h1>Server Side Rendering</h1>

      <p>
        This page uses the universal <strong>getSession()</strong> method in{" "}
        <strong>getServerSideProps()</strong>.
      </p>
      <p>
        Using <strong>getSession()</strong> in{" "}
        <strong>getServerSideProps()</strong> is the recommended approach if you
        need to support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require
        client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>
    </div>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
// export const getServerSideProps: GetServerSideProps<{
//   session: Session | null
// }> = async context => {
//   return {
//     props: {
//       session: await getSession(context),
//       // context,
//     },
//   }
// }
// export const getServerSideProps = wrapper.getServerSideProps(
//   storee =>
//     async ({ params, ...rest }) => {
//       // const { id } = params || {}

//       console.log({ store: storee.getState(), st: store.getState() })
//       // await store.dispatch(fetchSubject(id))

//       return {
//         props: {
//           session: await getSession(rest),
//           // id,
//         },
//       }
//     }
// )
