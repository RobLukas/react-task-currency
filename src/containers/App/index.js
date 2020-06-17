import React from 'react';
import CurrencyForm from '../CurrencyForm';
import ListTransactions from '../ListTransactions';
import LargestTransaction from '../LargestTransaction';
import { Wrapper } from './styles';

const App = () => {
  return (
    <>
      <CurrencyForm />
      <Wrapper>
        <ListTransactions />
        <LargestTransaction />
      </Wrapper>
    </>
  );
};

export default App;
