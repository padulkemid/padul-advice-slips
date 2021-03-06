import React from 'react';
import { Link } from 'react-router-dom';

import { Input, Slips } from './';
import useAdviceSlip from '../hooks/useAdviceSlip';

const Home = () => {
  const [slips, handleChange] = useAdviceSlip();

  return (
    <section data-testid="render-home" className="hero is-info is-bold is-fullheight">
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
              Read these, I know you need it. <br />
              To see your favorite slip, click below. <br />
              &darr; <br />
              <Link data-testid="redirect-fav-button" to="/favorites">
                <button className="button is-outlined is-warning">
                  Favorites&nbsp;
                  <span role="img" aria-label="emoji">
                    🤩
                  </span>
                </button>
              </Link>
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
              className="progress is-large is-warning"
              max="100"
              style={{ width: '50%', margin: '0 25%' }}>
              50%
            </progress>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
