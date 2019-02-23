import React from 'react';

const TodoIndex = props => {
  const todos = props.todos.map(todo => (
    <div key={todo.id}>
      <p>{todo.body}</p>
      <p>{todo.completed ? "completed" : "incomplete"}</p>
    </div>
  ));

  return (
    <div>
      {todos}
    </div>
  );
}

export default TodoIndex;