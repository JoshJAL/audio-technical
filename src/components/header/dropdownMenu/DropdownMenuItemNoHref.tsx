'use client';

import { MenuItem } from '@headlessui/react';

interface DropdownMenuItemProps {
  children: React.ReactNode;
}

export default function DropdownMenuItemNoHref({ children }: DropdownMenuItemProps) {
  return (
    <MenuItem>
      <div className='hover:bg-nyanza/50 block px-4 py-2 text-sm text-black transition-all duration-200 ease-in-out hover:text-white hover:no-underline'>
        {children}
      </div>
    </MenuItem>
  );
}
