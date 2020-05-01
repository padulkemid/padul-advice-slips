import { SET_SLIP_DETAIL } from './action_key';

const setAdvices = (slipId) => {
  return (dispatch, _) => {
    fetchAdvices(slipId).then((detail) => {
      dispatch(addSlipDetail(detail));
    });
  };
};

const fetchAdvices = (id) => {
  const url = 'https://api.adviceslip.com/advice';
  return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((slipDetail) => ({
      slipAdvice: slipDetail.slip.advice,
      slipId: Number(id),
    }));
};

const addSlipDetail = (slip) => {
  return {
    type: SET_SLIP_DETAIL,
    payload: slip,
  };
};

export { setAdvices };
