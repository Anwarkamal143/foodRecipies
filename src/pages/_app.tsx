import { AppLayout } from "@layouts"
import { store } from "@redux"
import "@styles/globals.scss"
import type { AppProps } from "next/app"
import { ComponentType, ReactElement, ReactNode } from "react"
import { CookiesProvider } from "react-cookie"
import { Provider } from "react-redux"
type IAppProps = AppProps & {
  Component: AppProps['Component'] & {
    getLayout?: (component: ComponentType | ReactElement | ReactNode) => ComponentType
    layout?: {
      layout:  (component: ComponentType | ReactElement | ReactNode, props?: Record<string, any>) => ComponentType,
      props: Record<string, any>
    }
  }
}
function MyApp({ Component, pageProps }: IAppProps) {

  const getLayout  = Component.layout?.layout || (page => page)
  console.log("console log", typeof window == "undefined", Component.layout?.props)
  return (
    // <SessionProvider
    //   // Provider options are not required but can be useful in situations where
    //   // you have a short session maxAge time. Shown here with default values.
    //   session={pageProps.session}
    // >
    <CookiesProvider>
      <Provider store={store}>
         <AppLayout {...(Component.layout?.props || {})} >
              {getLayout(<Component {...pageProps}  />, {...(Component.layout?.props || {})}) }
      </AppLayout>
      </Provider>
    </CookiesProvider>
    // </SessionProvider>
  )
}
// export default wrapper.withRedux(MyApp)
export default MyApp
