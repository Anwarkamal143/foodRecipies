import { Navbar, PreviewSlider, Sidebar } from "@components"
import { AppLayout, AuthLayout } from "@layouts"
import {
  AppLayoutWrapper,
  MainContainer,
  MainContentSectionWrapper,
} from "@layouts/applayout.styled"
import { store } from "@redux"
import "@styles/globals.scss"
import type { AppProps } from "next/app"
import { useMemo } from "react"
import { CookiesProvider } from "react-cookie"
import NoSSR from "react-no-ssr"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
  const MemoFunction = useMemo(
    () => (
      <AppLayout>
        <AppLayoutWrapper>
          <MainContainer>
            <Navbar />
            <MainContentSectionWrapper>
              <Sidebar className="Sidebar" />
              <Component {...pageProps} />
            </MainContentSectionWrapper>
          </MainContainer>
        </AppLayoutWrapper>
      </AppLayout>
    ),
    [pageProps]
  )
  console.log("console log", typeof window == "undefined")
  return (
    // <SessionProvider
    //   // Provider options are not required but can be useful in situations where
    //   // you have a short session maxAge time. Shown here with default values.
    //   session={pageProps.session}
    // >
    <CookiesProvider>
      <Provider store={store}>
        <AuthLayout>{MemoFunction}</AuthLayout>
        <NoSSR>
          <PreviewSlider />
        </NoSSR>
      </Provider>
    </CookiesProvider>
    // </SessionProvider>
  )
}
// export default wrapper.withRedux(MyApp)
export default MyApp
