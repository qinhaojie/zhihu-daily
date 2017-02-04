import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootRuducer from './reducers'
import filterLinkMiddleware from './filterLinkMiddleware'
const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, filterLinkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)

export default function(state) {
  return finalCreateStore(rootRuducer, state)
}
