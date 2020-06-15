import { uuid } from 'uuid';

export const addTransaction = (name, amounthOfCurrency) => ({
  type: 'ADD_TRANSACTIONS',
  id: uuid(),
  name: `transaction-${}`,
  amounthOfCurrency,
});

export const deleteTransaction = (id) => ({
  type: 'DELETE_TRANSACTION',
  id,
});

export const largestTransaction = () => ({
  type: 'LARGEST_TRANSACTION',
});
