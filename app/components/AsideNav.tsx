import Link from 'next/link'
import Logo from '../components/Logo'
import { FaPowerOff } from 'react-icons/fa'
import LinksNav from './LinksNav'

export default function AsideNav() {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link
        href={'#'}
        className='mb-2 flex h-20 items-end justify-start bg-slate-800 p-4 md:h-40'
      >
        <div className='w-32 text-white md:w-40'>
          <Logo />
        </div>
      </Link>
      <div className='flex flex-grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <LinksNav />

        <div className='hidden h-auto w-full grow md:block'></div>
        <Link
          href={'/'}
          className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-700 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'
        >
          <FaPowerOff />
          <p className='hidden md:block'>Salir</p>
        </Link>
      </div>
    </div>
  )
}
