"use client";

import React from 'react'
import { useState } from "react";


const BusinessAdForm = () => {

  
  const [businessName, setBusinessName] = useState("");
 
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [requiredFunding, setRequiredFunding] = useState("");
  const [totalFunding, setTotalFunding] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [termsConditions, setTermsConditions] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch("api/business", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        businessName,
        
        ownerName,
        email,
        phoneNumber,
        businessAddress,
        requiredFunding,
        totalFunding,
        businessDescription,
        productDescription,
        websiteUrl,
        termsConditions
      }),
    });
  
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
  
    if (success) {
      setBusinessName("");
     
      setOwnerName("");
      setEmail("");
      setPhoneNumber("");
      setBusinessAddress("");
      setRequiredFunding("");
      setTotalFunding("");
      setBusinessDescription("");
      setProductDescription("");
      setWebsiteUrl("");
      setTermsConditions("");
    }
  }
  


  return (
    <>
    <div class="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
  <h1 class="text-xl font-semibold mb-4 text-center">Business Advertisement Form</h1>
  <form onSubmit={handleSubmit} >
  
    <div class="grid grid-cols-2 gap-4">
    <div>
        <label htmlFor="businessName" class="block text-sm font-medium leading-6 text-gray-700">Business Name</label>
        <input type="text" id="businessName" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setBusinessName(e.target.value)} value={businessName}/>
      </div>
      
      <div>
        <label htmlFor="ownerName" class="block text-sm font-medium leading-6 text-gray-700">Owner Name</label>
        <input type="text" id="ownerName" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setOwnerName(e.target.value)} value={ownerName}/>
      </div>
      <div>
        <label htmlFor="email" class="block text-sm font-medium leading-6 text-gray-700">Email</label>
        <input  type="email"  id="email"class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <div>
        <label htmlFor="phoneNumber" class="block text-sm font-medium leading-6 text-gray-700">Phone Number</label>
        <input type="text" id="phoneNumber" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}  />
      </div>
      <div class="col-span-2">
        <label htmlFor="businessAddress" class="block text-sm font-medium leading-6 text-gray-700">Business Address</label>
        <input type="text" id="businessAddress" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setBusinessAddress(e.target.value)} value={businessAddress}  />
      </div>
      
      <div>
        <label htmlFor="requiredFunding" class="block text-sm font-medium leading-6 text-gray-700">Required Funding</label>
        <input type="text" id="requiredFunding"class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setRequiredFunding(e.target.value)} value={requiredFunding}  />
      </div>
      <div>
        <label htmlFor="totalFunding" class="block text-sm font-medium leading-6 text-gray-700">Total Funding</label>
        <input type="text" id="totalFunding"class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setTotalFunding(e.target.value)} value={totalFunding}  />
      </div>
      <div class="col-span-2">
        <label htmlFor="businessDescription"class="block text-sm font-medium leading-6 text-gray-700">Business Description</label>
        <textarea  id="businessDescription" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setBusinessDescription(e.target.value)} value={businessDescription} ></textarea>
      </div>
      <div class="col-span-2">
        <label htmlFor="productDescription"class="block text-sm font-medium leading-6 text-gray-700" >Product/Service Description</label>
        <textarea  id="productDescription" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setProductDescription(e.target.value)} value={productDescription} ></textarea>
      </div>
      <div class="col-span-2">
        <label htmlFor="websiteUrl" class="block text-sm font-medium leading-6 text-gray-700">Website URL (if Not Type "N/A")</label>
        <input type="text" id="websiteUrl" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setWebsiteUrl(e.target.value)} value={websiteUrl} />
      </div>
     
      <div class="col-span-2">
        <label htmlFor="termsConditions" class="block text-sm font-medium leading-6 text-gray-700">Terms And Conditions</label>
        <textarea id="termsConditions"  rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setTermsConditions(e.target.value)} value={termsConditions}></textarea>
      </div>
    </div>
    <div class="mt-6 flex justify-end">
      <button type="button" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
        Cancel
      </button>
      <button type="submit" class="ml-3 inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save
      </button>
    </div>
  </form>
  <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
</div>


    
    
    </>
  )
}

export default BusinessAdForm