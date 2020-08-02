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
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName('tabs_item')
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }

    tablinks = document.getElementsByTagName('li')
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('current', '')
    }

    document.getElementById(tabNmae).style.display = 'block'
    evt.currentTarget.className += 'current'
  }

  render() {
    return (
      <section className="saas-tools ptb-100 bg-gray">
        
       
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="text-color-2">Menu</span>
            </h2>
            <div className="bar" />
            <p>Change your mood with our menu</p>
          </div>

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
      </section>

    )
  }
}
export default Content;
