import React from 'react';

const TodoIndex = props => {
  const todos = props.todos.map(todo => {
    <p>{todo.body}</p>
    <p>{todo.completed}</p>
  })

  return (
    {todos}
  );
}

export default TodoIndex;