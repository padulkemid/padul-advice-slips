import { SET_FAV, DEL_FAV } from './action_key';

const addFavorites = (newFav) => {
  return {
    type: SET_FAV,
    payload: newFav,
  };
};

const deleteFavorites = (idx) => {
  return {
    type: DEL_FAV,
    payload: idx,
  };
};

export { addFavorites, deleteFavorites };
