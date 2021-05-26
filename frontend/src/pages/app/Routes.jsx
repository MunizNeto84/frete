import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home/Home'
import Employees from '../components/Employees/Employees'
import Customers from '../components/Customers/Customers'

// eslint-disable-next-line
export default props => 
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/funcionarios' component={Employees} />
    <Route exact path='/clientes' component={Customers} />
    <Redirect from='*' to='/'/>
  </Switch>