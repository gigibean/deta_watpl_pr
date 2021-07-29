import React from 'react';
import MainPage from 'pages/MainPage';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
      <GlobalStyle />
    </>
  );
};

export default App;
