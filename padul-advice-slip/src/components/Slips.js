import React from 'react';

import { Link } from 'react-router-dom';

import '../css/Slips.css';

const Slips = (props) => {
  const { advice, slipId } = props;

  return (
    <article className="message is-info padul-message">
      <div className="message-header">
        <p>Slip</p>

        {/* right side */}
        <p>Id : {slipId}</p>
      </div>
      <div className="message-body">
        {advice}
        <div className="buttons is-right">
          <Link
            data-testid="slip-detail-button"
            to={`/slip/${slipId}`}
            style={{ textDecoration: 'none' }}>
            <button type="button" className="button is-outlined is-info">
              Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Slips;
