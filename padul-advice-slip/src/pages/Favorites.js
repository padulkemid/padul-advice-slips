import React from 'react';
import { useSelector } from 'react-redux';

import { Navbar, Footer, Slips } from '../components';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favoriteReducer);
  return (
    <>
      <Navbar />
      <section className="hero is-warning is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">- your favorite slips -</h1>
            <h2 className="subtitle">
              Here lies your favorite words, keep it and read it. <br />
              You can press <b className="is-family-monospace">&nbsp;back&nbsp;</b> on browser to go
              back.
            </h2>
            {favorites.length ? (
              favorites.map((data) => (
                <Slips key={data.slipId} slipId={data.slipId} advice={data.slipAdvice} />
              ))
            ) : (
              <h1 className="subtitle">
                <i>There's no favorites yet, consider adding it on slip's detail.</i>
              </h1>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favorites;
