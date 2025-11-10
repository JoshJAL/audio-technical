interface Props {
  children: React.ReactNode;
}

export default function IndexCard({ children }: Props) {
  return (
    <div className='pop nice-hover-no-shadow pop rounded-[5px] border-white bg-gray-400 p-2 text-black transition-all duration-200 ease-in-out hover:border-white/30'>
      {children}
    </div>
  );
}
