import { SET_SLIP_DETAIL } from '../actions/action_key';

const initialState = {
  slipAdvice: null,
  slipId: null,
};

const actions = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIP_DETAIL:
      return {
        ...state,
        slipAdvice: action.payload.slipAdvice,
        slipId: action.payload.slipId,
      };
    default:
      return state;
  }
};

export default actions;
