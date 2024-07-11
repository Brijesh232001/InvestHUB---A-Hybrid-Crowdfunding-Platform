import React from 'react';
import { GiCompass, GiDivergence, GiBullseye } from "react-icons/gi";

const Features = ({ searchQuery }) => {
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
    <section className="text-gray-600 body-font" style={{ backgroundImage: "url('/images/img_vector.png')", backgroundSize: "290% 150%" }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
          <div className="w-full text-center mb-12">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">Top Features</h1>
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="p-6 text-center bg-white">
                <GiCompass className="text-7xl text-blue-400 mx-auto mb-6" />
                <h2 className="title-font text-lg font-bold text-gray-900 mb-3">
                  {highlightText("Navigate the Future of Finance", searchQuery)}
                </h2>
                <p className="leading-relaxed mb-3">
                  {highlightText("InvestHUB is your gateway to the future of finance, breaking barriers with innovative, user-friendly crowdfunding solutions. Entrepreneurs and backers can easily navigate this new landscape, with simple, transparent ways.Navigate Your Funds in right way with InvestHUB.  Join InvestHUB and turn your financial aspirations into reality.", searchQuery)}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="p-6 text-center bg-white">
                <GiDivergence className="text-7xl text-blue-400 mx-auto mb-6" />
                <h2 className="title-font text-lg font-bold text-gray-900 mb-3">
                  {highlightText("Diverse Fundraising Options", searchQuery)}
                </h2>
                <p className="leading-relaxed mb-3">
                  {highlightText("InvestHUB offers diverse fundraising options tailored to different projects and investors. Our platform supports reward-based crowdfunding for creative projects, equity crowdfunding for startups, and debt crowdfunding for traditional investments.Enable Diverse Funding Options. Choose InvestHUB for versatile, inclusive crowdfunding.", searchQuery)}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
              <div className="p-6 text-center bg-white">
                <GiBullseye className="text-7xl text-blue-400 mx-auto mb-6" />
                <h2 className="title-font text-lg font-bold text-gray-900 mb-3">
                  {highlightText("Targeted Business Funding", searchQuery)}
                </h2>
                <p className="leading-relaxed mb-3">
                  {highlightText("InvestHUB provides targeted funding solutions for businesses, from startups to established enterprises. Entrepreneurs can showcase their ideas to a global audience, attracting investors who become active stakeholders. This focused approach ensures businesses secure the capital needed to innovate and thrive.", searchQuery)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
