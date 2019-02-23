export const createTodo = todo => {
  if(todo.body === ''){
    throw { message: "Body must not be empty" };
  }
  return {
    id: todo.id,
    body: todo.body,
    completed: false,
  };
};