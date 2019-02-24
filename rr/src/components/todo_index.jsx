import React from 'react';
import TodoIndexItemContainer from './todo_index_item_container';

const TodoIndex = props => {
  const todos = props.todos.map(todo => (
    <TodoIndexItemContainer key={todo.id} todo={todo}/>
  ));

  return (
    <div>
      {todos}
    </div>
  );
}

export default TodoIndex;