import { SET_FAV, DEL_FAV } from '../actions/action_key';

const initialState = {
  favorites: [],
};

const actions = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case DEL_FAV:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export default actions;
