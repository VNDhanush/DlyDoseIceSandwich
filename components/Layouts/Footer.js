import Link from 'next/link';
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area ptb-100 pb-0 bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <Link href="#">
                  <a className="logo">
                    {/*<h2>Logo</h2>*/}
                    <img src="/images/logo.jpg" alt="logo" />
                  </a>
                </Link>
                <p>
                  Plan ahead by day, week, or month, and see project status at a
                  glance. Search and filter to focus in on anything form a
                  single project individual.
                </p>
              </div>
            </div>
            {/*  
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Products</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>*/}

            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <h3>CONTACT US</h3>

                <ul className="list">
                  <li>
                    <a href="tel:+919618002609">
                      <i class="icofont-phone"> +91 9618002609</i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@dlydis.com">
                      <i class="icofont-email"> info@dlydis.com</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>OPEN TIME</h3>

                <ul className="list">
                  <li>
                    Monday-Saturday<span class="text-right">10:30am-10:30pm</span>
                  </li>
                  <li>
                    Sunday<span class="text-right">10am-10:30pm</span>
                  </li>
                  <li>Closed On public holidays</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <ul className="social-list">
            <li className="social-list-item">
              <a
                href="https://www.facebook.com/dlydoseicesandwich/" target="_blank">
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li className="social-list-item">
              <a
                href="https://twitter.com/dlyice?lang=en" target="_blank">
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li className="social-list-item">
              <a
                href="https://www.instagram.com/dlydose_icesandwich/?hl=en" target="_blank">
                <i className="icofont-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <ul>Made with love by Ezerka</ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
