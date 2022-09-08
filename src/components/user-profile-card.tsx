import Image from 'next/image'
import { GithubUser } from '../types/user'
import { AiOutlineUser, AiOutlineLink } from 'react-icons/ai'
import { RiGitRepositoryLine } from 'react-icons/ri'

interface IProps {
  user: GithubUser
  reposQuantity: number | undefined
}

const UserProfileCard: React.FC<IProps> = ({ user, reposQuantity }) => {
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
          width={160}
          height={160}
          className="rounded-full"
          alt=""
          priority
        />
      </a>
      <section className="flex flex-col items-start gap-2 mt-4 px-2">
        <div className="flex gap-2 items-center justify-center">
          <AiOutlineUser fontSize="1.3rem" />
          <p className="">{user.login}</p>
        </div>
        <p className="max-w-[24ch]">{user.bio}</p>
        <div className="flex items-center gap-2">
          <RiGitRepositoryLine fontSize="1.3rem" />
          <p>
            Repositories:{' '}
            <a href={userReposLink} target="_blank" rel="noreferrer">
              {reposQuantity !== 0 ? reposQuantity : 0}
            </a>
          </p>
        </div>
        {user.blog && (
          <div className="flex items-center gap-2">
            <AiOutlineLink fontSize="1.3rem" />
            <a
              target="_blank"
              href={userWebsiteHasHttp ? user.blog : fullLink}
              rel="noreferrer"
            >
              {user.blog}
            </a>
          </div>
        )}
      </section>
    </div>
  )
}

export default UserProfileCard
