"use client";
import React, { useState } from 'react';

import BusinessAdForm from './BusinessAdForm';
import SponsorshipEventAdForm from './SponsorshipEventAdForm';
import CharityEventAdForm from './CharityEventAdForm';

const Post = () => {
    const [adType, setAdType] = useState('');

    const handleAdTypeChange = (event) => {
      setAdType(event.target.value);
    };
  return (
    <>
    <h1 className="flex justify-center">Ad Posting Form</h1>
    <br></br>

    
<div class="max-w-lg mx-auto">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
  <select value={adType} onChange={handleAdTypeChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option selected>Select...</option>
    <option value="business">Business Ad</option>
    <option value="sponsorship">Sponsorship Event Ad</option>
    <option value="charity">Charity Event Ad</option>
  </select>
  {adType === 'business' && <BusinessAdForm />}
  {adType === 'sponsorship' && <SponsorshipEventAdForm />}
  {adType === 'charity' && <CharityEventAdForm />}
 
</div>

    </>
  )
}

export default Post
