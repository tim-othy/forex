import { 
  SET_SOURCE_AMOUNT ,
  SET_SOURCE_CURRENCY, 
  SET_TARGET_CURRENCY,
  FETCH_EXCHANGE_RATE_REQUESTED,
  FETCH_EXCHANGE_RATE_SUCCEEDED,
  FETCH_EXCHANGE_RATE_FAILED 
} from '../constants';

export const setSourceAmount = (sourceAmount) => ({
  type: SET_SOURCE_AMOUNT,
  sourceAmount
});

export const setSourceCurrency = (sourceCurrency) => ({
  type: SET_SOURCE_CURRENCY,
  sourceCurrency
});

export const setTargetCurrency = (targetCurrency) => ({
  type: SET_TARGET_CURRENCY,
  targetCurrency
});

export const fetchExchangeRateRequested = (sourceCurrency, targetCurrency) => ({
  type: FETCH_EXCHANGE_RATE_REQUESTED,
  sourceCurrency,
  targetCurrency
})

export const fetchExchangeRateSucceeded = (exchangeRate) => ({
  type: FETCH_EXCHANGE_RATE_SUCCEEDED, 
  exchangeRate
})

export const fetchExchangeRateFailed = () => ({
  type: FETCH_EXCHANGE_RATE_FAILED 
})
