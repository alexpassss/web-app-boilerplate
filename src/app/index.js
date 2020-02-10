import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

// Redux firebase
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

// Redux
import { Provider } from 'react-redux'
import {
  firebase as fbConfig,
  reduxFirebase as rfConfig
} from './environment/firebase'

// App theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// Custom theme
// import AppTheme from './styles/mui-override'
// const theme = createMuiTheme(AppTheme)

const theme = createMuiTheme()

// Initialize Firebase instance
firebase.initializeApp(fbConfig)

function App({ routes, store }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={rfConfig}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}>
          <Router>{routes}</Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App
