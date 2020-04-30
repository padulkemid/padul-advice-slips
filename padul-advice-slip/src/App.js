import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { HomePage, SlipsDetail, Favorites } from './pages';
import store from './store';

import 'bulma/css/bulma.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/slip/:slipId">
            <SlipsDetail />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
