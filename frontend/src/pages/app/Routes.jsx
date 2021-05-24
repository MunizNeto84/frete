import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Order from '../components/order/Order'

// eslint-disable-next-line
export default props => 
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/pedidos' component={Order} />
    <Redirect from='*' to='/'/>
  </Switch>