import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  Wrapper,
  CloseIconStyled,
  WrapperInlineTextStyled,
  IconButtonStyled,
  TransactionNameStyled,
  ConvertedValueStyled,
} from './styles';

const TransactionInfo = ({ id, name, amounthOfCurrency, isRemove = true }) => {
  const exchangeEuroToPln = useSelector(
    (state) => state.exchange.euroToPlnValue
  );
  const convertEuroToPln = (amounthOfCurrency * exchangeEuroToPln).toFixed(2);
  const dispatch = useDispatch();
  const removeTransaction = useCallback(() => {
    dispatch({ type: 'DELETE_TRANSACTION', id });
    dispatch({ type: 'LARGEST_TRANSACTION' });
  }, [id]);

  return (
    <Wrapper>
      <WrapperInlineTextStyled>
        <TransactionNameStyled>Transaction: {name}</TransactionNameStyled>
        {isRemove && (
          <IconButtonStyled size={'small'} onClick={removeTransaction}>
            <CloseIconStyled fontSize={'small'} />
          </IconButtonStyled>
        )}
      </WrapperInlineTextStyled>
      <ConvertedValueStyled>
        {amounthOfCurrency} EUR = {convertEuroToPln} PLN
      </ConvertedValueStyled>
    </Wrapper>
  );
};

TransactionInfo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amounthOfCurrency: PropTypes.number.isRequired,
  isRemove: PropTypes.bool,
};

export default TransactionInfo;
