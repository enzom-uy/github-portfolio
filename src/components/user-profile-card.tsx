import Image from "next/image"

interface IProps {
  username: string
  imageUrl: string
}

const UserProfileCard: React.FC<IProps> = ({ username, imageUrl }) => {
  return (
    <div>
      <h1>{username}</h1>
      <Image src={imageUrl} width={200} height={200} className="rounded-full" />
    </div>
  )
}

export default UserProfileCard
