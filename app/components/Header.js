"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { CgMenu, CgCloseO } from 'react-icons/cg';

const Header = ({ searchQuery, setSearchQuery }) => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="text-black body-font sticky top-0 z-50 bg-white" style={{ height: '140px' }}>
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between relative">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/images/InvestHUB.png" width={200} height={200} className="h-full" />
        </Link>
        
      
        
        {/* Navigation Links */}
        <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center md:justify-end ${isMobileMenuOpen ? 'flex-col absolute top-full right-0 w-full bg-blue-100 p-5' : 'hidden md:flex'}`}>
            
          <Link className="mr-6 mb-4 md:mb-0 hover:text-blue-400 hover:underline hover:font-bold" href="/" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link className="mr-6 mb-4 md:mb-0 hover:text-blue-400 hover:underline hover:font-bold" href="/about" onClick={closeMobileMenu}>
            About Us
          </Link>
          <Link className="mr-6 mb-4 md:mb-0 hover:text-blue-400 hover:underline hover:font-bold" href="/faq" onClick={closeMobileMenu}>
            FAQs
          </Link>
          <Link className="mr-6 mb-4 md:mb-0 hover:text-blue-400 hover:underline hover:font-bold" href="/contact" onClick={closeMobileMenu}>
            Contact Us
          </Link>
          {session ? (
            <>
              <Link className="mr-6 mb-4 md:mb-0 hover:text-blue-400 hover:underline hover:font-bold" href="/dashboard" onClick={closeMobileMenu}>
                Dashboard
              </Link>
              <div className='relative'>
                <div className="profile" onClick={toggleDropdown}>
                  {/* Your profile image */}
                  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
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
            </>
          ) : (
            <>
              <Link className="mr-6 mb-4 md:mb-0 hover:text-blue-400 hover:underline hover:font-bold" href="/login" onClick={closeMobileMenu}>
                Login
              </Link>
              <Link href="/register">
                <button className="bg-blue-400 hover:bg-white hover:border border-blue-400 hover:text-blue-400 text-white rounded-lg font-bold cursor-pointer px-6 py-2 mr-10" onClick={closeMobileMenu}>
                  Register
                </button>
              </Link>
            </>
          )}
          {/* Search Input */}
        <div className="relative flex items-center justify-center ml-4 mr-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-40 p-2 border border-gray-300 rounded-lg text-center md:w-auto"
            onFocus={(e) => { e.target.style.borderColor = '#2563EB'; }}
            onBlur={(e) => { e.target.style.borderColor = 'initial'; }}
          />
          <FiSearch className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
        </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="absolute top-4 right-4 md:hidden">
          {isMobileMenuOpen ? (
            <CgCloseO className="text-black cursor-pointer" onClick={toggleMobileMenu} style={{ fontSize: '24px' }} />
          ) : (
            <CgMenu className="text-black cursor-pointer" onClick={toggleMobileMenu} style={{ fontSize: '24px' }} />
          )}
        </div>
        
        {/* Mobile Menu Close Button */}
        {isMobileMenuOpen && (
          <div className="absolute top-4 right-4 md:hidden">
            <CgCloseO className="text-black cursor-pointer" onClick={toggleMobileMenu} style={{ fontSize: '24px' }} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
