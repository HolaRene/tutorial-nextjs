import { BsArrowRight } from 'react-icons/bs'
import Header from './components/Header'
import { bebas_neue } from './ui/font'
import Link from 'next/link'

function page() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <div className='mt-4 mx-auto flex grow gap-4 md:flex-row w-4/5'>
        <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
          <p
            className={`${bebas_neue.className} text-xl text-gray-700 md:text-3xl md:leading-normal`}
          >
            <strong>Bienvenido Don Joe</strong> Tutorial de ANjrot Nextjs
          </p>
          <Link
            href={'#'}
            className='flex items-center gap-5 self-start rounded-lg bg-blue-500 py-3 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'
          >
            <span>Iniciar sescion</span>
            <BsArrowRight />
          </Link>
        </div>
        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28'>
          <img
            src='/hero-desktop.png'
            alt='Para la computadora'
            height={700}
            width={1000}
            className='hidden md:block'
          />
          <img
            src='/hero-mobile.png'
            alt='Para la computadora'
            height={620}
            width={560}
            className='block md:hidden'
          />
        </div>
      </div>
    </main>
  )
}

export default page
