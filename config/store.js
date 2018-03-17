import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import { rootReducer } from 'fast-redux'
import thunkMiddleware from 'redux-thunk'

export const initStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )

// H.O.C for pages
export const reduxPage = withRedux(initStore)
