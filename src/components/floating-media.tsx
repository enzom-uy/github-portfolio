import { ReactNode } from 'react'
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FiLinkedin } from 'react-icons/fi'

const iconSize = '2rem'

const MediaCircle: React.FC<{ icon: ReactNode; href: string }> = ({
  icon,
  href,
}) => {
  return (
    <div className="rounded-full p-2 transition-all duration-300 shadow-floating-icon hover:shadow-2xl hover:scale-125">
      <a href={href} target="_blank" rel="noreferrer" className="">
        {icon}
      </a>
    </div>
  )
}

const FloatingMedia: React.FC = () => {
  return (
    <div className="flex fixed bottom-6 right-6 gap-2">
      <MediaCircle
        icon={<AiOutlineGithub fontSize={iconSize} />}
        href="https://github.com/enzom-uy/"
      />
      <MediaCircle
        icon={<FiLinkedin fontSize={iconSize} />}
        href="https://www.linkedin.com/in/enzomdev/"
      />
      <MediaCircle
        icon={<AiOutlineTwitter fontSize={iconSize} />}
        href="https://twitter.com/enzom_uy"
      />
    </div>
  )
}

export default FloatingMedia
