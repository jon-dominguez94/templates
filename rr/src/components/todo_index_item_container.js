import { connect } from 'react-redux';
import TodoIndexItem from './todo_index_item';
import { updateTodo } from '../actions/todo_actions';

const mstp = (state, ownProps) => {
  return({
    todo: ownProps.todo
  });
};

const mdtp = dispatch => {
  return ({
    updateTodo: todo => dispatch(updateTodo(todo))
  });
};

export default connect(mstp, mdtp)(TodoIndexItem);