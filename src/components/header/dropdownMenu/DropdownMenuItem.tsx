import { MenuItem } from '@headlessui/react';
import { Link } from '@tanstack/react-router';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  to: string;
  preload?: 'intent' | 'viewport' | 'render' | false | undefined;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export default function DropdownMenuItem({
  children,
  to,
  preload = 'intent',
  target = '_self'
}: DropdownMenuItemProps) {
  return (
    <MenuItem>
      <Link
        preload={preload}
        target={target}
        to={to}
        className='block px-4 py-2 text-sm text-black transition-all duration-200 ease-in-out hover:bg-red-700/50 hover:text-white hover:no-underline'
      >
        {children}
      </Link>
    </MenuItem>
  );
}
