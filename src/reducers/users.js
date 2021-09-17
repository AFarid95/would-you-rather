import { RECEIVE_DATA } from '../actions/shared'
import {
  ADD_QUESTION,
  ANSWER_QUESTION
} from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.users
    case ADD_QUESTION:
      return Object.assign({}, state, {[action.question.author]: Object.assign({}, state[action.question.author], {questions: state[action.question.author].questions.concat(action.question.id)})})
    case ANSWER_QUESTION:
      return Object.assign({}, state, {[action.userId]: Object.assign({}, state[action.userId], {answers: Object.assign({}, state[action.userId].answers, {[action.questionId]: action.answer})})})
    default:
      return state
  }
}