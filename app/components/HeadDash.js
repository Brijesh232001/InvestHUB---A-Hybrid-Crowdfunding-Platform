"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { CgMenu, CgCloseO } from 'react-icons/cg';
import { signOut,useSession } from 'next-auth/react';


const HeadDash = () => {
  const {data: session} = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <>
    <header className="text-black body-font sticky top-0 z-50 bg-white" style={{ height: '140px' }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          
        <Image src="/images/InvestHUB.png" width={200} height={200} className="h-full" />
          
        </Link>
        <div className="absolute top-4 right-4 md:hidden">
          {isMobileMenuOpen ? (
            <CgCloseO className="text-black cursor-pointer" onClick={toggleMobileMenu} style={{ fontSize: '24px' }} />
          ) : (
            <CgMenu className="text-black cursor-pointer" onClick={toggleMobileMenu} style={{ fontSize: '24px' }} />
          )}
        </div>
        <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center md:justify-end ${isMobileMenuOpen ? 'flex-col absolute top-full right-0 w-full bg-blue-100 p-5' : 'hidden md:flex'}`}>
          <Link className="mr-6 hover:text-blue-400 hover:underline hover:font-bold" href="/" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link className="mr-6 hover:text-blue-400 hover:underline hover:font-bold" href="/dashboard" onClick={closeMobileMenu}>
            Dashboard
          </Link>
          <Link className="mr-6 hover:text-blue-400 hover:underline hover:font-bold" href="/adpost" onClick={closeMobileMenu}>
            Post
          </Link>
          <Link className="mr-6 hover:text-blue-400 hover:underline hover:font-bold" href="/faq" onClick={closeMobileMenu}>
            FAQs
          </Link>
          <Link className="mr-6 hover:text-blue-400 hover:underline hover:font-bold" href="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>
        </nav>
        <div className='relative'>
          <div className="profile" onClick={toggleDropdown}>
          {/* Your profile image */}
          <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
          </div>
        
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="flex flex-col">
                {session?.user?.name && (
                  <li className="px-4 py-2 text-blue-400 font-bold">{session.user.name}</li>
                )}
                <Link href="/profile">
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Your Profile</li>
                </Link>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer" onClick={() => {signOut(); closeMobileMenu();}}>Logout</li>
              </ul>
            </div>
          )}
          {isMobileMenuOpen && (
              <div className="absolute top-4 right-4 md:hidden">
                <CgCloseO className="text-black cursor-pointer" onClick={toggleMobileMenu} style={{ fontSize: '24px' }} />
              </div>
            )}
        </div>
      </div>
    </header>
    </>
  )
}

export default HeadDash
