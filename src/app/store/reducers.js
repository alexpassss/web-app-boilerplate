import { combineReducers } from 'redux'
import { reducer as firebase } from 'react-redux-firebase'
import firestore from 'redux-firestore/lib/reducer'
import { reducer as form } from 'redux-form'
// Custom reducers
import location from './location'

export function makeRootReducer(asyncReducers) {
  return combineReducers({
    // Add sync reducers here
    firebase,
    firestore,
    form,
    location,
    ...asyncReducers
  })
}

export function injectReducer(store, { key, reducer }) {
  store.asyncReducers[key] = reducer // eslint-disable-line no-param-reassign
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
