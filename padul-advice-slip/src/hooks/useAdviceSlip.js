import { useState, useEffect } from 'react';

export default () => {
  const url = 'https://api.adviceslip.com/advice';
  const [slips, setSlips] = useState([]);
  const [slipCount, setSlipCount] = useState(4);

  useEffect(() => {
    let promiseArray = [];
    let tempSlips = [];

    // requests based on slipCount
    for (let i = 0; i < slipCount; i++) {
      promiseArray.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promiseArray).then((data) => {
      data.forEach((el) => {
        tempSlips.push(el.slip);
      });

      // set to state
      setSlips(tempSlips);
    });
  }, [slipCount]);

  return [
    slips,
    (e) => {
      let newCount = Number(e.target.value);
      setSlips([]);
      setSlipCount(newCount);
    },
  ];
};
