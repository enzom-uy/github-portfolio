import { FormEvent, useContext, useState } from "react"
import axios from "axios"
import { githubGetUserUrl } from "../helpers/variables"
import { GithubUser } from "../types/user"
import { Repo } from "../types/repos"
import { useRouter } from "next/router"
import { GithubUserContext } from "../context/github-user-context"

const SearchUser: React.FC = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const { getUserData } = useContext(GithubUserContext)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const userData = await axios.get(`${githubGetUserUrl}/${inputValue}`).then(res => res.data).catch(() => setError(true)) as GithubUser
    if (!userData) {
      return
    }

    const userRepos = await axios.get(`${githubGetUserUrl}/${inputValue}/repos`).then(res => res.data) as Repo[]
    if (userData) {
      if (getUserData) {
        getUserData(userData, userRepos)
      }
      router.push({ pathname: `/account` })

    }

  }

  return (
    <>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <button className="font-medium" type="submit">
          Search
        </button>
        <input
          type="text"
          className="input h-auto focus:outline-none"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </form>
      {error && <p>No user named {inputValue} found.</p>}
    </>
  )
}

export default SearchUser
