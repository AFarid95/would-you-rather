import {
  LOGIN,
  LOGOUT
} from '../actions/currentUser'

export default function currentUser(state = '', action) {
  switch (action.type) {
    case LOGIN:
      return action.user
    case LOGOUT:
      return ''
    default:
      return state
  }
}