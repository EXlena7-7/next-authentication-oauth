import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { SignIn, SignOut } from './auth-component';
import { auth } from '@/auth';
import MobileMenu from './MobileMenu';

const Navbar = async () => {
  const session = await auth()
  console.log(session?.user)

  return (
      <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
              <div className="text-white text-lg font-bold">
                  <Link href="/">MarjoDev</Link>
              </div>
              <div className="hidden md:flex space-x-6">
                  <Link href="/" className="text-white">Home</Link>
                  <Link href="/about" className="text-white">About</Link>
                  <Link href="/contact" className="text-white">Contact</Link>
              </div>

              <div>
                  {
                    session?.user &&  session?.user ? (
                          <div className='flex items-center space-x-4'>
                          <Link href="/dashboard" className='border'>
                          <Image
                              className="shrink-0  rounded-full"
                              src={session?.user?.image || "https://avatar.iran.liara.run/public/1"}
                              alt="user image"
                              width={56}
                              height={65}
                          />
                          </Link>
                          <SignOut className="text-white" />
                          </div> 
                      ) :  <SignIn className='text-white'/>
                  }
                  
              </div>
              <div className="md:hidden">
                  <MobileMenu />
              </div>
          </div>
      </nav>
  )
}


export default Navbar
