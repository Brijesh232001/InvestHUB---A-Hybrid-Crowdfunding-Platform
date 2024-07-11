import React from 'react'
import Know from './Know'
import Services from './Services'
import Header from './Header'
import Footer from './Footer'
import Team from './Team'

const About = () => {
  const searchQuery = '';
  return (
    <>
    <Header/>
    <Know searchQuery={searchQuery}/>
    <Services searchQuery={searchQuery}/>
    <Team/>
    <Footer/>
    </>
  )
}

export default About
