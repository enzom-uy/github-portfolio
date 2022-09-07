import { NextPage } from 'next'
import { useContext } from 'react'
import SearchUser from '../components/search-user'
import { GithubUserContext } from '../context/github-user-context'
import { GithubUser } from '../types/user'
import useGetUserInfo from '../hooks/useGetUserInfo'
import UserSection from '../components/user-section'

const Account: NextPage = () => {
  const { userData, userSearched } = useContext(GithubUserContext)
  const { data, repos, username, loading } = useGetUserInfo(
    userSearched!,
    userData!
  )
  return (
    <>
      {username === '' ? (
        <main className="flex h-screen w-screen flex-col items-center justify-center gap-4">
          <p className="text-xl font-medium text-center">
            We got no user to look for. Try searching:
          </p>
          <SearchUser />
        </main>
      ) : (
        <main className="pt-20 px-24 flex justify-center lg:justify-start">
          {userData?.login !== '' ? (
            <UserSection repos={repos} user={userData as GithubUser} />
          ) : (
            userData.login === '' &&
            data && <UserSection repos={repos} user={data} loading={loading} />
          )}
        </main>
      )}
    </>
  )
}

export default Account
