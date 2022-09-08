import { useState, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import { githubGetUserUrl } from '../helpers/variables'
import axios from 'axios'
import { GithubUser } from '../types/user'
import { Repo } from '../types/repos'

const useGetUserInfo = (userSearched: boolean, userData: GithubUser) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<GithubUser>()
  const [repos, setRepos] = useState<Repo[]>()
  const [username] = useLocalStorage('githubUser', undefined)
  const searchQuery = userSearched && userData.login
  const localStorageQuery = !userSearched && username !== '' && username
  useEffect(() => {
    const fetch = async () => {
      const data = (await axios
        .get(`${githubGetUserUrl}/${searchQuery || localStorageQuery}`)
        .then((res) => res.data)) as GithubUser
      if (!userData) {
        return
      }
      setData(data)

      const userRepos = (await axios
        .get(`${githubGetUserUrl}/${searchQuery || localStorageQuery}/repos`)
        .then((res) => res.data)) as Repo[]
      setRepos(userRepos)
      setLoading(false)
    }
    fetch()
  }, [])
  return { data, repos, username, userData, loading }
}

export default useGetUserInfo
