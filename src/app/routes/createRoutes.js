import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { RootWrapper } from '../components'
import History from '../helpers/History'
import {
  ProtectedRoute,
  AppNavigator,
  PermissionDenied,
  UnauthenticatedRoute,
  LoginRoute,
  SignupRoute,
  ForgotPasswordRoute,
  NotFoundRoute,
  AdminPanelRoute,
  DashboardRoute,
  StyleguideRoute,
  UserProfileRoute
} from './index'

export default function createRoutes(store) {
  return (
    <RootWrapper>
      <History>
        <Switch>
          <Route
            exact
            path={PermissionDenied.path}
            component={PermissionDenied.component}
          />
          <UnauthenticatedRoute
            exact
            path={SignupRoute.path}
            component={SignupRoute.component}
          />
          <UnauthenticatedRoute
            exact
            path={LoginRoute.path}
            component={LoginRoute.component}
          />
          <UnauthenticatedRoute
            exact
            path={ForgotPasswordRoute.path}
            component={ForgotPasswordRoute.component}
          />
          <ProtectedRoute
            exact
            path={PermissionDenied.path}
            component={PermissionDenied.component}
          />
          <Route
            exact
            path={AppNavigator.path}
            component={AppNavigator.component}
          />
          <Route
            exact
            path={AdminPanelRoute.path}
            component={AdminPanelRoute.component}
          />
          <Route
            exact
            path={DashboardRoute.path}
            component={DashboardRoute.component}
          />
          <Route
            exact
            path={UserProfileRoute.path}
            component={UserProfileRoute.component}
          />
          <Route
            exact
            path={StyleguideRoute.path}
            component={StyleguideRoute.component}
          />
          <Route component={NotFoundRoute.component} />
        </Switch>
      </History>
    </RootWrapper>
  )
}
