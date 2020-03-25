/**
 * Redux Store
 *
 * Creates a Redux store for the application and passes the root reducer
 * to the store. Also applies the thunk middleware so that actions can
 * be dispatched asynchronously.
 */

// Dependencies
import { createStore, applyMiddleware, compose  } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//import storage from "redux-persist/lib/storage/session";
// Reducers
import rootReducer from './reducers'

// Compose enhancer including the DevTools extension
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store.

const store =
  process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, applyMiddleware(thunk))
    : createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk, logger)))

// Export the Redux store.
export { store }
