import React from 'react'
import ReactDOM from 'react-dom'

// Service workers
import * as serviceWorker from './serviceWorker'

// Environment
import { version } from '../package.json'
import { env } from './app/environment'

// Initializing custom scripts
import { initScripts } from './app/utils'

// Injecting stylesheets
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './app/styles/bootstrap-grid-override.css'
import './app/styles/index.css'

// Application imports
import App from './app'
import history from './app/utils/history'
import createStore from './app/store'

// Base initialization
window.version = version
window.env = env
initScripts()

// Store initialization
const initialState = window.___INITIAL_STATE__ || {
  firebase: { authError: null }
}
const store = createStore(
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// Routes initialization
const routes = require('./app/routes/createRoutes').default(store)

ReactDOM.render(
  <App store={store} routes={routes} histoty={history} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
