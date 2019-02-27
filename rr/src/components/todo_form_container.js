import { connect } from 'react-redux';
import { createTodo } from '../actions/sample_actions';
import TodoForm from './todo_form';

const mstp = state => {
  return ({
    id: Object.values(state.entities.todos).length
  });
};

const mdtp = dispatch => {
  return ({
    createTodo: todo => dispatch(createTodo(todo))
  });
};

export default connect(mstp, mdtp)(TodoForm);