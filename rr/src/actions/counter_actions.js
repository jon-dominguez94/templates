export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveTodo = todo => {
  return ({
    type: RECEIVE_TODO,
    todo
  });
};

