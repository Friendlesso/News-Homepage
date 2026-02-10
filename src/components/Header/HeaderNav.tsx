import Link from "../../ui/Link"

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
`

export function HeaderNav() {
 return (
  <nav className="flex gap-5"> 
    {NAV_LINKS.map((navLink) => (
      <Link 
        linkTo={navLink.href}
        label={navLink.label}
        className={NAV_LINK_CLASSNAME}
      />
    ))}
  </nav>
 )
}