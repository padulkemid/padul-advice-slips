import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Navbar, Footer, DisplaySlipsDetail } from '../components';
import { setAdvices } from '../store/actions/advice_actions';

const SlipsDetail = () => {
  const { slipId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAdvices(slipId));
  }, [slipId, dispatch]);

  return (
    <>
      <Navbar />
      <DisplaySlipsDetail />
      <Footer />
    </>
  );
};

export default SlipsDetail;
