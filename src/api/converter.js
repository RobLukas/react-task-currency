const randomConverterEuroToPln = 4 + Math.random().toFixed(2);

export const convertEuroToPln = (amounth) => {
  return amounth * randomConverterEuroToPln;
};
