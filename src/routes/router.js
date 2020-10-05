import React from 'react'
import { Redirect, Switch, Router } from 'react-router-dom'
import { PrivateRoute } from './private-route'
import { PublicRoute } from './public-route'
import Home from './../components/Home'
import About from './../components/About'
import Login from './../components/Login'
import history from './history'

export default function() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" exact component={Login} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/about" exact component={About} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
