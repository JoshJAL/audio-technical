import { Link } from '@tanstack/react-router';

import DropdownMenu from '@/components/header/dropdownMenu/DropdownMenu';

export default function Header() {
  return (
    <header className='fixed top-0 z-50 w-full p-2'>
      <nav className='pop mx-auto flex w-full max-w-7xl items-center gap-5 rounded-[5px] bg-gray-500 p-3'>
        <Link
          to='/'
          preload='intent'
          className='text-xl text-black transition-all duration-200 ease-in-out hover:scale-105 md:text-2xl'
        >
          Audio Technical
        </Link>
        <div className='flex-1' />
        <DropdownMenu />
      </nav>
    </header>
  );
}
