import React from 'react'
import Link from "next/link"
function navbar() {
  return (
    <div>
      <ul className='flex justify-center bg-gray-300 w-screen'>
            <Link href="/"><li className='m-8 text-2xl cursor-pointer font-bold'>Home</li></Link>
            <Link href="/about"><li className='m-8 text-2xl font-bold '>About</li></Link>
            <Link href="/blog"><li className='m-8 text-2xl font-bold '>Blog</li></Link>
            <Link href="/contact"><li className='m-8 text-2xl font-bold '>Contact</li></Link>
          </ul>
    </div>
  )
}

export default navbar
