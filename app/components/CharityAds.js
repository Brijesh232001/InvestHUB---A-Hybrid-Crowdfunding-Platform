"use client";

import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';

const CharityAds = () => {
  const [charity, setCharity] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let charities = await fetch("http://localhost:3000/api/charity");
        charities = await charities.json();
        console.log(charities);
        setCharity(charities.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCharity = charity.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ml-6 mt-3 mr-6">
      <div className="flex justify-center mb-4">
                <div className="relative w-1/2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <   FaSearch className="text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for Charity..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full p-2 pl-10 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
            </div>
      {filteredCharity.length === 0 ? (
        <div className="text-center text-gray-500">No Items Found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredCharity.map((c) => (
            <div className="bg-gray-100 p-6 rounded-lg" key={c.id}>
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/business_demo.jpg" alt="content"/>
              <h3 className="tracking-widest text-indigo-500 text-m font-medium title-font">Charity</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{c.title}</h2>
              <p className="leading-relaxed text-base">{c.introduction}</p>
              <br />
              <div className="flex justify-between">
                <h3 className="tracking-widest text-indigo-500 text-m font-medium title-font">Total Funding</h3>
                <h3 className="tracking-widest text-indigo-500 text-m font-medium title-font text-right">Req Funding</h3>
              </div>
              <br />
              <div className="flex justify-between">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4"><span>&#8377;</span>{c.totalFunding}</h2>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 mr-6"><span>&#8377;</span>{c.requiredFunding}</h2>
              </div>
              <Link href={{
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
                <button className="bg-blue-400 hover:bg-white hover:border border-blue-400 hover:text-blue-400 text-white rounded-lg cursor-pointer px-4 py-1">View More..</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharityAds;
