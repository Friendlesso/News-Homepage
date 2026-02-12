type LinkProps = {
  linkTo: string;
  className: string;
  label: string;
}

export default function Link({
  linkTo,
  className,
  label,
}: LinkProps) {
 return (
  <a 
   href={linkTo} 
   rel="noopener noreferrer"
   className={className}
  >
    {label}
  </a>
 )
}