export const createTodo = todo => {
  return {
    id: todo.id,
    body: todo.body,
    completed: false,
  };
};