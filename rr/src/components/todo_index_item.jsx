import React from 'react';

const TodoIndexItem = props => {

  return (
    <div>
      <p>{props.todo.body}</p>
      <p>{props.todo.completed ? "completed" : "incomplete"}</p>
    </div>
  );
}