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
  return (
    <div className="flex flex-col items-center gap-14">
      <UserProfileCard user={user} />
      <UserReposSection repos={repos} loading={loading} />
    </div>
  )
}

export default UserSection
