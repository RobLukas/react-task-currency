import { convertEuroToPln } from '../../api/converter';

export const convertEuroToPlnValue = (amounthOfCurrency) => ({
  type: 'CONVERT_EURO_TO_PLN',
  convertEuroToPln: convertEuroToPln(amounthOfCurrency),
});
