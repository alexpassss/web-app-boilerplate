import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { LinearProgress } from '@material-ui/core'

const UnauthenticatedRoute = ({ component: Component, roles, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth)
  const authExists = isLoaded(auth) && !isEmpty(auth)

  return (
    <Route
      {...rest}
      render={props =>
        !isLoaded(auth) ? (
          <LinearProgress />
        ) : authExists ? (
          <Redirect to="/navigator" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default UnauthenticatedRoute
