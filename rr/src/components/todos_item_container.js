import { connect } from 'react-redux';
import { updateTodo } from '../actions/sample_actions';
import TodoItem from './todo_item';

const mstp = (state, ownProps) => {
  return ({
    todo: ownProps.todo
  });
};

const mdtp = dispatch => {
  return ({
    updateTodo: todo => dispatch(updateTodo(todo))
  });
};

export default connect(mstp, mdtp)(TodoItem);