import React from 'react';
import '../css/Slips.css';

const Slips = (props) => {
  return (
    <article className="message is-black padul-message">
      <div className="message-header">
        <p>Slip</p>

        {/* right side */}
        <p>Id : {props.slipId}</p>
      </div>
      <div className="message-body">{props.advice}</div>
    </article>
  );
};

export default Slips;
