import { physicalCurrencies } from '../currencies';

const initialState = {
  sourceCurrency: '',
  targetCurrency: '',
  sourceAmount: 1,
  currencies: physicalCurrencies
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_SOURCE_CURRENCY':
      const sourceCurrency = action.sourceCurrency;
      return {
        ...state,
        sourceCurrency
      };
    case 'SET_SOURCE_AMOUNT':
      const sourceAmount = action.sourceAmount;
      return {
        ...state,
        sourceAmount
      }
    default:
      return state;
  }
}

export default rootReducer;
