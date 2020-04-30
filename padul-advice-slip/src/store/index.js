import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import favoriteReducer from './reducers/favorite_reducer';
import adviceReducer from './reducers/advice_reducer';

const reducers = combineReducers({
  favoriteReducer,
  adviceReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
