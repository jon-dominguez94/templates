import React from 'react';
import TodoIndexItem from './todo_index_item';

const TodoIndex = props => {
  const todos = props.todos.map(todo => (
    <TodoIndexItem key={todo.id} />
  ));

  return (
    <div>
      {todos}
    </div>
  );
}

export default TodoIndex;