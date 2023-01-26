export const makeFinancialFormat = (value) => {
  return (+value).toLocaleString() + ' руб.'
};