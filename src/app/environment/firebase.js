// Config for firebase
export const firebase = {
  apiKey: 'AIzaSyAzV6fj4eyhM4Io7pVFI4Z3MnePUFYd3Ro',
  authDomain: 'web-app-boilerplate-67050.firebaseapp.com',
  databaseURL: 'https://web-app-boilerplate-67050.firebaseio.com',
  projectId: 'web-app-boilerplate-67050',
  storageBucket: 'web-app-boilerplate-67050.appspot.com',
  messagingSenderId: '467958734017',
  appId: '1:467958734017:web:89b51054557255c8a2c840'
}

// Config to override default reduxFirebase config in store/createStore
// which is not environment specific.
// For more details, visit http://react-redux-firebase.com/docs/api/enhancer.html
export const reduxFirebase = {
  enableLogging: false // enable/disable Firebase Database Logging
}

export default {
  firebase,
  reduxFirebase
}
