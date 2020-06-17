import React from 'react';
import { useSelector } from 'react-redux';

import TransactionInfo from '../../components/Transaction/TransactionInfo';

import {
  Wrapper,
  NoTransactionTitleStyled,
  LargestTransactionTitleStyled,
} from './styles';

const LargestTransaction = () => {
  const transaction = useSelector(
    ({ transactions }) => transactions.largestTransaction
  );
  const { id, name, amounthOfCurrency } = transaction;
  const transactionExists = Object.keys(transaction).length;

  return (
    <Wrapper>
      {transactionExists ? (
        <>
          <LargestTransactionTitleStyled>
            The largest transaction value:
          </LargestTransactionTitleStyled>
          <TransactionInfo
            id={id}
            name={name}
            amounthOfCurrency={amounthOfCurrency}
            isRemove={false}
          />
        </>
      ) : (
        <NoTransactionTitleStyled>
          No largest transaction
        </NoTransactionTitleStyled>
      )}
    </Wrapper>
  );
};

export default LargestTransaction;
