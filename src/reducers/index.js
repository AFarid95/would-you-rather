import { combineReducers } from 'redux'

import currentUser from './currentUser'
import loading from './loading'
import questions from './questions'
import shownQuestions from './shownQuestions'
import users from './users'

export default combineReducers({
  currentUser,
  loading,
  questions,
  shownQuestions,
  users
})