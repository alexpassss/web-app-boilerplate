import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { RootWrapper } from '../components'
import History from '../helpers/History'
import * as ROUTES from './index'

export default function createRoutes(store) {
  return (
    <RootWrapper>
      <History>
        <Switch>
          {/* Service routes */}
          <ROUTES.ProtectedRoute
            exact
            path={ROUTES.PermissionDenied.path}
            component={ROUTES.PermissionDenied.component}
          />
          <Route
            exact
            path={ROUTES.AppNavigator.path}
            component={ROUTES.AppNavigator.component}
          />
          {Object.values(ROUTES).map((route, index) => {
            if (route.path) {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              )
            }
          })}
        </Switch>
      </History>
    </RootWrapper>
  )
}
