import React, { useState } from 'react';

const Input = (props) => {
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      let numVal = Number(e.target.value);

      if (numVal === 0) {
        setError(true);
        setErrMessage('Minimal number input is 1!');
      } else if (numVal > 20 || numVal === 20) {
        setError(true);
        setErrMessage('You input too much number, please input below 20!');
      } else {
        setError(false);
        props.handleChange(e);

        // clean input
        e.target.value = null;
      }
    }
  };

  return (
    <div className="field" style={{ width: '30%', margin: '2% 35%' }}>
      <div className="control">
        <input
          className={error ? 'input is-warning is-rounded' : 'input is-info is-rounded'}
          type="number"
          placeholder="Enter new random slip.."
          onKeyDown={handleEnter}
        />
      </div>
      {error ? <p className="help is-warning">{errMessage}</p> : <div></div>}
    </div>
  );
};

export default Input;
