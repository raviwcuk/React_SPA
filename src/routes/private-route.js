import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { StorageService } from './../services'

export const PrivateRoute = ({ component, ...rest }) => {
  if (!component) {
    throw Error('PrivateRoute component is undefined')
  }

  const Component = component
  return (
    <Route
      {...rest}
      render={props =>
        StorageService.get('authorization') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    ></Route>
  )
}
