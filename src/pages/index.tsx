import type { GetServerSideProps, NextPage } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import SearchUser from '../components/search-user'
import { UserSession } from '../types/user'
import { authOptions } from './api/auth/[...nextauth]'

const Home: NextPage<{ user: UserSession }> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Github portfolio</title>
        <meta
          name="description"
          content="Github portfolio website, created by enzom-uy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex items-center justify-center h-screen flex-col gap-4">
        <h1 className="font-semibold text-[1.6rem] text-center">
          Welcome to Github portfolio
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <SearchUser />
          {!user && (
            <>
              <p>or</p>
              <button
                className="bg-accent px-4 py-2 rounded-lg hover:bg-accent-light text-white"
                onClick={() => signIn('github')}
              >
                Login
              </button>
            </>
          )}
        </div>
      </main>
      <div>
        <p className="absolute bottom-4 w-full text-center">
          This project is the result of me being bored. <br /> If you make
          multiple requests, the GitHub API will fail. <br />
          If you actually use this project to view someone&apos;s repos,
          <br /> remember that GitHub is kind of a personal/private place for
          developers.
          <br /> You will not only see their side projects, but also their
          because-i-was-bored projects.
        </p>
      </div>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  const user = session?.user
  if (session) {
    return {
      props: {
        user,
      },
    }
  }
  return {
    props: {},
  }
}
