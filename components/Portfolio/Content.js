import React, { Component } from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

import Lightbox from 'react-image-lightbox';
const images = [
  '/images/milkshake.png',
  '/images/rainbow.png',
  '/images/icecream.jpg',
  '/images/work-img4.jpg',
  '/images/wrap.png',
  '/images/bubblewrap.png'
];

class Content extends Component {
  state = {
    photoIndex: 0,
    isOpenImage: false
  };

  render() {
    return (
      <section className="saas-tools ptb-100 bg-gray">
        <section class="menu-list-bg bg-overlay-black-20">
          <div class="container text-center">
            <div class="row content-text">
              <h2>MILKSHAKES</h2>
            </div>
          </div>
        </section>

        <section class="our-menu page-section-pt">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Kit kat Shake</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Dairy Milk Shake</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Nutella Shake</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Oreo Shake</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Banana Caramel Shake</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Shakey Paan Shake</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Strawberry Shake</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Coconut Fudge Shake</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Chocolate Shake</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Cold Coffee Shake</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Blueberry Shake</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    {/* //WAFFLES */}
        <section class="menu-waffle-bg bg-overlay-black-80">
          <div class="container text-center">
            <div class="row content-text">
              <h2>Wraps</h2>
            </div>
          </div>
        </section>

        <section class="our-menu page-section-pt">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Maple Wrap </h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Cheese Wrap</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Belgian Wrap</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Brownie Wrap</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Nutella Wrap</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Red Velvet Wrap</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Cream Wrap</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>French Toast</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //Rainbow */}
        <section class="menu-rainbow-bg bg-overlay-black-120">
          <div class="container text-center">
            <div class="row content-text">
              <h2>Rainbow Ice Sandwiches</h2>
            </div>
          </div>
        </section>

        <section class="our-menu page-section-pt">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Rainbow Ice Sandwich</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Paan Rainbow Ice Sandwich</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Kulfi Rainbow Ice Sandwich</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Sitaphal Rainbow Ice Sandwich</h4>
                    </div>
                  </div>
                </div>
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Custard Rainbow Ice Sandwich</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Bagel Ice Sandiwch</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //Grilled Ice Sandwich */}
        <section class="menu-grilled-bg bg-overlay-black-160">
          <div class="container text-center">
            <div class="row content-text">
              <h2>Grilled Ice Sandwiches</h2>
            </div>
          </div>
        </section>

        <section class="our-menu page-section-pt">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Delight Sandwich</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Cheese Green Sandwich</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* //Bubble Waffle */}
        <section class="menu-bubble-bg bg-overlay-black-200">
          <div class="container text-center">
            <div class="row content-text">
              <h2>Bubble Waffle</h2>
            </div>
          </div>
        </section>

        <section class="our-menu page-section-pt">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Classic Bubble Waffle</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Chocolate Bubble Waffle</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
                <div class="menu-body menu-left simple menu-white">
                  <div class="menu-details">
                    <div class="menu-title clearfix">
                      <h4>Dly Dose Mocha Bubble Waffle</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        {/*<div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="tab">
                <ul className="tabs active">
                  <li
                    className="current"
                    onClick={(e) => this.openTabSection(e, 'tab1')}
                  >
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="icofont-dashboard-web"></i>
                        <br />
                        Milkshakes
                      </a>
                    </Link>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="icofont-inbox"></i>
                        <br />
                        Wraps
                      </a>
                    </Link>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="icofont-database"></i>
                        <br />
                        Rainbow Ice Sandwiches
                      </a>
                    </Link>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="icofont-copy-invert"></i>
                        <br />
                        Grilled Ice Cream Sandwiches
                      </a>
                    </Link>
                  </li>

                  <li onClick={(e) => this.openTabSection(e, 'tab5')}>
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()}>
                        <i className="icofont-stock-mobile"></i>
                        <br />
                        Waffles
                      </a>
                    </Link>
                  </li>
                </ul>

                

                <div className="tab_content">
                  <div id="tab1" className="tabs_item">
                    <div className="row h-100 justify-content-space-between align-items-center">
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems={'center'}
                        direction={'row'}
                        spacing={2}
                      >
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-evenly"
                          alignItems={'center'}
                          spacing={1}
                        >
                          
                          <Grid item>
                            <p>Kit Kat Shake</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          <Grid item>
                            <p>Dairy Milk Shake</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                         
                          <Grid item>
                            <p>Nutella Shake</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                         
                          
                          <Grid item>
                            <p>Oreo Shake</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          <Grid item>
                            <p>Blueberry Shake</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                         
                          <Grid item>
                            <p>Shakey Paan Shake</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                         
                          <Grid item>
                            <p>Strawberry Shake</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                         
                          <Grid item>
                            <p>Coconut Fudge Shake</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                         
                          <Grid item>
                            <p>Chocolate Shake</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                         
                          <Grid item>
                            <p>Cold Coffee Shake</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                         
                          <Grid item>
                            <p>Banana Caramel Shake</p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>

                  <div id="tab2" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems={'center'}
                        direction={'row'}
                        spacing={2}
                      >
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-evenly"
                          alignItems={'center'}
                          spacing={1}
                        >
                         
                          <Grid item>
                            <p>Maple Wrap</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          
                          <Grid item>
                            <p>Cheese Wrap</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          
                          <Grid item>
                            <p>Cream Wrap</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          
                          <Grid item>
                            <p>Belgian Wrap</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          
                          <Grid item>
                            <p>Brownie Wrap</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          
                          <Grid item>
                            <p>Nutella Wrap</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          
                          <Grid item>
                            <p>Red Velvet Wrap</p>
                          </Grid>
                        </Grid>

                      </Grid>
                    </div>
                  </div>

                  <div id="tab3" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems={'center'}
                        direction={'row'}
                        spacing={2}
                      >
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-evenly"
                          alignItems={'center'}
                          spacing={1}
                        >
                          
                          <Grid item>
                            <p>Vanilla Rainbow Ice Sandwich</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          <Grid item>
                            <p>Coconut Rainbow Ice Sandwich</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                        
                          <Grid item>
                            <p>Chocolate Rainbow Ice Sandwich</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                        
                          <Grid item>
                            <p>Paan Rainbow Ice Sandwich</p>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                        
                          <Grid item>
                            <p>Custard Rainbow Ice Sandwich</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                        
                          <Grid item>
                            <p>Sitaphal Rainbow Ice Sandwich</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                        
                          <Grid item>
                            <p>Kulfi Rainbow Ice Sandwich</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                        
                          <Grid item>
                            <p>Bagel Ice Sandwich</p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>

                  <div id="tab4" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems={'center'}
                        direction={'row'}
                        spacing={2}
                      >
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-evenly"
                          alignItems={'center'}
                          spacing={1}
                        >
                          
                          <Grid item>
                            <p>Delight Sandwich</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                        
                          <Grid item>
                            <p>Cheese Green Sandwich</p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>

                  <div id="tab5" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems={'center'}
                        direction={'row'}
                        spacing={2}
                      >
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-evenly"
                          alignItems={'center'}
                          spacing={1}
                        >
                          
                          <Grid item>
                            <p>Classic Bubble Waffle</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          <Grid item>
                            <p>Chocolate Bubble Waffle</p>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          lg={4}
                          xs={6}
                          sm={3}
                          direction="column"
                          justify="space-around"
                          alignItems={'center'}
                          spacing={1}
                        >
                          {' '}
                          
                          <Grid item>
                            <p>Dly Dose Mocha Bubble Waffle</p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/*  
        <div className="shape1">
          <img src={require('../../images/shape1.png')} alt="img" />
        </div>
        <div className="shape2">
          <img src={require('../../images/shape2.png')} alt="img" />
        </div>
        <div className="shape3">
          <img src={require('../../images/shape3.png')} alt="img" />
        </div>
        <div className="shape6">
          <img src={require('../../images/shape6.png')} alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src={require('../../images/shape8.svg')} alt="shape" />
        </div>*/}
      </section>
    )
  }
}
export default Content;
