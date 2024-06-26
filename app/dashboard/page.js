"use client";
import React, { useState } from 'react';
import HeadDash from '../components/HeadDash';
import BusinessAds from '../components/BusinessAds';
import SponsorshipAds from '../components/SponsorshipAds';
import CharityAds from '../components/CharityAds';

const page = () => {

  const [activeTab, setActiveTab] = useState('business');

  const handleTabChange = (tab) => {
      setActiveTab(tab);
  };

  return (
   <>
      <HeadDash />
      

      <div className="border-b border-gray-200 dark:border-gray-700 ">
            <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-8  ">
                <li className="me-2">
                    <a href="#" 
                       className={`inline-flex items-center justify-center p-4 border-b-2 border rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${activeTab === 'business' ? 'active text-blue-600 border-blue-600' : ''}`}
                       onClick={() => handleTabChange('business')}>
                       

                        Businesses
                    </a>
                </li>
                <li className="me-2">
                    <a href="#" 
                       className={`inline-flex items-center justify-center p-4 border-b-2 border rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${activeTab === 'sponsorship' ? 'active text-blue-600 border-blue-600' : ''}`}
                       onClick={() => handleTabChange('sponsorship')}>
                        
                        Sponsorship
                    </a>
                </li>
                <li className="me-2">
                    <a href="#" 
                       className={`inline-flex items-center justify-center p-4 border-b-2 border rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${activeTab === 'charity' ? 'active text-blue-600 border-blue-600' : ''}`}
                       onClick={() => handleTabChange('charity')}>
                        
                        Charity
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                {activeTab === 'business' && <BusinessAds />}
                {activeTab === 'sponsorship' && <SponsorshipAds />}
                {activeTab === 'charity' && <CharityAds />}
            </div>
        </div>

      
    </>
  )
}

export default page
