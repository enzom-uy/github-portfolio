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
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:mb-14">
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
