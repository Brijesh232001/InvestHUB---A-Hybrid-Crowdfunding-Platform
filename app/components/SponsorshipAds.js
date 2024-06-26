"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const SponsorshipAds = () => {

  const [sponsorship, setSponsorship] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let sponsorships = await fetch("http://localhost:3000/api/sponsorship");
        sponsorships = await sponsorships.json();
        console.log(sponsorships);
        setSponsorship(sponsorships.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 ml-6 mt-3 mr-6">
        {sponsorship.map((s) => (
         <div class="bg-gray-100 p-6 rounded-lg">
        
         <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/business_demo.jpg" alt="content"/>
         
         <h3 class="tracking-widest text-indigo-500 text-m font-medium title-font">Sponsorship</h3>
         <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{s.eventName}</h2>
        
         <br></br>
         <div class="flex justify-between">
           <h3 class="tracking-widest text-indigo-500 text-m font-medium title-font">Total Funding</h3>
           <h3 class="tracking-widest text-indigo-500 text-m font-medium title-font text-right">Req Funding</h3>
         </div>
         <br></br>
         <div class="flex justify-between">
         <h2 class="text-lg text-gray-900 font-medium title-font mb-4"><span>&#8377;</span>{s.totalSponsorship}</h2>
         <h2 class="text-lg text-gray-900 font-medium title-font mb-4 mr-6"><span>&#8377;</span>{s.requiredSponsorship}</h2>
         </div>

         <Link href= {{
                pathname: '/singlesponsorship',
                query: {
                    name: s.eventName,
                    id: s.eventId,
                    oname: s.organizerName,
                    email: s.email,
                    phone: s.phoneNumber,
                    date: s.eventDate,
                    venue: s.eventVenue,
                    rfunding: s.requiredSponsorship,
                    tfunding: s.totalSponsorship,
                    edescription: s.eventDescription, 
                    audience: s.audienceDemographics,
                    benefits: s.benefitsForSponsors,
                    url: s.websiteUrl,
                    terms: s.termsAndConditions,

                    
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

export default SponsorshipAds
