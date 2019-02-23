import { combineReducers } from 'redux';
import todos from './todos_reducer';

const entitiesReducer = combineReducers({
  todos
});

export default entitiesReducer;