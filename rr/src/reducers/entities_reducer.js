import { combineReducers } from 'redux';
import counters from './counters_reducer';

const entitiesReducer = combineReducers({
  counters
});

export default entitiesReducer;