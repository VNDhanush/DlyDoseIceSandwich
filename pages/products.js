import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Portfolio/Banner';
import Content from 'components/Portfolio/Content';

class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Content />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Products;
