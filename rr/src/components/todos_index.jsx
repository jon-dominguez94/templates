import React from 'react';
import TodoItemContainer from './todos_item_container';

class TodosIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const mappedTodos = this.props.todos.map(todo => {
      return <TodoItemContainer key={todo.id} todo={todo} />
    });

    return (
      <ul>
        {mappedTodos}
      </ul>
    );
  }
}

export default TodosIndex;