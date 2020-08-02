import React from 'react';
import { withRouter } from 'next/router';
import Link from '../../utils/ActiveLink';

class Navbar extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;

    let layOutCls = 'marketing-navbar';
    let logo = '/images/logo.jpg';
    if (pathname == '/blue') {
      let layOutCls = '';
      let logo = '/images/logo.jpg';
    }

    const { collapsed } = this.state;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <React.Fragment>
        <header id="header">
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="topbar-left text-left">
                    <ul>
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

                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="topbar-right text-right">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/dlydoseicesandwich/" target="_blank">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/dlyice?lang=en"
                          target="_blank">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/dlydose_icesandwich/?hl=en"
                          target="_blank">
                          <i className="icofont-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div id="navbar" className={`crake-nav ${layOutCls}`}>
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link href="/">
                    <a className="navbar-brand">
                      {/*<h2>Logo</h2>*/}
                      <img src={logo} alt="logo" />
                    </a>
                  </Link>

                  <button
                    onClick={this.toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="col-lg-12 col-md-12">

                    <div className={classOne} id="navbarSupportedContent">
                      <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item">
                          <Link activeClassName="active" href="/">
                            <a className="nav-link">Home</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link activeClassName="active" href="/gallery">
                            <a className="nav-link">Gallery</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link activeClassName="active" href="/products">
                            <a className="nav-link">Products</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link activeClassName="active" href="/about">
                            <a className="nav-link">About Us</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link activeClassName="active" href="/contact">
                            <a className="nav-link">Contact Us</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);
