import initState from '../initState';

export default (convertedEuroToPln = initState.convertedEuroToPln, action) => {
  const { type, convertedEuroToPln } = action;

  switch (type) {
    case 'CONVERT_EURO_TO_PLN':
      return {convertedEuroToPln: convertedEuroToPln };

    default:
      return convertedEuroToPln;
  }
};
