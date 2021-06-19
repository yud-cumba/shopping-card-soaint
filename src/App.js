import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Home } from './views/Home';
import { Detail } from './views/Detail';
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/Header'

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path="/" />
        <Detail path="/detail/:detailId" />
      </Router>
    </Fragment>
  );
};

export default App;
