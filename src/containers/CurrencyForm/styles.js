import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 100px auto;
`;

const ExchangeCurrencyTitleStyled = styled.p`
  font-size: 20px;
  font-family: inherit;
  font-weight: 600;
`;

const FormStyled = styled.form`
  text-align: center;
`;

const InputStyled = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }
  border: 0;
  font-size: 20px;
  font-family: inherit;
  text-align: center;
  padding: 15px 0 15px 0;
  border-bottom: 1px solid;
  font-weight: 300;
  line-height: 1.5;
  outline: none;
  color: inherit;
  background: transparent;
`;

const MessageErrorStyled = styled.span`
  padding: 10px 0 10px 0;
  display: block;
  font-family: inherit;
  color: red;
  font-size: 13px;
  font-style: italic;
`;

const ButtonStyled = styled.button`
  padding: 13px 50px;
  margin: 20px;
  font-size: 18px;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  background: transparent;
  color: white;
  border: 1.4px solid;
  border-radius: 50px;
  :hover {
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
`;

export {
  Wrapper,
  ExchangeCurrencyTitleStyled,
  FormStyled,
  ButtonStyled,
  InputStyled,
  MessageErrorStyled,
};
