'use client'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaFileInvoice, FaHome, FaUsers } from 'react-icons/fa'

const links = [
  {
    id: 1,
    nombre: 'Panel de control',
    href: '/dashboard',
    icon: FaHome,
  },
  {
    id: 2,
    nombre: 'Invoices',
    href: '/dashboard/invoices',
    icon: FaFileInvoice,
  },
  {
    id: 3,
    nombre: 'Clientes',
    href: '/dashboard/clientes',
    icon: FaUsers,
  },
]
// ${
//
// }

export default function LinksNav() {
  const pathName = usePathname()
  console.log('Estas en la ruta: ' + pathName)
  return (
    <>
      {links.map(link => {
        const Licon = link.icon
        return (
          <Link
            key={link.id}
            href={link.href}
            className={twMerge(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-700 p-3 text-lg text-white font-bold hover:bg-slate-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              pathName === link.href && 'bg-slate-500'
            )}
          >
            <Licon />
            <p className='hidden md:block'>{link.nombre}</p>
          </Link>
        )
      })}
    </>
  )
}
