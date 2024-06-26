"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from "next-auth/react";
import {Avatar} from "@nextui-org/react";


const HeadDash = () => {

  
  return (
    <>
      <header className="text-gray-600 body-font h-30">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/dashboard">
            <Image src="/images/InvestHUB.png" width={200} height={200} className="h-full" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-6 hover:text-gray-900 md:hover:bg-transparent md:hover:text-blue-700" href="/dashboard">
              Dashboard
            </Link>
            <Link className="mr-6 hover:text-gray-900 md:hover:bg-transparent md:hover:text-blue-700" href="/adpost">
              Post
            </Link>
            <Link className="mr-6 hover:text-gray-900 md:hover:bg-transparent md:hover:text-blue-700" href="/faq">
              FAQs
            </Link>
            <Link className="mr-6 hover:text-gray-900 md:hover:bg-transparent md:hover:text-blue-700" href="/contact">
              Contact
            </Link>
            <Link href="/">
              
            <button className="bg-blue-400 hover:bg-white hover: border border-blue-400 hover:text-blue-400 text-white rounded-lg font-bold cursor-pointer px-6 py-2 mr-10" >Go To Home</button>
            </Link>
           
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>

          </nav>
        </div>
      </header>
    </>
  );
};

export default HeadDash;
