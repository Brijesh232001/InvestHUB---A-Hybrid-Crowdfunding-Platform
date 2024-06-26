"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CharityAds = () => {

  const [charity, setBusiness] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let charities = await fetch("http://localhost:3000/api/charity");
        charities = await charities.json();
        console.log(charities);
        setBusiness(charities.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 ml-6 mt-3 mr-6">
        {charity.map((c) => (
         <div class="bg-gray-100 p-6 rounded-lg">
        
         <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/business_demo.jpg" alt="content"/>
         
         <h3 class="tracking-widest text-indigo-500 text-m font-medium title-font">Charity</h3>
         <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{c.title}</h2>
         <p class="leading-relaxed text-base">{c.introduction}</p>
         <br></br>
         <div class="flex justify-between">
           <h3 class="tracking-widest text-indigo-500 text-m font-medium title-font">Total Funding</h3>
           <h3 class="tracking-widest text-indigo-500 text-m font-medium title-font text-right">Req Funding</h3>
         </div>
         <br></br>
         <div class="flex justify-between">
         <h2 class="text-lg text-gray-900 font-medium title-font mb-4"><span>&#8377;</span>{c.totalFunding}</h2>
         <h2 class="text-lg text-gray-900 font-medium title-font mb-4 mr-6"><span>&#8377;</span>{c.requiredFunding}</h2>
         </div>
         <Link href= {{
                pathname: '/singlecharity',
                query: {
                    name: c.title,
                    intro: c.introduction,
                    purpose: c.purpose,
                    help: c.help,
                    oname: c.raiserName,
                    email: c.raiserEmail,
                    phone: c.raiserPhoneNumber,
                    info: c.additionalInformation,     
                }
              }}>
                  <button className="bg-blue-400 hover:bg-white hover:border border-blue-400 hover:text-blue-400 text-white rounded-lg  cursor-pointer px-4 py-1" >View More..</button>
              </Link>
         </div>
        ))}
      </div>
      </>
  )
}

export default CharityAds
