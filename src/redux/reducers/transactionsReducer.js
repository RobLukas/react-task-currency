import { v4 as uuid } from 'uuid';
import shortid from 'shortid';
import initState from '../initState';

const transactions = (transactions = initState.transactions, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...transactions,
        list: transactions.list.concat([
          {
            id: uuid(),
            name: `transaction-${shortid.generate()}`,
            amounthOfCurrency: Number(action.amounthOfCurrency),
          },
        ]),
      };
    case 'DELETE_TRANSACTION':
      return {
        ...transactions,
        list: transactions.list.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    case 'LARGEST_TRANSACTION':
      return {
        ...transactions,
        largestTransaction: transactions.list.length
          ? transactions.list.reduce((prevTrans, currenTrans) =>
              prevTrans.amounthOfCurrency > currenTrans.amounthOfCurrency
                ? prevTrans
                : currenTrans
            )
          : {},
      };
    default:
      return transactions;
  }
};

export default transactions;
