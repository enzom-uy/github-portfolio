import { Repo } from '../types/repos'

export const sortRepos = (repos: Repo[] | undefined) => {
  const repositories: Repo[] = []
  const reposWithDescription = repos?.filter(
    (repo) => repo.description !== null
  )
  const reposWithoutDescription = repos?.filter(
    (repo) => repo.description === null
  )
  reposWithDescription?.map((repo) => repositories.push(repo))
  reposWithoutDescription?.map((repo) => repositories.push(repo))

  return repositories
}
