import { 
  call, 
  put, 
  takeLatest 
} from 'redux-saga/effects'

import { FETCH_EXCHANGE_RATE_REQUESTED } from '../constants';
import {
  fetchExchangeRateSucceeded,
  fetchExchangeRateFailed
} from '../actions';

function* fetchExchangeRateSaga() {
  yield takeLatest(FETCH_EXCHANGE_RATE_REQUESTED, fetchExchangeRate);
}

function* fetchExchangeRate(action) {
  try {
    const response = yield call(
      fetchAlphaVantageExchangeRate,
      action.sourceCurrency, 
      action.targetCurrency
    );

    const exchangeRate = Number(response.exchangeRate);
    yield put(fetchExchangeRateSucceeded(exchangeRate));
  } catch (e) {
    yield put(fetchExchangeRateFailed())
  }
}

const fetchAlphaVantageExchangeRate = async (source, target) => {
  const url = 'aHR0cHM6Ly9ldXJvcGUtd2VzdDEtdHJhbnMtdHJlZXMtMjgzMzE3LmNsb3VkZnVuY3Rpb25zLm5ldC9mZXRjaC1leGNoYW5nZS1yYXRl';
  const response = await fetch(
    atob(url),
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sourceCurrency: source, targetCurrency: target })
    });
  return await response.json();
}

export default fetchExchangeRateSaga;
