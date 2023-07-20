import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./navbar/navbar";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodeSlayer',
  description: 'Slaying Bugs',
}

export default function Layout({ children }) {
  return (
   <>
   <div>
      <Navbar />
      <main>{children}</main>
    </div>
   </>
  )
}
