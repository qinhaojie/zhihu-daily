import home from '../views/homeRedux'
import detail from '../views/detailRedux'
import { combineReducers } from 'redux'

export default combineReducers({
  home,
  detail
})
