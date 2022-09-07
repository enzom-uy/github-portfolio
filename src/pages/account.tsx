import { NextPage } from "next";
import { useContext } from "react";
import SearchUser from "../components/search-user";
import UserProfileCard from "../components/user-profile-card";
import { GithubUserContext } from "../context/github-user-context";
import { GithubUser } from "../types/user";

const Account: NextPage = () => {
  const { userData, userSearched, userRepos } = useContext(GithubUserContext)
  return (
    <>
      {!userSearched ?
        <main className="flex h-screen w-screen flex-col items-center justify-center gap-4">
          <p className="text-xl font-medium text-center">
            We got no user to look for. Try searching:
          </p>
          <SearchUser />
        </main>
        :
        <main className="pt-20 px-24">
          {userData && <UserProfileCard username={userData.login} imageUrl={userData.avatar_url} />}
        </main>}

    </>
  )
}

export default Account
