import { connect } from 'react-redux';
import TodoForm from './todo_form';
import { createTodo } from '../actions/todo_actions';

const mstp = state => {
  return ({
    length: Object.values(state.entities.todos).length
  });
};

const mdtp = dispatch => {
  return ({
    createTodo: todo => dispatch(createTodo(todo))
  });
};

export default connect(mstp, mdtp)(TodoForm);
