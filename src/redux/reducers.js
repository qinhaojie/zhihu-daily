import home from '../views/homeRedux'
import detail from '../views/detailRedux'
import comments from '../views/commentRedux'
import { combineReducers } from 'redux'

export default combineReducers({
  home,
  detail,
  comments
})
