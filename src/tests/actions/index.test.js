import { 
  SET_SOURCE_AMOUNT ,
  SET_SOURCE_CURRENCY, 
  SET_TARGET_CURRENCY,
  FETCH_EXCHANGE_RATE_REQUESTED,
  FETCH_EXCHANGE_RATE_SUCCEEDED,
  FETCH_EXCHANGE_RATE_FAILED 
} from '../../constants';

import {
  setSourceAmount,
  setSourceCurrency,
  setTargetCurrency,
  fetchExchangeRateRequested,
  fetchExchangeRateSucceeded,
  fetchExchangeRateFailed
} from '../../actions';

test('should generate setSourceAmount action', () => {
  const sourceAmount = 1;
  const action = setSourceAmount(sourceAmount);
  expect(action).toEqual({
    type: SET_SOURCE_AMOUNT,
    sourceAmount
  });
});

test('should generate setSourceCurrency action', () => {
  const sourceCurrency = 'test';
  const action = setSourceCurrency(sourceCurrency);
  expect(action).toEqual({
    type: SET_SOURCE_CURRENCY,
    sourceCurrency
  });
});

test('should generate setTargetCurrency action', () => {
  const targetCurrency = 'test';
  const action = setTargetCurrency(targetCurrency);
  expect(action).toEqual({
    type: SET_TARGET_CURRENCY,
    targetCurrency
  });
});

test('should generate fetchExchangeRequested action', () => {
  const sourceCurrency = 'sourceCurrency';
  const targetCurrency = 'targetCurrency';
  const action = fetchExchangeRateRequested(sourceCurrency, targetCurrency);
  expect(action).toEqual({
    type: FETCH_EXCHANGE_RATE_REQUESTED,
    sourceCurrency,
    targetCurrency
  });
});

test('should generate fetchExchangeRateSucceeded action', () => {
  const exchangeRate = 1.0;
  const action = fetchExchangeRateSucceeded(exchangeRate);
  expect(action).toEqual({
    type: FETCH_EXCHANGE_RATE_SUCCEEDED,
    exchangeRate
  });
});

test('should generate fetchExchangeRateFailed action', () => {
  const action = fetchExchangeRateFailed();
  expect(action).toEqual({
    type: FETCH_EXCHANGE_RATE_FAILED
  });
});

