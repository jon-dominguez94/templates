import { connect } from 'react-redux';
import TodosIndex from './todos_index';

const mstp = state => {
  return ({
    todos: Object.values(state.entities.todos)
  });
};

export default connect(mstp)(TodosIndex);