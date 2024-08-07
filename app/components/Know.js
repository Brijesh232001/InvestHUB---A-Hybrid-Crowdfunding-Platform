import React from 'react';

const Know = ({ searchQuery }) => {
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
    <section className="text-gray-600 body-font ml-10 mr-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Know About Us
          </h1>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
          <br />
          <p className="mb-8 leading-relaxed">
            {highlightText(`At InvestHUB, we are revolutionizing the world of crowdfunding by offering a hybrid platform that seamlessly integrates diverse fundraising models. Our mission is to empower entrepreneurs, creators, and organizations by providing the tools and resources they need to bring their visions to life. Whether you're looking to launch a groundbreaking startup, fund a creative project, or support a social cause, InvestHUB is your go-to platform for all your crowdfunding needs.`, searchQuery)}
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="/images/Know.png" />
        </div>
      </div>
    </section>
  );
};

export default Know;
