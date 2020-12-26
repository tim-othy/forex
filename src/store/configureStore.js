import { createStore, combineReducers } from 'redux';
import sourceCurrencyReducer from '../reducers/sourceCurrencyReducer';
import targetCurrencyReducer from '../reducers/targetCurrencyReducer';
import exchangeRateReducer from '../reducers/exchangeRateReducer';
import { physicalCurrencies } from '../currencies';

const rootReducer = combineReducers({
  currencies: () => physicalCurrencies,
  sourceCurrency: sourceCurrencyReducer,
  targetCurrency: targetCurrencyReducer,
});

export default () => (
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
