import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import App from './components/App/App';
import { ROUTES } from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Redirect replace exact from="/" to={ROUTES.HOME} />
      <Route path={ROUTES.HOME} component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
