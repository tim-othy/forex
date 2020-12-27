import rootReducer from '../../reducers';

test('should setup default filter values', () => {
  const state = rootReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    exchangeRate: 0,
    headerMessage: ' ',
    sourceAmount: 1,
    sourceCurrency: 'From Currency',
    targetCurrency: 'To Currency'
  });
});