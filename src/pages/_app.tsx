import { Navbar, Sidebar } from "@Components"
import { AppLayout } from "@Layouts"
import {
  AppLayoutWrapper,
  MainContainer,
  MainContentSectionWrapper,
} from "@Layouts/applayout.styled"
import "@Styles/globals.scss"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { useMemo } from "react"
import { Provider } from "react-redux"
import store from "src/app/store1"

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
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <Provider store={store}>{MemoFunction}</Provider>
    </SessionProvider>
  )
}
// export default wrapper.withRedux(MyApp)
export default MyApp
