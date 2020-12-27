import { 
  SET_SOURCE_AMOUNT,
  SET_SOURCE_CURRENCY,
  SET_TARGET_CURRENCY,
  SOURCE_CURRENCY_DEFAULT_VALUE,
  TARGET_CURRENCY_DEFAULT_VALUE,
  FETCH_EXCHANGE_RATE_REQUESTED,
  FETCH_EXCHANGE_RATE_SUCCEEDED,
  FETCH_EXCHANGE_RATE_FAILED
} from '../../constants';

import rootReducer from '../../reducers';

test('should setup default filter values', () => {
  const state = rootReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    exchangeRate: 0,
    headerMessage: ' ',
    sourceAmount: 1,
    targetAmount: null,
    sourceCurrency: 'From Currency',
    targetCurrency: 'To Currency'
  });
});

test('should set source amount', () => {
  const sourceAmount = 1;
  const state = rootReducer(undefined, { type: SET_SOURCE_AMOUNT, sourceAmount });
  expect(state.sourceAmount).toEqual(sourceAmount);
});

test('should set source currency', () => {
  const sourceCurrency = 'test';
  const state = rootReducer(undefined, { type: SET_SOURCE_CURRENCY, sourceCurrency });
  expect(state.sourceCurrency).toEqual(sourceCurrency);
})

test('should set target currency', () => {
  const targetCurrency = 'test';
  const state = rootReducer(undefined, { type: SET_TARGET_CURRENCY, targetCurrency });
  expect(state.targetCurrency).toEqual(targetCurrency);
})

test('should set header message to loading', () => {
  const state = rootReducer(undefined, { type: FETCH_EXCHANGE_RATE_REQUESTED });
  expect(state.headerMessage).toEqual('Loading...');
});

test('should set exchange rate, header message, and target amount on success', () => {
  const exchangeRate = 1.0;
  const state = rootReducer(undefined, { type: FETCH_EXCHANGE_RATE_SUCCEEDED, exchangeRate })
  expect(state.headerMessage).toEqual('1 From Currency equals To Currency 1');
  expect(state.exchangeRate).toEqual(exchangeRate);
  expect(state.targetAmount).toEqual(state.sourceAmount * exchangeRate);
});

test('should set header message on fetch exchange rate failed', () => {
  const state = rootReducer(undefined, { type: FETCH_EXCHANGE_RATE_FAILED });
  expect(state.headerMessage).toEqual('Failed to fetch exchange rate');
})
