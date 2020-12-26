import './App.css';
import 'antd/dist/antd.css'
import React from 'react';

import { Card } from 'antd';

import CurrencySelector from './components/CurrencySelector';
import { physicalCurrencies } from './currencies';

function App() {
  return (
    <Card>
      <CurrencySelector
        defaultValueSelect="FromCurrency"
        currencies={physicalCurrencies}
        onSelectorChange={() => {console.log('onSelectorChange')}}
        onInputChange={() => {console.log('onInputChange')}}
      />
      <CurrencySelector
        defaultValueSelect="ToCurrency"
        currencies={physicalCurrencies}
        onSelectorChange={() => {console.log('onSelectorChange')}}
        onInputChange={() => {console.log('onInputChange')}}
        inputDisabled={true}
      />
    </Card>
  );
}

export default App;
