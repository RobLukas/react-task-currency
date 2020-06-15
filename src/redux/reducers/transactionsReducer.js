import initState from '../initState';

const transactions = (transactions = initState.transactions, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        transactions.concat({
          id: action.id,
          name: action.name,
          amounthOfCurrency: action.amounthOfCurrency,
        }),
      ];
    case 'DELETE_TRANSACTION':
      return transactions.filter((transaction) => transaction.id !== action.id);
    case 'LARGEST_TRANSACTION':
      return transactions.reduce((prevTrans, currenTrans) =>
        prevTrans > currenTrans ? prevTrans : currenTrans
      );
    default:
      return transactions;
  }
};

export default transactions;
