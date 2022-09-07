import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full py-4 px-6 lg:px-24 absolute">
      <Link href="/">
        <a className="font-semibold uppercase">Github portfolio</a>
      </Link>
    </nav>
  )
}

export default Navbar
