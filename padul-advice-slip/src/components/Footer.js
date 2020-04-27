import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>
              <u>Padul Advice Slips</u>
            </strong>{' '}
            by <a href="https://github.com/padulkemid">Fadhil Muhammad</a>. <br />
            You could use this free <strong>API</strong> by visiting{' '}
            <a href="https://api.adviceslip.com/">Advice Slip API</a>. <br />
            &copy; 2020
          </p>
        </div>
      </footer>
    );
  }
}
