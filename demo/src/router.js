import React from 'react';
import { Router, Switch } from 'dva/router';
import RouteMiddle from './routeMiddle';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <RouteMiddle/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
