// src/pages/_app.tsx
import { SessionProvider } from 'next-auth/react'
import type { AppType } from 'next/dist/shared/lib/utils'
import GithubUserContextProvider from '../context/github-user-context'
import '../styles/globals.css'

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <GithubUserContextProvider>
        <Component {...pageProps} />
      </GithubUserContextProvider>
    </SessionProvider>
  )
}

export default MyApp
