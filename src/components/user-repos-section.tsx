import { Repo } from '../types/repos'
import { sortRepos } from '../utils/sortReposByDescription'
import RepoCard from './repo-card'

interface IProps {
  repos: Repo[] | undefined
  loading: boolean
}

const UserReposSection: React.FC<IProps> = ({ repos, loading }) => {
  const repositories = sortRepos(repos)

  return (
    <div className="flex flex-col gap-4">
      {loading ? (
        <div>Loading...</div>
      ) : !repos ? (
        'This user has no repositories yet'
      ) : (
        repositories.map((repo) => <RepoCard repo={repo} key={repo.id} />)
      )}
    </div>
  )
}

export default UserReposSection
