import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Redirect replace exact from="/" to="/home" />
      <Route path="/home" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
