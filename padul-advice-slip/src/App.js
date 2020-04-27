import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Slips from './components/Slips';
import Footer from './components/Footer';

import 'bulma/css/bulma.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'padul',
      slips: [],
    };
  }

  componentDidMount() {
    this.getSlip().then((data) => {
      let tempSlips = [];
      data.forEach((el) => {
        const slip = el.slip;
        tempSlips.push(slip);
      });

      this.setState({
        slips: tempSlips,
      });
    });
  }

  getSlip() {
    const slipUrl = 'https://api.adviceslip.com/advice';
    let promiseArray = [];

    for (let i = 0; i < 5; i++) {
      promiseArray.push(fetch(slipUrl).then((res) => res.json()));
    }

    return Promise.all(promiseArray);
  }

  render() {
    return (
      <>
        <Navbar />
        <section className="hero is-info is-bold is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="has-text-centered" style={{ marginBottom: '5%' }}>
                <h1 className="title">
                  ~
                  <span role="img" aria-label="emoji">
                    ✨
                  </span>
                  collections of slips
                  <span role="img" aria-label="emoji">
                    ✨
                  </span>
                  ~
                </h1>
                <h1 className="subtitle">Read these, I know you need it.</h1>
              </div>
              {this.state.slips.length ? (
                this.state.slips.map((data, index) => (
                  <Slips key={index} advice={data.advice} slipId={data.slip_id} />
                ))
              ) : (
                <progress
                  className="progress is-large is-black"
                  max="100"
                  style={{ width: '50%', margin: '0 25%' }}>
                  50%
                </progress>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
