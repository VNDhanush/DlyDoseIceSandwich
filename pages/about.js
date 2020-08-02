import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/About/Banner';
import AboutContent from '../components/About/AboutContent';
import Platform from '../components/About/Platform';

const About = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutContent />  
      <Platform />
      <Footer />
    </>
  );
};

export default About;
