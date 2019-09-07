import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { UserInfo } from '../UserInfo/UserInfo';
import { Input } from './Input';
import { ROUTES } from '../../routes';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route path={ROUTES.HOME} component={Input} />
        <Route path={ROUTES.USERNAME} component={UserInfo} />
      </React.Fragment>
    </Router>
  );
}

export default App;
