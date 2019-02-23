import { connect } from 'react-redux';
import TodoIndex from './todo_index';

const mstp = state => {
  return ({
    todos: Object.values(state.entities.todos)
  });
};

export default connect(mstp)(TodoIndex);