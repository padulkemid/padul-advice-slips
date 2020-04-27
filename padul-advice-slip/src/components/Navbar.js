import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const style = {
      spacing: {
        padding: '2%',
        margin: '1%',
      },
    };

    return (
      <nav className="level is-mobile" style={style.spacing}>
        <div className="level-item has-text-centered">
          <span className="title" role="img" aria-label="emoji">
            💎
          </span>
        </div>
        <div className="level-item">
          <h1 className="title has-text-info">Padul Advice Slip</h1>
        </div>
        <div className="level-item has-text-centered">
          <span className="title" role="img" aria-label="emoji">
            💎
          </span>
        </div>
      </nav>
    );
  }
}
