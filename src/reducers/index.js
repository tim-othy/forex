import { 
  SET_SOURCE_AMOUNT,
  SET_SOURCE_CURRENCY,
  SET_TARGET_CURRENCY,
  SOURCE_CURRENCY_DEFAULT_VALUE,
  TARGET_CURRENCY_DEFAULT_VALUE,
  FETCH_EXCHANGE_RATE_REQUESTED,
  FETCH_EXCHANGE_RATE_SUCCEEDED,
  FETCH_EXCHANGE_RATE_FAILED
} from '../constants';

const initialState = {
  sourceCurrency: SOURCE_CURRENCY_DEFAULT_VALUE,
  targetCurrency: TARGET_CURRENCY_DEFAULT_VALUE,
  exchangeRate: 0,
  sourceAmount: 1,
  headerMessage: ' '
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SOURCE_AMOUNT:
      const sourceAmount = action.sourceAmount;
      return {
        ...state,
        sourceAmount
      };
    case SET_SOURCE_CURRENCY:
      const sourceCurrency = action.sourceCurrency;
      return {
        ...state,
        sourceCurrency
      };
    case SET_TARGET_CURRENCY:
      const targetCurrency = action.targetCurrency;
      return {
        ...state,
        targetCurrency
      };
    case FETCH_EXCHANGE_RATE_REQUESTED:
      return {
        ...state,
        headerMessage: 'Loading...'
      };
    case FETCH_EXCHANGE_RATE_SUCCEEDED:
      const exchangeRate = action.exchangeRate;
      return {
        ...state,
        exchangeRate,
        headerMessage: `1 ${state.sourceCurrency} equals ${state.targetCurrency} ${exchangeRate}`
      }
    case FETCH_EXCHANGE_RATE_FAILED:
      return {
        ...state,
        headerMessage: 'Failed to fetch exchange rate'
      }
    default:
      return state;
  }
}

export default rootReducer;
