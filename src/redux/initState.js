import { convertEuroToPln } from '../api/converter';

export default {
  transactions: {
    largestTransaction: {},
    list: [],
  },
  exchange: {
    euroToPlnValue: convertEuroToPln(),
  },
};
