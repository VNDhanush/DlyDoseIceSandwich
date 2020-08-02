import React from 'react';
import Navbar from 'components/Layouts/Navbar';
import Footer from 'components/Layouts/Footer';
import Banner from 'components/Home/Banner';
import Partners from 'components/Home/Partners';
import Content from 'components/Home/Content';
import GalleryContent from 'components/Home/GalleryContent';

class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <GalleryContent/>
        <Content />
        <Partners />
        <Footer />
      </>
    );
  }
}

export default Index;
