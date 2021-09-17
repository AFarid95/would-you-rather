import { TOGGLE_SHOWN_QUESTIONS } from '../actions/shownQuestions'

export const UNANSWERED = 'UNANSWERED'
export const ANSWERED = 'ANSWERED'

export default function shownQuestions(state = UNANSWERED, action) {
  switch (action.type) {
    case TOGGLE_SHOWN_QUESTIONS:
      switch (state) {
        case UNANSWERED:
          return ANSWERED
        case ANSWERED:
          return UNANSWERED
        default:
          return UNANSWERED
      }
    default:
      return state
  }
}