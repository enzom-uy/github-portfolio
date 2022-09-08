import { Repo } from '../types/repos'
import { BiCode } from 'react-icons/bi'

interface IProps {
  repo: Repo
}

const RepoCard: React.FC<IProps> = ({ repo }) => {
  return (
    <a
      target="_blank"
      href={repo.html_url}
      className="shadow-repo-card p-4 rounded-lg
      flex flex-col gap-2 hover:no-underline hover:scale-110 transition-transform duration-200 justify-between"
      rel="noreferrer"
    >
      <div className="flex flex-col gap-4">
        <strong>{repo.name}</strong>
        <p className="max-w-[30ch]">
          {repo.description
            ? repo.description
            : 'This repository has no description.'}
        </p>
      </div>
      <div className="flex flex-col justify-center text-green-400">
        <div className="flex items-center gap-2">
          <p>Issues: {repo.open_issues_count}</p>
        </div>

        {repo.language && (
          <div className="flex items-center gap-2">
            <BiCode fontSize="1.rem" />
            <p>{repo.language}</p>
          </div>
        )}
      </div>
    </a>
  )
}

export default RepoCard
