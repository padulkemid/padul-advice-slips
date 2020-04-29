import { createStore } from 'redux';
import favoriteReducer from './reducers/favorite_reducer';

const store = createStore(favoriteReducer);

export default store;
