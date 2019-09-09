import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/App/App';
import { ROUTES } from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #C0E870;
  }
`;

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
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
