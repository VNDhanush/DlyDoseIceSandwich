import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section className="contact-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Find Us Here</h2>
            <div className="bar"></div>
          </div>

          <div className="col-lg-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3472703658326!2d78.3991767148778!3d17.490928488016635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9112636e83e5%3A0xbe4c6bcdc52adf1a!2sDly%20Dose%20Ice%20Sandwich!5e0!3m2!1sen!2sin!4v1595177861851!5m2!1sen!2sin "
              frameBorder="0"
              allowfullscreen=""
              style={{ border:"0", width: '100%',
                        height:"450"  }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
