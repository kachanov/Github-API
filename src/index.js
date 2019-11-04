import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import createHashHistory from 'history/createHashHistory';
import { App } from './components/App';
import { ROUTES } from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #C0E870;
  }
`;

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter history={hashHistory}>
      <Switch>
        <Redirect exact from="/" to={ROUTES.HOME} />
        <Route path={ROUTES.HOME} component={App} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
