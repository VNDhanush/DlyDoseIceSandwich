import React from 'react';
import Link from 'next/link';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

class Banner extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true
    }).init();
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-banner marketing-home">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="hero-content">
                      <h1>Dly Dose Ice Sandwich</h1>
                      <p>Website for the DlyDoseIceCreamSandwich</p>

                      <Link href="#">
                        <a className="btn btn-primary">Button</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray shape-1"></div> 
          <div className="shape1">
            <img src="/images/shape1.png" alt="img" />
          </div>
          <div className="shape2">
            <img src="/images/shape2.png" alt="img" />
          </div>
          <div className="shape3">
            <img src="/images/shape3.png" alt="img" />
          </div>
          <div className="shape6">
            <img src="/images/shape6.png" alt="img" />
          </div>
          <div className="shape8 rotateme">
            <img src="/images/shape8.svg" alt="shape" />
          </div>
          <div className="shape9">
            <img src="/images/shape9.svg" alt="shape" />
          </div>

          <div className="bubble-animate">
            <div className="circle small square1"></div>
            <div className="circle small square2"></div>
            <div className="circle small square3"></div>
            <div className="circle small square4"></div>
            <div className="circle small square5"></div>
            <div className="circle medium square1"></div>
            <div className="circle medium square2"></div>
            <div className="circle medium square3"></div>
            <div className="circle medium square4"></div>
            <div className="circle medium square5"></div>
            <div className="circle large square1"></div>
            <div className="circle large square2"></div>
            <div className="circle large square3"></div>
            <div className="circle large square4"></div>
          </div>*/}
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
