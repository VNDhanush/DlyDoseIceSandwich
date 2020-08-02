import React, { Component } from 'react';
import Link from 'next/link';

class Content extends Component {
  render() {
    return (
      <section className="contact-info-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-email"></i>
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@dlydis.com" target="_blank">
                    <a>info@dlydis.com</a>
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <a
                    href="https://goo.gl/maps/XEJwSh1GJBgW2XUQA"
                    target="_blank"
                  >
                    <i className="icofont-google-map"></i>
                  </a>
                </div>
                <h3>Visit Here</h3>
                <p>
                  Shop No.1 H.No.15-24-47/1 MIG Road No.1 KPHB, Kukatpally,
                  Hyderabad-500085{' '}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-phone"></i>
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+919618002609">
                    <a>096180 02609</a>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
