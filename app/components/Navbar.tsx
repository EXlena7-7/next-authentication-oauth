import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  const user = false
  return (
    <header className='bg-gray-800 text-white p-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-lg font-semibold'>
          <Link href="">Logo</Link>
        </div>
        <ul className='flex space-x-8 items-center'>
          <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link href="/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
        </ul>

        {/* user profile*/}
        {
          user ? <div className="flex space-x-4">
            <Link href="/profile">
            <Image src="/avatar.png" alt="profile" width={44} height={44} />
            </Link>
            
            <button>Logout</button>
          </div> : <div className='bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors
          duration-300 cursor-pointer'>Login</div>
        }
      </nav>
    </header>
  )
}

export default Navbar
