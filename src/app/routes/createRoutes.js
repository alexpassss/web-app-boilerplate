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
  UserEditRoute,
  UserListRoute,
  UserViewRoute
} from './index'

export default function createRoutes(store) {
  return (
    <RootWrapper>
      <History>
        <Switch>
          {/* Service routes */}
          <Route
            exact
            path={PermissionDenied.path}
            component={PermissionDenied.component}
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
          {/* Auth routes */}
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
          {/* Admin panel */}
          <Route
            exact
            path={AdminPanelRoute.path}
            component={AdminPanelRoute.component}
          />
          {/* Dashboard */}
          <Route
            exact
            path={DashboardRoute.path}
            component={DashboardRoute.component}
          />
          {/* User */}
          <Route
            exact
            path={UserEditRoute.path}
            component={UserEditRoute.component}
          />
          <Route
            exact
            path={UserListRoute.path}
            component={UserListRoute.component}
          />
          <Route
            exact
            path={UserViewRoute.path}
            component={UserViewRoute.component}
          />
          {/* Styleguide */}
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
