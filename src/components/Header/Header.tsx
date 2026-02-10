import LogoIcon from '../../assets/icons/logo.svg';
import { HeaderNav } from './HeaderNav';

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <div>
        <img src={LogoIcon} alt="W. Logo" />
      </div>
      <HeaderNav />
    </header>
  )
}