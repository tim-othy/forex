import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers';
import fetchExchangeRateSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    rootReducer,
    composedEnhancers
);

sagaMiddleware.run(fetchExchangeRateSaga);

export default store;
