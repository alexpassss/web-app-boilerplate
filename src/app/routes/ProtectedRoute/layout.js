import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { LinearProgress } from '@material-ui/core'
// import AccessRights from 'app/helpers/AccessRights'

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth)
  const authExists = isLoaded(auth) && !isEmpty(auth)

  return (
    // <AccessRights auth={auth} allowedRoles={roles}>
    <Route
      {...rest}
      render={props =>
        !isLoaded(auth) ? (
          <LinearProgress />
        ) : authExists ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    // </AccessRights>
  )
}

export default ProtectedRoute
