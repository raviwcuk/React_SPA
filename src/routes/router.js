import React from 'react'
import { Redirect, Switch, BrowserRouter } from 'react-router-dom'
import { PrivateRoute } from './private-route'
import { PublicRoute } from './public-route'
import Home from './../components/Home'
import About from './../components/About'
import Login from './../components/Login'
import Header from './../components/common/Header'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PublicRoute path="/" exact component={Login} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/about" exact component={About} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
