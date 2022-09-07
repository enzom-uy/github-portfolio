import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import SearchUser from "../components/search-user";
import UserProfileCard from "../components/user-profile-card";
import { GithubUserContext } from "../context/github-user-context";
import axios from "axios";
import { githubGetUserUrl } from "../helpers/variables";
import { Repo } from "../types/repos";
import { GithubUser } from "../types/user";

const Account: NextPage = () => {
  const { userData, userSearched, userRepos } = useContext(GithubUserContext)
  const [data, setData] = useState<GithubUser>()
  const [repos, setRepos] = useState<Repo[]>()
  const [username, setUsername] = useLocalStorage("githubUser", undefined)
  useEffect(() => {
    if (!userSearched && username !== "") {
      const fetch = async () => {
        const data = await axios.get(`${githubGetUserUrl}/${username}`).then(res => res.data) as GithubUser
        if (!userData) {
          return
        }
        setData(data)

        const userRepos = await axios.get(`${githubGetUserUrl}/${username}/repos`).then(res => res.data) as Repo[]
        setRepos(userRepos)

      }
      fetch()
    }
  }, [])
  console.log('data fetcheada después del refresh', data)
  console.log('repos fetcheados después del refresh', repos)
  console.log('userData después del refresh es:', userData)



  return (
    <>
      {username === "" ?
        <main className="flex h-screen w-screen flex-col items-center justify-center gap-4">
          <p className="text-xl font-medium text-center">
            We got no user to look for. Try searching:
          </p>
          <SearchUser />
        </main>
        :
        <main className="pt-20 px-24">
          {userData?.login !== "" ? <UserProfileCard user={userData as GithubUser} /> : userData.login === "" && data && <UserProfileCard user={data} />}
        </main>}

    </>
  )
}

export default Account
