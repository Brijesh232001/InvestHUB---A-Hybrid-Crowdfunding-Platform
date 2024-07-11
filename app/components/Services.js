import React from 'react';
import { FaFeatherAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";

const Services = ({ searchQuery }) => {
  const highlightText = (text, query) => {
    if (!query.trim()) {
      return text;
    }

    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-2xl font-bold title-font text-black mb-4">
            Why Choose Us
          </h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            The Reason Why You Choose Us Is Because We Are:
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4 gap-10">
          <div className="p-4 lg:w-1/4 md:w-full flex flex-col items-center border-blue-500 rounded-lg border-4 mb-6 md:mb-0">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <FaFeatherAlt className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-2xl title-font font-bold mb-3 text-center">
                {highlightText("Simple", searchQuery)}
              </h2>
              <p className="leading-relaxed text-base text-center px-4">
                {highlightText("InvestHUB offers a user-friendly interface, making it easy for both creators and backers to navigate the platform. The intuitive design and straightforward processes ensure a seamless experience for users, from browsing projects to contributing funds or managing campaigns.", searchQuery)}
              </p>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-full flex flex-col items-center border-blue-500 rounded-lg border-4 mb-6 md:mb-0">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <RiSecurePaymentLine className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-2xl title-font font-bold mb-3 text-center">
                {highlightText("Accessibility", searchQuery)}
              </h2>
              <p className="leading-relaxed text-base text-center px-4">
                {highlightText("Unlike traditional funding sources that may favor large projects or established businesses, InvestHUB empowers individuals, small businesses, and startups to access capital and turn their ideas into reality.", searchQuery)}
              </p>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-full flex flex-col items-center border-blue-500 rounded-lg border-4 mb-6 md:mb-0">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <FaRegHandshake className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-2xl title-font font-bold mb-3 text-center ">
                {highlightText("Community", searchQuery)}
              </h2>
              <p className="leading-relaxed text-base text-center px-4">
                {highlightText("InvestHUB facilitates community building around projects, allowing creators to engage with backers and build relationships beyond the duration of a campaign. Through features such as virtual chat boxes and interactive updates, creators can interact with backers, gather feedback, and cultivate a supportive community around their projects.", searchQuery)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
