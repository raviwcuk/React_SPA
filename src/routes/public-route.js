import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { StorageService } from './../services'
import HeaderLogin from './../components/common/Header/HeaderLogin';

export const PublicRoute = ({ component, ...rest }) => {
  if (!component) {
    throw Error('PublicRoute component is undefined')
  }

  const Component = component
  return (
    <Route
      {...rest}
      render={props =>
        StorageService.get('authorization') ? (
          <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        ) : (
          <React.Fragment>
            <HeaderLogin {...props} />
            <Component {...props} />
          </React.Fragment>
          
        )
      }
    />
  )
}
