import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Loading from '../pages/Loading';
import Confirm from '../pages/Confirm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details" component={Details} />
    <Route path="/about" component={About} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/loading" component={Loading} />
    <Route path="/confirm" component={Confirm} />
  </Switch>
);

export default Routes;
