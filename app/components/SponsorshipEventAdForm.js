"use client";
import React from 'react'
import { useState } from "react";



const SponsorshipEventAdForm = () => {



  const [eventName, setEventName] = useState("");
  const [eventId, setEventId] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [requiredSponsorship, setRequiredSponsorship] = useState("");
  const [totalSponsorship, setTotalSponsorship] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [audienceDemographics, setAudienceDemographics] = useState("");
  const [benefitsForSponsors, setBenefitsForSponsors] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/sponsorship", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        
        eventName,
        eventId,
        organizerName,
        email,
        phoneNumber,
        eventDate,
        eventVenue,
        requiredSponsorship,
        totalSponsorship,
        eventDescription,
        audienceDemographics,
        benefitsForSponsors,
        websiteUrl,
        termsAndConditions,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      
      setEventName("");
      setEventId("");
      setOrganizerName("");
      setEmail("");
      setPhoneNumber("");
      setEventDate("");
      setEventVenue("");
      setRequiredSponsorship("");
      setTotalSponsorship("");
      setEventDescription("");
      setAudienceDemographics("");
      setBenefitsForSponsors("");
      setWebsiteUrl("");
      setTermsAndConditions("");

    }

  }



  return (
    <>
    <div class="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
  <h1 class="text-xl font-semibold mb-4 text-center">Event Sponsorship Form</h1>
  <form onSubmit={handleSubmit}>
    
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="eventName" class="block text-sm font-medium leading-6 text-gray-700">Event Name</label>
        <input type="text" id="eventName" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setEventName(e.target.value)} value={eventName}/>
      </div>
      <div>
        <label for="eventId" class="block text-sm font-medium leading-6 text-gray-700">Event ID</label>
        <input type="text" id="eventId" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setEventId(e.target.value)} value={eventId}/>
      </div>
      <div>
        <label for="organizerName" class="block text-sm font-medium leading-6 text-gray-700">Organizer Name</label>
        <input type="text" id="organizerName" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setOrganizerName(e.target.value)} value={organizerName}/>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-700">Email</label>
        <input type="email" id="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setEmail(e.target.value)} value={email}/>
      </div>
      <div>
        <label for="phoneNumber" class="block text-sm font-medium leading-6 text-gray-700">Phone Number</label>
        <input type="text" id="phoneNumber" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
      </div>
      <div class="col-span-2">
        <label for="eventDate" class="block text-sm font-medium leading-6 text-gray-700">Event Date</label>
        <input type="text" id="eventDate" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setEventDate(e.target.value)} value={eventDate}/>
      </div>
      <div class="col-span-2">
        <label for="eventVenue" class="block text-sm font-medium leading-6 text-gray-700">Event Venue</label>
        <input type="text" id="eventVenue" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setEventVenue(e.target.value)} value={eventVenue}/>
      </div>
      <div>
        <label for="requiredSponsorship" class="block text-sm font-medium leading-6 text-gray-700">Required Sponsorship</label>
        <input type="text" id="requiredSponsorship" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setRequiredSponsorship(e.target.value)} value={requiredSponsorship}/>
      </div>
      <div>
        <label for="totalSponsorship" class="block text-sm font-medium leading-6 text-gray-700">Total Sponsorship</label>
        <input type="text" id="totalSponsorship" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setTotalSponsorship(e.target.value)} value={totalSponsorship}/>
      </div>
      <div class="col-span-2">
        <label for="eventDescription" class="block text-sm font-medium leading-6 text-gray-700">Event Description</label>
        <textarea id="eventDescription" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setEventDescription(e.target.value)} value={eventDescription}></textarea>
      </div>
      <div class="col-span-2">
        <label for="audienceDemographics" class="block text-sm font-medium leading-6 text-gray-700">Audience Demographics</label>
        <textarea id="audienceDemographics" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setAudienceDemographics(e.target.value)} value={audienceDemographics}></textarea>
      </div>
      <div class="col-span-2">
        <label for="benefitsForSponsors" class="block text-sm font-medium leading-6 text-gray-700">Benefits for Sponsors</label>
        <textarea id="benefitsForSponsors" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setBenefitsForSponsors(e.target.value)} value={benefitsForSponsors}></textarea>
      </div>
      <div class="col-span-2">
        <label for="websiteUrl" class="block text-sm font-medium leading-6 text-gray-700">Website URL (if Any?)</label>
        <input type="text" id="websiteUrl" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setWebsiteUrl(e.target.value)} value={websiteUrl}/>
      </div>
      <div class="col-span-2">
        <label for="termsAndConditions" class="block text-sm font-medium leading-6 text-gray-700">Terms And Conditions</label>
        <textarea id="termsAndConditions" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setTermsAndConditions(e.target.value)} value={termsAndConditions}></textarea>
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

export default SponsorshipEventAdForm
