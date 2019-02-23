import { RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TODO:
      return merge({}, state, { [action.todo.id]: action.todo });
    default:
      return state;
  }
};

export default todosReducer;