import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import createHashHistory from 'history/createHashHistory';
import App from './components/App/App';
import { ROUTES } from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #C0E870;
  }
`;

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} history={hashHistory}>
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Redirect replace exact from="/" to={ROUTES.HOME} />
        <Route path={ROUTES.HOME} component={App} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
