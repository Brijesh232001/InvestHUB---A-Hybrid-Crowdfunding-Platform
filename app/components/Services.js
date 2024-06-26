import React from 'react';
import { FaFeatherAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";


const Services = () => {
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-5xl text-2xl font-bold title-font text-black mb-4">Why Choose Us</h1>
      <p class="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The Reason Why You Choose Us Is Because We Are:</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
      </div>
    </div>

    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
  <div class="p-4 md:w-1/4 flex flex-col text-center items-center  border-blue-500 rounded-lg border-4 ml-20 mr-20 ">
    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">   
      <FaFeatherAlt  class="w-10 h-10"/>   
    </div>

    <div class="flex-grow">
      <h2 class="text-gray-900 text-2xl title-font font-bold mb-3">Simple</h2>
      <p class="leading-relaxed text-base">InvestHUB offers a user-friendly interface, making it easy for both creators and backers to navigate the platform. The intuitive design and straightforward processes ensure a seamless experience for users, from browsing projects to contributing funds or managing campaigns.</p>
        </div>
      </div>
      
      <div class="p-4 md:w-1/4 flex flex-col text-center items-center  border-blue-500 rounded-lg border-4 ml-15 mr-10 ">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">  
        <RiSecurePaymentLine   class="w-10 h-10"/>
        </div>
        <div class="flex-grow ">
          <h2 class="text-gray-900 text-2xl title-font font-bold mb-3">Accessibility </h2>
          <p class="leading-relaxed text-base">Unlike traditional funding sources that may favor large projects or established businesses, InvestHUB empowers individuals, small businesses, and startups to access capital and turn their ideas into reality. </p>
        
        </div>
      </div>
     




      <div class="p-4 md:w-1/4 flex flex-col text-center items-center  border-blue-500 rounded-lg border-4 ml-10 mr-5 ">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">      
        <FaRegHandshake   class="w-10 h-10"/>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-2xl title-font font-bold mb-3">Community</h2>
          <p class="leading-relaxed text-base">InvestHUB facilitates community building around projects, allowing creators to engage with backers and build relationships beyond the duration of a campaign. Through features such as virtual chat boxes and interactive updates, creators can interact with backers, gather feedback, and cultivate a supportive community around their projects.</p>
        </div>
      </div>
    </div>
  </div>
</section>



</>
  );
}



export default Services