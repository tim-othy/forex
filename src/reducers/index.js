import { 
  SET_SOURCE_AMOUNT,
  SET_SOURCE_CURRENCY,
  SET_TARGET_CURRENCY,
  physicalCurrencies
} from '../constants';

const initialState = {
  sourceCurrency: '',
  targetCurrency: '',
  sourceAmount: 1,
  currencies: physicalCurrencies
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
    default:
      return state;
  }
}

export default rootReducer;
