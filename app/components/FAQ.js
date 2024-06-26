"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeadDash from './HeadDash';
import { useSession } from "next-auth/react";

const FAQ = () => {
    const { data: session } = useSession();
 
  return (
    <>

{session ? (
            <>
              <HeadDash/>
            </>
          ) : (
            <>
              <Header/>
            </>
          )}
    
     <div
    class=" w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10 ">
    <div class="mx-auto px-5">
        <div class="flex flex-col items-center">
            <h2 class="mt-5 text-center text-blue-500 text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p class="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions

            </p>
        </div>
        <div class="mx-auto mt-8 grid max-w-5xl divide-y divide-neutral-200">
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> What is InvestHUB?</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">InvestHUB is a hybrid crowdfunding platform that connects investors with promising startups and businesses seeking funding. 
                    It provides a seamless interface for both investors and entrepreneurs to interact, facilitating investment opportunities and fostering growth.
                    </p>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How does InvestHUB work?</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">InvestHUB operates on a hybrid model, combining elements of equity-based, reward-based and charity-based crowdfunding.
                    Startups and businesses create campaigns outlining their funding needs and goals. Investors can then browse through these campaigns and choose to invest either for equity or for rewards offered by the businesses.
                    </p>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How can I invest on InvestHUB?</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Investing on InvestHUB is easy. Simply sign up for an account, browse through the available campaigns, and choose the ones that align with your investment goals. You can then invest either by purchasing equity in the businesses or by supporting them in exchange for rewards.
                    </p>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> What are the risks associated with investing through InvestHUB?</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Like any investment opportunity, investing through InvestHUB carries inherent risks. Startups and businesses may fail to achieve their goals, resulting in a loss of investment. It's essential for investors to conduct thorough due diligence before making any investment decisions.
                    </p>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How do I contact support?</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
                        have any other questions, you can contact the company's support team by submitting a support
                        request through the website or by emailing support@ourwebsite.com.
                    </p>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Does InvestHUB charge any fees for listing campaigns or processing investments?</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">No, InvestHUB is completely free to use for both campaign creators and investors. We do not charge any fees for listing campaigns on our platform or for processing investments. Our goal is to provide a transparent and accessible crowdfunding solution without imposing financial barriers on entrepreneurs or investors.
                    </p>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>How can investors connect with campaign hosts on InvestHUB?</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">While InvestHUB facilitates the matchmaking between investors and campaign hosts, we do not handle financial transactions directly on the platform. If you're interested in investing in a particular campaign, simply reach out to the campaign host directly through the contact information provided on their campaign page. This direct communication allows investors to negotiate terms, ask questions, and establish relationships with the businesses they're interested in supporting.
                    </p>
                </details>
            </div>
            
        </div>
    </div>
</div>
<Footer/>
    </>
  );
};

export default FAQ;
