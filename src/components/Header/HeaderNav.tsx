import { useState } from "react"
import Link from "../../ui/Link"
import CloseNavBtn from "./CloseNavBtn"

const NAV_LINKS = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/',
    label: 'New'
  },
  {
    href: '/',
    label: 'Popular'
  },
  {
    href: '/',
    label: 'Trending'
  },
  {
    href: '/',
    label: 'Categories'
  },
]

const NAV_LINK_CLASSNAME = `
  text-(--dark-gray-blue)
  hover:text-(--soft-red)
  transition-colors duration-150 
  sm:text-center text-left
  w-full
`

const Nav_LINK_CONTAINER_CLASSNAME = `
  fixed top-0 rigth-0 h-full w-screen bg-(--off-white) flex flex-col sm:flex-row items-center
  gap-5 p-5 py-20
  z-20
  transform transition-transform duration-400
  sm:static sm:flex-row sm:h-auto sm:w-auto sm:transition-none sm:translate-x-0 sm:bg-transparent sm:p-0
`

export function HeaderNav() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const overlay = isNavOpen ? (
    <div
      onClick={() => setIsNavOpen(false)}
      className="fixed inset-0 bg-black opacity-50 z-10"
    />
  ) : null;

  return (
    <nav className="flex items-center gap-5 relative">
      <CloseNavBtn
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      {overlay}
      <div
        className={`
          ${isNavOpen ? '-translate-x-50' : 'translate-x-full'}
          ${Nav_LINK_CONTAINER_CLASSNAME}
        `}>
        {NAV_LINKS.map((navLink) => (
          <Link
            key={navLink.label}
            linkTo={navLink.href}
            label={navLink.label}
            className={NAV_LINK_CLASSNAME}
          />
        ))}
      </div>
    </nav>
  )
}