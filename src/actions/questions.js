import {
  _saveQuestion,
  _saveQuestionAnswer
} from '../_DATA'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

function answerQuestion(userId, questionId, answer) {
  return {
    type: ANSWER_QUESTION,
    userId,
    questionId,
    answer
  }
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  const question = { optionOneText, optionTwoText, author }
  return (dispatch) => {
    return _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question))
      })
      .catch((e) => {
        alert('An error occurred while adding the question')
        console.error(e)
      })
  }
}

export function handleAnswerQuestion(userId, questionId, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser: userId, qid: questionId, answer: answer })
      .then((question) => {
        dispatch(answerQuestion(userId, questionId, answer))
      })
      .catch((e) => {
        alert('An error occurred while answering the question')
        console.error(e)
      })
  }
}