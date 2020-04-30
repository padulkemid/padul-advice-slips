import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import favoriteReducer from './reducers/favorite_reducer';

const store = createStore(favoriteReducer, applyMiddleware(thunk));

export default store;
