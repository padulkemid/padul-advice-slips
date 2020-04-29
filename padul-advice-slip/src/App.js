import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, SlipsDetail } from './pages';

import 'bulma/css/bulma.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/slip/:slipId">
          <SlipsDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
