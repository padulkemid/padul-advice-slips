import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div className="field" style={{ width: '30%', margin: '2% 35%' }}>
        <div className="control">
          <input
            className="input is-info is-rounded"
            type="number"
            placeholder="Enter new random slip.."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                this.props.handleChange(e);
                e.target.value = null;
              }
            }}
          />
        </div>
      </div>
    );
  }
}
