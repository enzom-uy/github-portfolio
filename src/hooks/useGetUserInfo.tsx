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
  useEffect(() => {
    if (!userSearched && username !== '') {
      const fetch = async () => {
        const data = (await axios
          .get(`${githubGetUserUrl}/${username}`)
          .then((res) => res.data)) as GithubUser
        if (!userData) {
          return
        }
        setData(data)

        const userRepos = (await axios
          .get(`${githubGetUserUrl}/${username}/repos`)
          .then((res) => res.data)) as Repo[]
        setRepos(userRepos)
        setLoading(false)
      }
      fetch()
    }
  }, [])
  return { data, repos, username, userData, loading }
}

export default useGetUserInfo
