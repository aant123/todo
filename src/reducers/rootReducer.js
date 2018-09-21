import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

export default combineReducers({
  counter: counterReducer,
  users: userReducer,
  todoReducer
})