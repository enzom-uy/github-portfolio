import { Repo } from '../types/repos'
import { GithubUser } from '../types/user'
import UserProfileCard from './user-profile-card'
import UserReposSection from './user-repos-section'

interface IProps {
  user: GithubUser
  repos: Repo[] | undefined
  loading: boolean
}

const UserSection: React.FC<IProps> = ({ user, repos, loading }) => {
  const reposQuantity = repos?.length
  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 md:flex-row md:items-start md:justify-evenly lg:justify-start">
      <UserProfileCard user={user} reposQuantity={reposQuantity} />
      <UserReposSection repos={repos} loading={loading} />
    </div>
  )
}

export default UserSection
