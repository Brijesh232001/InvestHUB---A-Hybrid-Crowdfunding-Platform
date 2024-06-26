"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";


const Header = () => {
  const { data: session } = useSession();

  return (
    <>
    <header className="text-gray-600 body-font  h-30">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center h-full">
       
        <Link href="/">
            <Image src="/images/InvestHUB.png" width={200} height={200} className="h-full" />
        </Link>
        
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-6 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="/about">
            About Us
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="/faq">
            FAQs
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="/contact">
            Contact
          </Link>
         
          {session ? (
            <>
              <button className="bg-blue-400 hover:bg-white hover:border border-blue-400 hover:text-blue-400 text-white rounded-lg font-bold cursor-pointer px-6 py-2 mr-10" onClick={() => signOut()}>Logout</button>
            </>
          ) : (
            <>
              <Link className="mr-6 hover:text-gray-900" href="/login">
                Login
              </Link>
              <Link href="/registerr">
                <button className="bg-blue-400 hover:bg-white hover:border border-blue-400 hover:text-blue-400 text-white rounded-lg font-bold cursor-pointer px-6 py-2 mr-10">Register</button>
              </Link>
            </>
          )}
        </nav>
        
      </div>
    </header>
    </>
  )
}

export default Header
