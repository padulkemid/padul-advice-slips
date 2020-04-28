import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import 'bulma/css/bulma.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
