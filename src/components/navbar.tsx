import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full py-4 px-2 lg:px-24 fixed justify-center lg:justify-start z-10 bg-background-dark">
      <Link href="/">
        <a className="font-semibold uppercase hover:no-underline">
          Github portfolio
        </a>
      </Link>
    </nav>
  )
}

export default Navbar
