import { ADD_COUNTER } from '../actions/counter_actions';

const countersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case ADD_COUNTER:
      
    default:
      return state;
  }
};

export default countersReducer;