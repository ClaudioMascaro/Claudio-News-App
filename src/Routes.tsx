import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Newsletter from './pages/Newsletter';

const Routes = () => (
  <Switch>
    <Route path="/admin" component={Dashboard} />
    <Route path="/" component={Newsletter} />
  </Switch>
)

export default Routes