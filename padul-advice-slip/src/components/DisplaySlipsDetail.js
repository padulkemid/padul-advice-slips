import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addFavorites } from '../store/actions/favorite_actions';
import { Notification } from './';
import '../css/Modal.css';

const DisplaySlipsDetail = () => {
  const { slipId, slipAdvice } = useSelector((state) => state.adviceReducer);
  const { favorites } = useSelector((state) => state.favoriteReducer);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleBack = () => {
    setModal(!modal);
  };

  const addToFav = () => {
    let isAlreadyAdded = false;
    const struct = {
      slipId,
      slipAdvice,
    };

    for (let i = 0; i < favorites.length; i++) {
      const favId = favorites[i].slipId;
      if (favId === slipId) {
        Notification(`You're already added this as favorite slip!`, 'error');
        isAlreadyAdded = true;
        break;
      }
    }

    if (!isAlreadyAdded) {
      Notification('Success adding new favorites!', 'success');
      dispatch(addFavorites(struct));
    }
  };

  return (
    <section data-testid="slip-detail" className="hero is-black is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">You want to learn the truth?</h1>
          <h2 className="subtitle">
            Really? Okay this is your chosen slip, <br />
            Read carefully.
          </h2>

          <article className="message" style={{ margin: '0 15%' }}>
            <div className="message-body">
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
            <button
              data-testid="add-to-fav"
              onClick={addToFav}
              className="button is-info is-inverted is-outlined">
              Star &nbsp;
              <span role="img" aria-label="emoji">
                ⭐️
              </span>
            </button>
            <button
              data-testid="slip-back-button"
              onClick={handleBack}
              className="button is-danger is-inverted is-outlined">
              Back &nbsp;
              <span role="img" aria-label="emoji">
                ⏮
              </span>
            </button>

            <div className={modal ? 'modal is-active padul-opacity' : 'modal'}>
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Are you sure?</p>
                  <button className="delete" onClick={handleBack} aria-label="close"></button>
                </header>
                <section className="modal-card-body has-text-black">
                  When you turn back, slips are gonna be randomized again, <br />
                  To cancel, click the button on top of right corner, or button below.
                </section>
                <footer className="modal-card-foot">
                  <Link data-testid="slip-redirect-home" to="/" style={{ textDecoration: 'none' }}>
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
