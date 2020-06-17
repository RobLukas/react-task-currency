import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Wrapper = styled.div`
  margin: 30px auto;
  padding: 20px 40px;
  border: 1px white solid;
  width: 50%;
  border-radius: 50px;
`;

const WrapperInlineTextStyled = styled.div`
  width: 100%;
`;

const CloseIconStyled = styled(CloseIcon)`
  && {
    color: white;
  }
`;

const TransactionNameStyled = styled.span`
  font-size: 18px;
`;

const IconButtonStyled = styled(IconButton)`
  float: right;
`;

const ConvertedValueStyled = styled.p`
  text-align: left;
`;

export {
  Wrapper,
  CloseIconStyled,
  IconButtonStyled,
  WrapperInlineTextStyled,
  TransactionNameStyled,
  ConvertedValueStyled,
};
