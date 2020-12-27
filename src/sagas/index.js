import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FETCH_EXCHANGE_RATE_REQUESTED, FETCH_EXCHANGE_RATE_SUCCEEDED } from '../constants';

function* fetchExchangeRateSaga() {
  yield takeLatest(FETCH_EXCHANGE_RATE_REQUESTED, fetchExchangeRate);
}


function* fetchExchangeRate(action) {
  console.log('test');
  const exchangeRate = 1;
  yield put({type: FETCH_EXCHANGE_RATE_SUCCEEDED, exchangeRate})
  // try {
  //   const data = yield call(
  //     fetchAlphaVantageExchangeRate(action.sourceCurrency, action.targetCurrency)
  //   );

  //   const exchangeRate = data['5. Exchange Rate']

  //   yield put({type: 'FETCH_EXCHANGE_RATE_SUCCEEDED', exchangeRate})
  // } catch (e) {
  //   yield put({type: 'FETCH_EXCHANGE_RATE_FAILED', message: e.message})
  // }
}

// const fetchAlphaVantageExchangeRate = (sourceCurrency, targetCurrency) => {
//   return fetch(
//     `https://www.alphavantage.co/query?
//       function=CURRENCY_EXCHANGE_RATE&
//       from_currency=${sourceCurrency}&
//       to_currency=${targetCurrency}&
//       apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API_KEY}`, 
//     {
//       method:'GET',
//       headers:{
//         'Content-Type': 'application/json',
//       }
//     }
//   ).then(response => response.json());
// }

export default fetchExchangeRateSaga;
