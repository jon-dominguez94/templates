import * as APIUtil from '../util/api_util';

export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveTodo = todo => {
  return ({
    type: RECEIVE_TODO,
    todo
  });
};

export const createTodo = todo => dispatch => {
  try {
    const newTodo = APIUtil.createTodo(todo);
    dispatch(receiveTodo(newTodo));
  } catch(err) {
    console.log(err);
  }
};

export const updateTodo = todo => dispatch => {
  dispatch(receiveTodo(APIUtil.updateTodo(todo)));
};