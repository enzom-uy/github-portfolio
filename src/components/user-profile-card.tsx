import Image from 'next/image'
import { GithubUser } from '../types/user'

interface IProps {
  user: GithubUser
}

const UserProfileCard: React.FC<IProps> = ({ user }) => {
  const userWebsiteHasHttp = user.blog.includes('https://' || 'http://')
  const fullLink = `https://${user.blog}`
  const userReposLink = `https://github.com/${user.login}/?tab=repositories`
  return (
    <div className="flex flex-col w-fit items-center shadow-card rounded-lg p-4 bg-test">
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-2 text-center hover:no-underline"
      >
        <h1 className="font-semibold tracking-wide text-xl">{user.name}</h1>
        <Image
          src={user.avatar_url}
          width={200}
          height={200}
          className="rounded-full"
          alt=""
          priority
        />
        <p className="mb-2">{user.login}</p>
      </a>
      <section className="flex flex-col items-center text-center gap-2">
        <p className="max-w-[24ch]">{user.bio}</p>
        <p>
          Repositories:{' '}
          <a href={userReposLink} target="_blank" rel="noreferrer">
            {user.public_repos}
          </a>
        </p>
        <a
          target="_blank"
          href={userWebsiteHasHttp ? user.blog : fullLink}
          rel="noreferrer"
        >
          {user.blog}
        </a>
      </section>
    </div>
  )
}

export default UserProfileCard
