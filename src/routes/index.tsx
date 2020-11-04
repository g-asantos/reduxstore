import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Details from '../pages/Details';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details" component={Details} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
