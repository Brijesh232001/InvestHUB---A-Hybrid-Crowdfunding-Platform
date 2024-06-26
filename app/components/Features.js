import React from 'react'
import {GiCompass} from "react-icons/gi";
import {GiDivergence} from "react-icons/gi";
import { GiBullseye } from "react-icons/gi";

const Features = () => {
  return (
    <section class="text-gray-600 body-font"style={{backgroundImage: "url('/images/img_vector.png')", backgroundSize: "290% 150%"}}>
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-wrap -m-1 justify-center">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">Top Features</h1>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
      </div>
      
    </div>
    
    <br/>
      <div class="p-4 md:w-1/4 mr-14"style={{height: 500}}>

        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
      
          <div class="p-6 text-center bg-white">
          <GiCompass className="text-7xl text-blue-400 mx-auto mb-6" />
            <h1 class="title-font text-lg font-bold text-gray-900 mb-3">Navigate the Future of Finance</h1>
            <p class="leading-relaxed mb-3">InvestHUB is your gateway to the future of finance, breaking barriers with innovative, user-friendly crowdfunding solutions. Entrepreneurs and backers can easily navigate this new landscape, with simple, transparent ways. Join InvestHUB and turn your financial aspirations into reality.</p>
            <br></br><br></br></div>
        </div>
      </div>
      

      <div class="p-4 md:w-1/4"style={{height: 500}}>
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
          
          <div class="p-6 text-center bg-white">
          <GiDivergence className="text-7xl text-blue-400 mx-auto mb-6" />
            <h1 class="title-font text-lg font-bold text-gray-900 mb-3">Diverse Fundraising Options</h1>
            <p class="leading-relaxed mb-3">InvestHUB offers diverse fundraising options tailored to different projects and investors. Our platform supports reward-based crowdfunding for creative projects, equity crowdfunding for startups, and debt crowdfunding for traditional investments. Choose InvestHUB for versatile, inclusive crowdfunding.</p>
            <br></br><br></br>
            </div>
        </div>
      </div>
      
      
      <div class="p-4 md:w-1/4 ml-14"style={{height: 500}}>
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
          
          <div class="p-6 text-center bg-white">
          <GiBullseye className="text-7xl text-blue-400 mx-auto mb-6" />
            <h1 class="title-font  text-lg font-bold text-gray-900 mb-3">Targeted Business Funding</h1>
            <p class="leading-relaxed mb-3">InvestHUB provides targeted funding solutions for businesses, from startups to established enterprises. Entrepreneurs can showcase their ideas to a global audience, attracting investors who become active stakeholders. This focused approach ensures businesses secure the capital needed to innovate and thrive.</p>
            <br></br><br></br></div>
        </div>
      </div>
    </div>
   
  </div>
</section>
  )
}

export default Features
