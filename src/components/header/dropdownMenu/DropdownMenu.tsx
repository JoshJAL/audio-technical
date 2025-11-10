import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { IoMenu } from 'react-icons/io5';

import DropdownMenuItem from '@/components/header/dropdownMenu/DropdownMenuItem';
import DropdownMenuItemNoHref from '@/components/header/dropdownMenu/DropdownMenuItemNoHref';

export default function DropdownMenu() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <MenuButton
          className={
            'nice-hover-no-shadow pop inline-flex cursor-pointer justify-center rounded-[5px] border border-black/30 bg-emerald-500 p-2 text-sm font-medium text-black transition-all duration-200 hover:border-black/30 hover:bg-red-700/50 hover:text-white focus:outline-hidden'
          }
        >
          <IoMenu className='h-6 w-6' />
        </MenuButton>
      </div>
      <MenuItems
        as='div'
        transition
        className='subtle-pop absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-blue-500 overflow-hidden rounded-[5px] bg-emerald-500 ring ring-emerald-500/20 backdrop-blur-sm transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
      >
        <div className='py-1'>
          <DropdownMenuItem to='/albums'>Albums</DropdownMenuItem>
          <SignedIn>
            <DropdownMenuItem to='/notebook'>Notebook</DropdownMenuItem>
            <DropdownMenuItem to='/recommendations'>Recommendations</DropdownMenuItem>
          </SignedIn>
          <DropdownMenuItem to='/search'>Search</DropdownMenuItem>
          <DropdownMenuItem to='/songs'>Songs</DropdownMenuItem>
        </div>
        <div className='py-1'>
          <SignedIn>
            <DropdownMenuItemNoHref>
              <UserButton />
            </DropdownMenuItemNoHref>
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
              <button className='block w-full cursor-pointer px-4 py-2 text-left text-sm text-black transition-all duration-200 ease-in-out hover:bg-red-700/50 hover:text-white hover:no-underline'>
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </MenuItems>
    </Menu>
  );
}
