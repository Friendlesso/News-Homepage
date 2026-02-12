type CloseNavBtnProps = {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CloseNavBtn({
  isNavOpen, setIsNavOpen
}: CloseNavBtnProps) {
  return (
    <button
      onClick={() => {
        setIsNavOpen(prev => !prev)
      }}
      className={`
        z-30
        *:w-8 *:h-1 
        *:bg-black 
        *:block 
        flex flex-col 
        gap-1 
        hover:cursor-pointer 
        hover:scale-110 
        transition-transform
        *:duration-300 *:ease-in-out
        sm:hidden
      `}
    >
      <span
        className={`${isNavOpen ? 'rotate-45 translate-y-1' : ''}`}
      />
      <span
        className={`${isNavOpen ? '-rotate-45 -translate-y-1' : ''}`}
      />
      <span
        className={`${isNavOpen ? 'translate-y-1' : ''}`}
      />
    </button>
  )
}