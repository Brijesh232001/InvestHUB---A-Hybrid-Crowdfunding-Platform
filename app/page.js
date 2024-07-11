"use client";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Know from "./components/Know";
import Services from "./components/Services";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero searchQuery={searchQuery} />
      <Services searchQuery={searchQuery} />
      <Know searchQuery={searchQuery} />
      <Features searchQuery={searchQuery} />
      <Footer />
    </>
  );
}
