import initState from '../initState';
import { convertEuroToPln } from '../../api/converter';

export default (exchange = initState.exchange, action) => {
  const { type } = action;

  switch (type) {
    case 'UPDATE_EXCHANGE_EURO_TO_PLN':
      return {
        euroToPlnValue: convertEuroToPln(),
      };
    default:
      return exchange;
  }
};
