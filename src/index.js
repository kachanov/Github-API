import React from 'react';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/createHashHistory';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import MainComponent from './components/MainComponent/MainComponent';


const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const Root = document.getElementById('root');

if (Root === null) {
  throw new Error('Error');
}

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} history={hashHistory}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={MainComponent} />
    </Switch>
  </BrowserRouter>,
  Root
);
