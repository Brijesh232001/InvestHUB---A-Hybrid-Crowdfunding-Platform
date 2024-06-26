"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { SlUser, SlLocationPin } from "react-icons/sl";
import { MdOutlineMail, MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import HeadDash from '../components/HeadDash';
import Footer from '../components/Footer';

const page = () => {
    

    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');
    const [purpose, setPurpose] = useState('');
    const [help, setHelp] = useState('');
    const [oname, setOname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [info, setInfo] = useState('');
   
    
   
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const nameParam = urlParams.get('name');
      const introParam = urlParams.get('intro');
      const purposeParam = urlParams.get('purpose');
      const helpParam = urlParams.get('help');
      const onameParam = urlParams.get('oname');
      const emailParam = urlParams.get('email');
      const phoneParam = urlParams.get('phone');
      const infoParam = urlParams.get('info');
      
      
  
      if (nameParam && introParam && purposeParam && helpParam && onameParam && emailParam && phoneParam  && infoParam ) {
        setName(nameParam);
        setIntro(introParam);
        setPurpose(purposeParam);
        setHelp(helpParam);
        setOname(onameParam);
        setEmail(emailParam);
        setPhone(phoneParam);
        setInfo(infoParam);
        
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

            <div className="lg:w-full w-full px-4 mb-4 lg:mb-0 flex justify-center"> {/* Added flex and justify-center */}
  <div className="lg:w-1/2 w-full px-4 mb-4 lg:mb-0 ">
    <div className="border rounded-lg p-6 h-full bg-white">
      <h2 className="text-lg title-font text-gray-500 tracking-widest"><i className="fas fa-info-circle"></i> Charity</h2>
      <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
        <span className="text-pink-600"><i className="fas fa-building"></i>Name</span> <br></br>{name}
      </h1>
      <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
        <span className="text-pink-600"><i className="fas fa-building"></i>Introduction</span> <br></br>{intro}
      </h1>
    </div>
  </div>
</div>


            </div>
            <div className="border rounded-lg p-6 lg:w-4/5 mx-auto mb-4 flex flex-wrap bg-white">
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
              <h2 className="text-lg title-font text-gray-500 tracking-widest"><i className="fas fa-info-circle"></i> More Details</h2>
              <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-briefcase"></i>Purpose</h1>
              <p className="leading-relaxed mb-4">{purpose}</p>
            </div>
            <div className="border rounded-lg p-6 lg:w-4/5 mx-auto mb-4 bg-white">
              
              <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-box"></i> Required Help</h1>
              <p className="leading-relaxed">{help}</p>
            </div>
            <div className="border rounded-lg p-6 lg:w-4/5 mx-auto mb-4 bg-white">
              <h1 className="text-pink-600 text-2xl title-font font-medium mb-1"><i className="fas fa-box"></i> Additional Information</h1>
              <p className="leading-relaxed">{info}</p>
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
