import { useState, useEffect } from 'react';

export default (slipId) => {
  const url = 'https://api.adviceslip.com/advice';
  const [slip, setSlip] = useState({});

  useEffect(() => {
    fetch(`${url}/${slipId}`)
      .then((res) => res.json())
      .then((newSlip) => setSlip(newSlip.slip));
  }, [slipId]);

  return [slip];
};
