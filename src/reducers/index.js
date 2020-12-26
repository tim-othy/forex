import { physicalCurrencies } from '../currencies';

const initialState = {
  sourceCurrency: '',
  targetCurrency: '',
  sourceAmount: 0,
  currencies: physicalCurrencies
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_SOURCE_CURRENCY':
      const sourceCurrency = action.sourceCurrency
      return {
        ...state,
        sourceCurrency
      };
    default:
      return state;
  }
}

export default rootReducer;