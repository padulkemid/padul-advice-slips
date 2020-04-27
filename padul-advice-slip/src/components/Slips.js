import React, { Component } from 'react';
import '../css/Slips.css';

export default class Slips extends Component {
  render() {
    return (
      <article className="message is-black padul-message">
        <div className="message-header">
          <p>Slip</p>
          <p>Id : {this.props.slipId}</p>
        </div>
        <div className="message-body">{this.props.advice}</div>
      </article>
    );
  }
}
