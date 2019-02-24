import { connect } from 'react-redux';
import TodoIndexItem from './todo_index_item';

const mstp = (state, ownProps) => {
  return({
    todo: ownProps.todo
  });
};

const mdtp = dispatch => {
  return ({

  });
};

export default connect(mstp, mdtp)(TodoIndexItem);