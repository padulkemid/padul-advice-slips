import React from 'react';

const Input = (props) => {
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      props.handleChange(e);

      // clean input
      e.target.value = null;
    }
  };
  return (
    <div className="field" style={{ width: '30%', margin: '2% 35%' }}>
      <div className="control">
        <input
          className="input is-info is-rounded"
          type="number"
          placeholder="Enter new random slip.."
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
};

export default Input;
