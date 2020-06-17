import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import exchangeReducer from './exchangeReducer';

export default combineReducers({
  transactions: transactionsReducer,
  exchange: exchangeReducer,
});
