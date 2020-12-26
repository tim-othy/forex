import { 
  SET_SOURCE_AMOUNT ,
  SET_SOURCE_CURRENCY, 
  SET_TARGET_CURRENCY
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
})
