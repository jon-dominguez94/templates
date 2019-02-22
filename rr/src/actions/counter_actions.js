export const ADD_COUNTER = "ADD_COUNTER";

export const add = () => {
  return ({
    type: ADD_COUNTER
  });
};

export const addCounter = () => dispatch => {
  return dispatch(add());
};