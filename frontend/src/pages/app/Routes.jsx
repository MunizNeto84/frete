import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Employees from '../components/Employees/Employees'

// eslint-disable-next-line
export default props => 
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/funcionarios' component={Employees} />
    <Redirect from='*' to='/'/>
  </Switch>