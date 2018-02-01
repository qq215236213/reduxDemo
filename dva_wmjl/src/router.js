import React from 'react';
import { Router, Switch } from 'dva/router';
import AppRouter from './approuter';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <AppRouter />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
