import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from "next-auth/react";

const Hero = ({ searchQuery }) => {
  const { data: session } = useSession();

  const highlightText = (text, query) => {
    if (!query.trim()) {
      return text;
    }

    // Split text into parts that match and don't match the query
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
    <section className="text-gray-600 body-font ml-5 mr-5 md:ml-10 md:mr-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:py-24">
        <div className="lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left mb-16 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome To
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-500">
            {highlightText("InvestHUB - A Hybrid Crowdfunding Platform", searchQuery)}
          </h1>
          <p className="mb-8 leading-relaxed text-center md:text-left">
            {highlightText(`The cutting-edge hybrid crowdfunding platform that redefines investment.
              Seamlessly blending equity and reward-based crowdfunding, InvestHub opens doors for both investors and entrepreneurs.
              Empower innovation, democratize finance, and join us in shaping the future of investment.
              Make What Matters to you, on Your Own Terms.`, searchQuery)}
          </p>
          <div className="flex justify-center md:justify-start">
            {!session && (
              <Link href="/login">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Get Started
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative w-full md:w-4/5 mx-auto mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              src="/images/new.jpg"
              width={600}
              height={400}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
