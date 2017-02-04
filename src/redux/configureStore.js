import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootRuducer from './reducers'

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)

export default function(state) {
  return finalCreateStore(rootRuducer, state)
}
