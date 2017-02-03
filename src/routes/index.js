import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from '../views/home'
import Detail from '../views/detail'
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}></Route>
    <Route path='/detail/:id' component={Detail}></Route>
  </Router>
)

export default routes
