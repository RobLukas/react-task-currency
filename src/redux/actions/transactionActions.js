export const addTransaction = (amounthOfCurrency) => ({
  type: 'ADD_TRANSACTIONS',
  amounthOfCurrency,
});

export const deleteTransaction = (id) => ({
  type: 'DELETE_TRANSACTION',
  id,
});

export const largestTransaction = () => ({
  type: 'LARGEST_TRANSACTION',
});
