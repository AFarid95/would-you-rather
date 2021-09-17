import {
  ADD_QUESTION,
  ANSWER_QUESTION
} from '../actions/questions'

import { RECEIVE_DATA } from '../actions/shared'

const optionOne = 'optionOne'

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return Object.values(state).concat([action.question]).reduce((accummulatedObject, question) => Object.assign({}, accummulatedObject, {[question.id]: question}),{})
    case ANSWER_QUESTION:
      return Object.values(state).map((question) => question.id !== action.questionId ? question : Object.assign({}, question, action.answer === optionOne ? {optionOne: Object.assign({}, question.optionOne, {votes: question.optionOne.votes.concat([action.userId])} )} : {optionTwo: Object.assign({}, question.optionTwo, {votes: question.optionTwo.votes.concat([action.userId])} )})).reduce((accummulatedObject, question) => Object.assign({}, accummulatedObject, {[question.id]: question}),{})
    case RECEIVE_DATA:
      return action.questions
    default:
      return state
  }
}