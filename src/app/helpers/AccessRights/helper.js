import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

const AccessRights = props => {
  const auth = props.auth
  const allowedRoles = props.allowedRoles
  const userId = auth.uid

  // Receiving user info with role from auth state
  const user = useSelector(
    ({
      firestore: {
        data: { users }
      }
    }) => {
      return users && users[userId]
    }
  )

  // Receiving role info from the live app state
  const stateRole = useSelector(state => state.user && state.user.role)

  const isUserLoaded = isLoaded(user)

  if (isUserLoaded) {
    // stateRole has priority. Use user.role if no stateRole
    const role = stateRole || user.role
    // Render route if current role allowed
    if (allowedRoles.includes(role)) {
      return <React.Fragment>{props.children}</React.Fragment>
    } else {
      return <Redirect to="/denied" />
    }
  } else {
    return <React.Fragment>{props.children}</React.Fragment>
  }
}

export default AccessRights
