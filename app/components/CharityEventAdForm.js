"use client";

import React from 'react'
import { useState } from "react";

const CharityEventAdForm = () => {

  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [purpose, setPurpose] = useState("");
  const [help, setHelp] = useState("");
  const [requiredFunding, setRequiredFunding] = useState("");
  const [totalFunding, setTotalFunding] = useState("");
  const [raiserName, setRaiserName] = useState("");
  const [raiserEmail, setRaiserEmail] = useState("");
  const [raiserPhoneNumber, setRaiserPhoneNumber] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/charity", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        
        title,
        introduction,
        purpose,
        help,
        requiredFunding,
  totalFunding,
        raiserName,
        raiserEmail,
        raiserPhoneNumber,
        additionalInformation,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      
      setTitle("");
      setIntroduction("");
      setPurpose("");
      setHelp("");
      setRequiredFunding("");
      setTotalFunding("");
      setRaiserName("");
      setRaiserEmail("");
      setRaiserPhoneNumber("");
      setAdditionalInformation("");

    }

  }





  return (
    <>
    <div class="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
  <h1 class="text-xl font-semibold mb-4 text-center">Charity Raising Form</h1>
  <form onSubmit={handleSubmit}>
    
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="title" class="block text-sm font-medium leading-6 text-gray-700">Event Name</label>
        <input type="text" id="title" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setTitle(e.target.value)} value={title}/>
      </div>
      <div>
        <label for="introduction" class="block text-sm font-medium leading-6 text-gray-700">Introduction</label>
        <textarea type="text" id="introduction" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setIntroduction(e.target.value)} value={introduction}/>
      </div>
      <div>
        <label for="purpose" class="block text-sm font-medium leading-6 text-gray-700">Purpose</label>
        <textarea type="text" id="purpose" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setPurpose(e.target.value)} value={purpose}/>
      </div>
      <div>
        <label for="help" class="block text-sm font-medium leading-6 text-gray-700">How Can You Help Us ?</label>
        <textarea type="text" id="help" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setHelp(e.target.value)} value={help}/>
      </div>
      <div>
        <label htmlFor="requiredFunding" class="block text-sm font-medium leading-6 text-gray-700">Required Funding</label>
        <input type="text" id="requiredFunding"class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setRequiredFunding(e.target.value)} value={requiredFunding}  />
      </div>
      <div>
        <label htmlFor="totalFunding" class="block text-sm font-medium leading-6 text-gray-700">Total Funding</label>
        <input type="text" id="totalFunding"class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setTotalFunding(e.target.value)} value={totalFunding}  />
      </div>
      <div>
        <label for="raiserName" class="block text-sm font-medium leading-6 text-gray-700">Raiser Name</label>
        <input type="text" id="raiserName" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setRaiserName(e.target.value)} value={raiserName}/>
      </div>
      <div class="col-span-2">
        <label for="raiserEmail" class="block text-sm font-medium leading-6 text-gray-700">Raiser Email</label>
        <input type="email" id="raiserEmail" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setRaiserEmail(e.target.value)} value={raiserEmail}/>
      </div>
      <div class="col-span-2">
        <label for="raiserPhoneNumber" class="block text-sm font-medium leading-6 text-gray-700">Raiser Phone Number</label>
        <input type="text" id="raiserPhoneNumber" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setRaiserPhoneNumber(e.target.value)} value={raiserPhoneNumber}/>
      </div>
      <div>
        <label for="additionalInformation" class="block text-sm font-medium leading-6 text-gray-700">Additional Information</label>
        <textarea type="text" id="additionalInformation" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setAdditionalInformation(e.target.value)} value={additionalInformation}/>
      </div>
      
    </div>
    <div class="mt-6 flex justify-end">
      <button type="button" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">Cancel</button>
      <button type="submit" class="ml-3 inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
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

export default CharityEventAdForm
