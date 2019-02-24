export const createTodo = todo => {
  if(todo.body === ''){
    throw "Body must not be empty";
  }
  return {
    id: todo.id,
    body: todo.body,
    completed: false,
  };
};

export const updateTodo = todo => {
  todo.completed = todo.completed ? = false : true;
  return todo;
};