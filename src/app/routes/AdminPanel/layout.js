import React from 'react'
import {
  SidebarWrapperPrimary,
  SidebarPrimary,
  ScrollableWrapper,
  ContentWrapper
} from '../../components'
import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { People, Palette, Book } from '@material-ui/icons'
import { Switch, Route } from 'react-router-dom'
import { UserListRoute, StyleguideRoute } from '../index'
import { ADMIN_USERS_PATH, ADMIN_STYLEGUIDE_PATH } from '../paths'
import * as MENU from './menu'

const Layout = () => {
  return (
    <React.Fragment>
      <SidebarWrapperPrimary>
        <SidebarPrimary captionText="Menu" isSidebarOpened={true}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Main
              </ListSubheader>
            }>
            <ListItem button component={RouterLink} to={ADMIN_USERS_PATH}>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={RouterLink} to={ADMIN_STYLEGUIDE_PATH}>
              <ListItemIcon>
                <Palette />
              </ListItemIcon>
              <ListItemText primary="Styleguide" />
            </ListItem>
          </List>
          {!!Object.values(MENU).length && (
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Entities
                </ListSubheader>
              }>
              {Object.values(MENU).map((menuItem, index) => (
                <ListItem
                  key={'entity-' + index}
                  button
                  component={RouterLink}
                  to={menuItem.path}>
                  <ListItemIcon>
                    <Book />
                  </ListItemIcon>
                  <ListItemText primary={menuItem.name} />
                </ListItem>
              ))}
            </List>
          )}
        </SidebarPrimary>
        <ContentWrapper>
          <ScrollableWrapper>
            <Switch>
              <Route
                exact
                path={ADMIN_USERS_PATH}
                component={UserListRoute.component}
              />
              {/* Styleguide */}
              <Route
                exact
                path={ADMIN_STYLEGUIDE_PATH}
                component={StyleguideRoute.component}
              />
            </Switch>
          </ScrollableWrapper>
        </ContentWrapper>
      </SidebarWrapperPrimary>
    </React.Fragment>
  )
}

export default Layout
