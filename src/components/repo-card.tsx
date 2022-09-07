import { Repo } from '../types/repos'

interface IProps {
  repo: Repo
}

const RepoCard: React.FC<IProps> = ({ repo }) => {
  return (
    <div className="shadow-card p-4 rounded-lg flex flex-col gap-2">
      <strong>{repo.name}</strong>
      <p>{repo.description}</p>
    </div>
  )
}

export default RepoCard
