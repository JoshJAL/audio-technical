interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export function EmeraldButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='nice-hover-no-shadow pop jusitify-center inline-flex w-fit rounded-[5px] bg-emerald-500 p-2 font-medium text-black transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-black/30 hover:bg-emerald-700 hover:text-white focus:outline-hidden'
    >
      {children}
    </button>
  );
}

export function RedButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='nice-hover-no-shadow pop jusitify-center inline-flex w-fit rounded-[5px] bg-red-500 p-2 font-medium text-black transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-black/30 hover:bg-red-700 hover:text-white focus:outline-hidden'
    >
      {children}
    </button>
  );
}

export function BlueButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='nice-hover-no-shadow pop jusitify-center inline-flex w-fit rounded-[5px] bg-blue-500 p-2 font-medium text-black transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-black/30 hover:bg-blue-700 hover:text-white focus:outline-hidden'
    >
      {children}
    </button>
  );
}
