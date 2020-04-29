import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DisplaySlipsDetail = (props) => {
  const { slipId, slipAdvice } = props;
  const [modal, setModal] = useState(false);

  const handleBack = () => {
    setModal(!modal);
  };

  return (
    <section className="hero is-black is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">You want to learn the truth?</h1>
          <h2 className="subtitle">
            Really? Okay this is your chosen slip, <br />
            Read carefully.
          </h2>

          <article class="message" style={{ margin: '0 15%' }}>
            <div class="message-body">
              <b>This slip's id are : </b>
              <br />
              <i>
                {slipAdvice ? (
                  slipId
                ) : (
                  <button className="button is-inverted is-loading">Loading</button>
                )}
              </i>
              <hr style={{ border: '1px solid black' }} />
              <b>Contains : </b>
              <br />
              <i>
                {slipAdvice ? (
                  slipAdvice
                ) : (
                  <button className="button is-inverted is-loading">Loading</button>
                )}
              </i>
            </div>
          </article>

          <div className="buttons is-centered">
            <button className="button is-info is-inverted is-outlined">
              Star &nbsp;
              <span role="img" aria-label="emoji">
                ⭐️
              </span>
            </button>
            <button onClick={handleBack} className="button is-danger is-inverted is-outlined">
              Back &nbsp;
              <span role="img" aria-label="emoji">
                ⏮
              </span>
            </button>

            <div className={modal ? 'modal is-active' : 'modal'}>
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Are you sure?</p>
                  <button className="delete" onClick={handleBack} aria-label="close"></button>
                </header>
                <section className="modal-card-body has-text-black">
                  When you turn back, slips are gonna be randomized again, <br />
                  To get back, you could use the <i>slip's</i>
                  <b className="is-family-monospace">&nbsp;id&nbsp;</b>and use it on the address
                  bar. <br />
                  For example{' '}
                  <b className="is-family-monospace">
                    &nbsp;https://localhost:3000/slips/
                    <i className="has-text-danger">[YOUR_ID_HERE]</i>
                  </b>
                  <br />
                  Or just press back on the browser. 🤣 <br />
                  To cancel, click the button on top of right corner, or button below.
                </section>
                <footer className="modal-card-foot">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className="button is-info">Yes, I'm sure!</button>
                  </Link>
                  <button className="button is-danger" onClick={handleBack}>
                    Nope, cancel please...
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplaySlipsDetail;
