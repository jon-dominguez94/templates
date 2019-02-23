import { combineReducers } from 'redux';
import counters from './counter_reducer';

const entitiesReducer = combineReducers({
  counters
});

export default entitiesReducer;