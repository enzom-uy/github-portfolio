import { NextPage } from 'next'
import { useContext } from 'react'
import SearchUser from '../components/search-user'
import { GithubUserContext } from '../context/github-user-context'
import { GithubUser } from '../types/user'
import useGetUserInfo from '../hooks/useGetUserInfo'
import UserSection from '../components/user-section'
import Head from 'next/head'

const Account: NextPage = () => {
  const { userData, userSearched } = useContext(GithubUserContext)
  const { data, repos, username, loading } = useGetUserInfo(
    userSearched!,
    userData!
  )
  const userSearchedAndDataExists = userSearched && userData?.login
  const localStorageDataExists = !userSearched && username !== '' && data?.login
  return (
    <>
      <Head>
        <title>
          {userSearchedAndDataExists
            ? `${userData.login} - Github Portfolio`
            : localStorageDataExists
            ? `${data?.login} - Github Portfolio`
            : 'Account - Github Portfolio'}
        </title>
      </Head>
      {username === '' ? (
        <main className="flex h-screen w-screen flex-col items-center justify-center gap-4">
          <p className="text-xl font-medium text-center">
            We got no user to look for. Try searching:
          </p>
          <SearchUser />
        </main>
      ) : (
        <main className="pt-20 flex justify-center lg:justify-start lg:px-24">
          {userSearched ? (
            <UserSection
              repos={repos}
              user={userData as GithubUser}
              loading={loading}
            />
          ) : (
            userData?.login === '' &&
            data && <UserSection repos={repos} user={data} loading={loading} />
          )}
        </main>
      )}
    </>
  )
}

export default Account
