import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import {
  Wrapper,
  ExchangeCurrencyTitleStyled,
  FormStyled,
  ButtonStyled,
  MessageErrorStyled,
  InputStyled,
} from './styles';
import validationForm from './validationForm';

const CurrencyForm = () => {
  const { euroCurrencyValid } = validationForm;
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const dispatch = useDispatch();
  const exchangeEuroToPln = useSelector(
    ({ exchange: { euroToPlnValue } }) => euroToPlnValue
  );

  const onSubmit = (data) => {
    const { euroCurrency } = data;
    dispatch({ type: 'UPDATE_EXCHANGE_EURO_TO_PLN' });
    dispatch({ type: 'ADD_TRANSACTION', amounthOfCurrency: euroCurrency });
    dispatch({ type: 'LARGEST_TRANSACTION' });
  };

  return (
    <Wrapper>
      <ExchangeCurrencyTitleStyled>
        Exchange 1 EUR = {exchangeEuroToPln} PLN
      </ExchangeCurrencyTitleStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputStyled
          name="euroCurrency"
          type="number"
          placeholder="Enter amounth of euro"
          ref={register(euroCurrencyValid)}
        />
        <MessageErrorStyled>{errors.euroCurrency?.message}</MessageErrorStyled>
        <ButtonStyled type="submit">Add transaction</ButtonStyled>
      </FormStyled>
    </Wrapper>
  );
};

export default CurrencyForm;
