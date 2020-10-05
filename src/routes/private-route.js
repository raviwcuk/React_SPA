import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { StorageService } from './../services'
import Header from './../components/common/Header'

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
          <React.Fragment>
            <Header {...props} />
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    ></Route>
  )
}
