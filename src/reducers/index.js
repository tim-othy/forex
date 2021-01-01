import { 
  SET_SOURCE_AMOUNT,
  SET_SOURCE_CURRENCY,
  SET_TARGET_CURRENCY,
  SOURCE_CURRENCY_DEFAULT_VALUE,
  TARGET_CURRENCY_DEFAULT_VALUE,
  FETCH_EXCHANGE_RATE_REQUESTED,
  FETCH_EXCHANGE_RATE_SUCCEEDED,
  FETCH_EXCHANGE_RATE_FAILED,
  EXCHANGE_RATE_DEFAULT_VALUE,
  SOURCE_AMOUNT_DEFAULT_VALUE,
  TARGET_AMOUNT_DEFAULT_VALUE,
  HEADER_MESSAGE_DEFAULT_VALUE
} from '../constants';

const initialState = {
  sourceCurrency: SOURCE_CURRENCY_DEFAULT_VALUE,
  targetCurrency: TARGET_CURRENCY_DEFAULT_VALUE,
  exchangeRate: EXCHANGE_RATE_DEFAULT_VALUE,
  sourceAmount: SOURCE_AMOUNT_DEFAULT_VALUE,
  targetAmount: TARGET_AMOUNT_DEFAULT_VALUE,
  headerMessage: HEADER_MESSAGE_DEFAULT_VALUE
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SOURCE_AMOUNT:
      const sourceAmount = action.sourceAmount;
      const updatedTargetAmount = !!state.exchangeRate ? state.exchangeRate * sourceAmount : null;
      return {
        ...state,
        sourceAmount,
        targetAmount: updatedTargetAmount
      };
    case SET_SOURCE_CURRENCY:
      const sourceCurrency = action.sourceCurrency;
      return {
        ...state,
        sourceCurrency,
        targetAmount: null
      };
    case SET_TARGET_CURRENCY:
      const targetCurrency = action.targetCurrency;
      return {
        ...state,
        targetCurrency,
        targetAmount: null
      };
    case FETCH_EXCHANGE_RATE_REQUESTED:
      return {
        ...state,
        headerMessage: 'Loading...'
      };
    case FETCH_EXCHANGE_RATE_SUCCEEDED:
      const exchangeRate = action.exchangeRate;
      const targetAmount = state.sourceAmount * exchangeRate;
      return {
        ...state,
        exchangeRate,
        targetAmount,
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
