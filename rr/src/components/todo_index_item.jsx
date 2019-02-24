import React from 'react';

const TodoIndexItem = props => {

  function toggleComplete(){
    
  }

  return (
    <div onClick={toggleComplete}>
      <p>{props.todo.body}</p>
      <p>{props.todo.completed ? "completed" : "incomplete"}</p>
    </div>
  );
}

export default TodoIndexItem;