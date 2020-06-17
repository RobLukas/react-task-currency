import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TransactionInfo from '../../components/Transaction/TransactionInfo';

import { Wrapper } from './styles';

const ListTransactions = () => {
  const transactions = useSelector(({ transactions }) => transactions.list);
  return (
    <Wrapper>
      <p>Sums of transactions: {transactions.length}</p>
      <p>List of transactions:</p>
      <div>
        {transactions.map(({ id, name, amounthOfCurrency }) => (
          <TransactionInfo
            key={uuidv4()}
            id={id}
            name={name}
            amounthOfCurrency={amounthOfCurrency}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default ListTransactions;
