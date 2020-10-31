import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from '../pages/Details';
import Home from '../pages/Home';
import OrderCart from '../pages/OrderCart';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details" component={Details} />
    <Route path="/cart" component={OrderCart} />
    <Route path="/login" component={SignIn} />
    <Route path="/newacc" component={SignUp} />
  </Switch>
);

export default Routes;
