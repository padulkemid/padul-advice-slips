import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Slips from './components/Slips';
import Footer from './components/Footer';
import Input from './components/Input';

import 'bulma/css/bulma.css';

const App = () => {
  // states
  const [slips, setSlips] = useState([]);
  const [slipCount, setSlipCount] = useState(4);

  useEffect(() => {
    // exhaustive-deps, functions will not go into depedency list
    const getSlip = () => {
      const slipUrl = 'https://api.adviceslip.com/advice';
      let promiseArray = [];

      for (let i = 0; i < slipCount; i++) {
        promiseArray.push(fetch(slipUrl).then((res) => res.json()));
      }

      return Promise.all(promiseArray).then((data) => {
        let tempSlips = [];
        data.forEach((el) => {
          const slip = el.slip;
          tempSlips.push(slip);
        });
        setSlips(tempSlips);
      });
    };

    // invoked
    getSlip();
  }, [slipCount]);

  const handleChange = (e) => {
    let newCount = Number(e.target.value);
    setSlips([]);
    setSlipCount(newCount);
  };

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
                Random collections of slips
                <span role="img" aria-label="emoji">
                  ✨
                </span>
                ~
              </h1>
              <h1 className="subtitle">
                Read these, I know you need it. <br />( try to input new values below )
              </h1>
              <Input handleChange={handleChange} />
              <h1 className="subtitle">
                Press
                <b className="is-family-monospace"> &nbsp;enter&nbsp; </b>
                to get new slips!
              </h1>
            </div>
            {slips.length ? (
              slips.map((data, index) => (
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
};

export default App;
