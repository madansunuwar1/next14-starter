import { Inter } from 'next/font/google'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:{
    default:"Next js 14 Homepage",
    template: "%s | Next js 14"
  },
  description: 'Next.js starter app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  )
}