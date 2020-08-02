import React, { Component } from 'react';
import Link from 'next/link';

class Platform extends Component {
    render() {
        return (
            <section className="platform-connect ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Online Partners</h2>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <a href="https://www.zomato.com/hyderabad/dly-dose-ice-sandwich-kukatpally" target="_blank">
                                <img src='/images/zomato.png'/>                                   
                            </a>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <a href="https://www.dunzo.com/hyderabad/dly-dose-ice-sandwich-kphb-phase-1-kukatpally" target="_blank">
                                <img src='/images/Dunzo.png'  />                               
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Platform;
