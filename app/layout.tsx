import { FC, PropsWithChildren } from 'react'
import '@/app/ui/globals.css'
import { roboto } from './ui/font'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='es'>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}

export default RootLayout
