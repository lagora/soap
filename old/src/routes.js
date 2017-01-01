import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';

export default (
  <Route path={`${location.pathname}/`} component={App}></Route>
);
