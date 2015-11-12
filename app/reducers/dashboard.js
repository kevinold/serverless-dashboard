//import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import Immutable from 'immutable';

let initialState = Immutable.Map({
});

export default function dashboard(state = initialState, action) {
  switch (action.type) {
//  case INCREMENT_COUNTER:
//    return state + 1;
//  case DECREMENT_COUNTER:
//    return state - 1;
  default:
    return state;
  }
}
