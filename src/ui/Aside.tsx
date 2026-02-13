type AsideProps = {
  children: React.ReactNode;
  className: string;
}

export default function Aside({
  children, className
}:AsideProps) {
 return (
  <aside
    className={className}
  >
    {children}
  </aside>
 )
}