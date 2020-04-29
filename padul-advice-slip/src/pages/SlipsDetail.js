import React from 'react';
import { useParams } from 'react-router-dom';

import { Navbar, Footer, DisplaySlipsDetail } from '../components';

import useSingleSlip from '../hooks/useSingleSlip';

const SlipsDetail = () => {
  const { slipId } = useParams();
  const [slip] = useSingleSlip(slipId);

  return (
    <>
      <Navbar />
      <DisplaySlipsDetail slipId={slipId} slipAdvice={slip.advice} />
      <Footer />
    </>
  );
};

export default SlipsDetail;
