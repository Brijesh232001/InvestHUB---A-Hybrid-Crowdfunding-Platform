"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { SlUser, SlLocationPin } from "react-icons/sl";
import { MdOutlineMail, MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import HeadDash from '../components/HeadDash';
import Footer from '../components/Footer';
import Link from 'next/link';

const page = () => {
    

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [oname, setOname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState('');
    const [rfunding, setRfunding] = useState('');
    const [tfunding, setTfunding] = useState('');
    const [edescription, setEdescription] = useState('');
    const [audience, setAudience] = useState('');
    const [benefits, setBenefits] = useState('');
    const [url, setUrl] = useState('');
    const [terms, setTerms] = useState('');
    
   
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const nameParam = urlParams.get('name');
      const idParam = urlParams.get('id');
      const onameParam = urlParams.get('oname');
      const emailParam = urlParams.get('email');
      const phoneParam = urlParams.get('phone');
      const dateParam = urlParams.get('date');
      const venueParam = urlParams.get('venue');
      const rfundingParam = urlParams.get('rfunding');
      const tfundingParam = urlParams.get('tfunding');
      const edescriptionParam = urlParams.get('edescription');
      const audienceParam = urlParams.get('audience');
      const benefitsParam = urlParams.get('benefits');
      const urlParam = urlParams.get('url');
      const termsParam = urlParams.get('terms');
      
  
      if (nameParam && idParam && onameParam && emailParam && phoneParam && dateParam && venueParam && rfundingParam && tfundingParam && edescriptionParam && audienceParam && benefitsParam && urlParam && termsParam) {
        setName(nameParam);
        setId(idParam);
        setOname(onameParam);
        setEmail(emailParam);
        setPhone(phoneParam);
        setDate(dateParam);
        setVenue(venueParam);
        setRfunding(rfundingParam);
        setTfunding(tfundingParam);
        setEdescription(edescriptionParam);
        setAudience(audienceParam);
        setBenefits(benefitsParam);
        setUrl(urlParam);
        setTerms(termsParam);
        
      }
    }, []);
  return (
    <div >
    <HeadDash />
    <section className="text-gray-600 body-font overflow-hidden bg-gradient-to-br from-blue-400 to-green-400">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center items-center mb-10">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/images/business_demo.jpg" />
        </div>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-full w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex flex-wrap -mx-4 mb-4">

            <div className="lg:w-1/2 w-full px-4">
                <div className="border rounded-lg p-6 h-full flex flex-col justify-between bg-white">
                  <h2 className="text-lg title-font text-gray-500 tracking-widest"><i className="fas fa-info-circle"></i> Event</h2>
                  <div className="flex justify-between mb-4">
                    <div>
                      <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-hand-holding-usd"></i> Event Name</h1>
                      <h1 className="text-gray-900 text-3xl title-font font-medium"> {name}</h1>
                    </div>
                    <div>
                      <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-chart-line"></i> Event ID</h1>
                      <h1 className="text-gray-900 text-3xl title-font font-medium"> {id}</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full px-4">
                <div className="border rounded-lg p-6 h-full flex flex-col justify-between bg-white">
                  <h2 className="text-lg title-font text-gray-500 tracking-widest"><i className="fas fa-info-circle"></i> Funding Details</h2>
                  <div className="flex justify-between mb-4">
                    <div>
                      <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-hand-holding-usd"></i> Total Funding</h1>
                      <h1 className="text-gray-900 text-3xl title-font font-medium"><span>&#8377;</span> {tfunding}</h1>
                    </div>
                    <div>
                      <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-chart-line"></i> Required Funding</h1>
                      <h1 className="text-gray-900 text-3xl title-font font-medium"><span>&#8377;</span> {rfunding}</h1>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="border rounded-lg p-6 flex flex-wrap bg-white">
              <h2 className="text-lg title-font text-gray-500 tracking-widest mb-4"><i className="fas fa-user"></i> Organizer Details</h2>
              <div className="flex flex-wrap items-center w-full gap-11">
                <div className="w-full sm:w-auto flex items-center mb-2 sm:mb-0 mr-4">
                  <span className="text-pink-600 mr-2"><i className="fas fa-user-tie"></i></span>
                  <SlUser className="text-pink-600 text-3xl mr-2"/>
                  <h1 className="text-pink-600 text-xl title-font font-medium mb-1 mr-2">Name:</h1>
                  <h1 className="text-gray-900 text-xl title-font font-medium mb-1">{oname}</h1>
                </div>
                <div className="w-full sm:w-auto flex items-center mb-2 sm:mb-0 mr-4">
                  <span className="text-pink-600 mr-2"><i className="fas fa-envelope"></i></span>
                  <MdOutlineMail className="text-pink-600 text-3xl mr-2"/>
                  <h1 className="text-pink-600 text-xl title-font font-medium mb-1 mr-2">Email:</h1>
                  <h1 className="text-gray-900 text-xl title-font font-medium mb-1">{email}</h1>
                </div>
                <div className="w-full sm:w-auto flex items-center">
                  <span className="text-pink-600 mr-2"><i className="fas fa-phone"></i></span>
                  <MdOutlinePhoneAndroid className="text-pink-600 text-3xl mr-2"/>
                  <h1 className="text-pink-600 text-xl title-font font-medium mb-1 mr-2">Phone:</h1>
                  <h1 className="text-gray-900 text-xl title-font font-medium mb-1">{phone}</h1>
                </div>
                </div>
            </div>
            <br></br>
            <div className="border rounded-lg p-6 lg:w-4/5 mx-auto mb-4 bg-white">
              <h2 className="text-lg title-font text-gray-500 tracking-widest"><i className="fas fa-info-circle"></i> Event Details</h2>
              <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-briefcase"></i>Description</h1>
              <p className="leading-relaxed mb-4">{edescription}</p>
              <br></br>
              <div class="flex items-center mb-6">
                <MdOutlineDateRange  className="text-pink-600 text-3xl mr-2" />
                <h1 className="text-gray-900 text-xl title-font font-medium mb-1"> {date}</h1>
              </div>
              <div class="flex items-center">
                <SlLocationPin className="text-pink-600 text-3xl mr-2" />
                <h1 className="text-gray-900 text-xl title-font font-medium mb-1"> {venue}</h1>
              </div>
              <br></br>
              <h1 className="text-gray-900 text-xl title-font font-medium"><span className="text-pink-600"><i className="fas fa-link"></i> Event URL:</span> <Link href={url} className="text-pink-600 underline">{url}</Link></h1>
            </div>
            <div className="border rounded-lg p-6 lg:w-4/5 mx-auto mb-4 bg-white">
              <h2 className="text-lg title-font text-gray-500 tracking-widest"><i className="fas fa-info-circle"></i> Additional Information</h2>
              <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-box"></i> Audience Demographics</h1>
              <p className="leading-relaxed">{audience}</p>
            </div>
            <div className="border rounded-lg p-6 lg:w-4/5 mx-auto mb-4 bg-white">
              <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-box"></i> Benefits For Sponsors</h1>
              <p className="leading-relaxed">{benefits}</p>
            </div>
            <div className="border rounded-lg p-6 lg:w-4/5 mx-auto mb-4 bg-white">
              <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-file-contract"></i> Terms And Conditions</h1>
              <p className="leading-relaxed">{terms}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>

  )
}

export default page
