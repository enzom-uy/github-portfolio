import Image from "next/image"
import { GithubUser } from "../types/user"

interface IProps {
  user: GithubUser
}

const UserProfileCard: React.FC<IProps> = ({ user }) => {
  return (
    <div className="flex flex-col w-fit items-center">
      <h1 className="font-semibold tracking-wide text-xl">{user.login}</h1>
      <Image src={user.avatar_url} width={200} height={200} className="rounded-full" priority />
      <section>
        <p></p>
      </section>
    </div>
  )
}

export default UserProfileCard
