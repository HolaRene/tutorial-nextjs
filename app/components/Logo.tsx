import { FaReact } from 'react-icons/fa'
import { roboto } from '../ui/font'

export default function Logo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
      <FaReact className='h-20 w-20 rotate-[15deg]' />
      <p className='text-[30px] ml-3'>Don Joe</p>
    </div>
  )
}
