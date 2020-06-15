import { combineReducers } from 'redux';
import transactions from './transactionsReducer';
import convert from './convertReducer';

export default combineReducers({
  transactions,
  convert,
});
