export const createTodo = todo => {
  // do error checking here
  if(todo.body === ''){
    throw "Body field is required";
  }
  return {
    id: todo.id,
    body: todo.body
  };
};

export const updateTodo = todo => {
  if (todo.body === '') {
    throw "Body field is required";
  }
  return {
    id: todo.id,
    body: todo.body
  };
};