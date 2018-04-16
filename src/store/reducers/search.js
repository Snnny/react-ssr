import { GET_SEARCH, SET_SEARCH, CLEAR_SEARCH } from '../constants'

const init = {}

export function search(state=init, action) {
  switch (action.type) {
    case GET_SEARCH:
      break;
    case SET_SEARCH:
      break;
    case CLEAR_SEARCH:
      break;
    default:
      return state
  }
}