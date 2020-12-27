import { 
  SET_SOURCE_AMOUNT ,
  SET_SOURCE_CURRENCY, 
  SET_TARGET_CURRENCY,
  FETCH_EXCHANGE_RATE_REQUESTED
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

export const fetchExchangeRate = (sourceCurrency, targetCurrency) => ({
  type: FETCH_EXCHANGE_RATE_REQUESTED,
  sourceCurrency,
  targetCurrency
})
