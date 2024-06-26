import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Brijesh Gadewar",
    role: "Full Stack Developer - (NextJS)",
    description: "Brijesh drives the technical strategy of the InvestHUB platform and brand.",
    imageSrc: "/images/Brijesh.jpg",
    altText: "Brijesh Gadewar",
    instagramURL: "https://www.instagram.com/b_r_u_200123?igsh=dmhwa2RkYmRiMHRn",
    linkedinURL: "https://www.linkedin.com/in/brijesh-gadewar-20602625b/",
    githubURL: "https://github.com/Brijesh232001"
  },
  {
    name: "Pratik Gote",
    role: "DevOps Engineer",
    description: "Pratik drives the technical strategy of the InvestHUB platform and brand.",
    imageSrc: "/images/Pratik.jpg",
    altText: "Pratik Gote",
    instagramURL: "https://www.instagram.com/gote_pratik?igsh=YnBocjQ3Y2ozNW5n",
    linkedinURL: "https://in.linkedin.com/in/pratik-gote-516b361b3",
    githubURL: "https://github.com/praatikgote"
  },
  {
    name: "Vedant Dhakane",
    role: "Android Developer",
    description: "Vedant drives the technical strategy of the InvestHUB platform and brand.",
    imageSrc: "/images/V.jpg",
    altText: "Vedant Dhakane",
    instagramURL: "https://www.instagram.com/i_am_ved1310?igsh=dnNubDFlZmh6b240",
    linkedinURL: "",
    githubURL: ""
  },
  {
    name: "Anurag Nangare",
    role: "Android Developer",
    description: "Anurag drives the technical strategy of the InvestHUB platform and brand.",
    imageSrc: "/images/Anurag.jpg",
    altText: "Anurag Nangare",
    instagramURL: "https://www.instagram.com/anuragnangare?igsh=MWYycjgzdHdkZm52Yw==",
    linkedinURL: "https://www.linkedin.com/in/anurag-nangare-30999b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubURL: ""
  },
];

const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            The People Behind The Scenes Of The InvestHUB
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <Image
                src={member.imageSrc}
                width={150}
                height={150}
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                alt={member.altText}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href={member.instagramURL} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <span class="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#c13584]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </span>
                    </a>
                  </li>
                  <li>
                    <a href={member.linkedinURL} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <span class="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#0077b5]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </span>
                    </a>
                  </li>
                  <li>
                    <a href={member.githubURL} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
