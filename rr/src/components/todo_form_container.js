import { connect } from 'react-redux';
import TodoForm from './todo_form';

const mstp = state => {
  return ({
    length: Object.values(state.entities.counters).length
  });
};

const mdtp = dispatch => {
  return ({

  });
};

export default connect(mstp, mdtp)(TodoForm);
