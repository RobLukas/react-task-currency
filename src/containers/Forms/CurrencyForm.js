import React from 'react';
import { connect } from 'react-redux';

const CurrencyForm = () => {
  return (
    <div>
      <p>Convert 1 EURO to {}</p>
    </div>
  );
};

const mapStateToProps = ({ convertedEuroToPln }) => convertedEuroToPln;

const mapDispatchToProps = (dispatch) => ({
    addTransaction: () => dispatch()
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyForm);
