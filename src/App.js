import './App.css';
import 'antd/dist/antd.css'
import React from 'react';
import { Provider } from 'react-redux';

import { Button, Card } from 'antd';

import CurrencySelector from './components/CurrencySelector';
import SourceCurrencySelector from './containers/SourceCurrencySelector';
import TargetCurrencySelector from './containers/TargetCurrencySelector';
import configureStore from './store/configureStore'
import { physicalCurrencies } from './currencies';

function App() {
  return (
    <Provider store={configureStore()}>
      <Card>
        <SourceCurrencySelector
          onSelectorChange={() => {console.log('onSelectorChange')}}
          onInputChange={() => {console.log('onInputChange')}}
        />
        <TargetCurrencySelector
          onSelectorChange={() => {console.log('onSelectorChange')}}
          onInputChange={() => {console.log('onInputChange')}}
        />
        <Button>Convert</Button>
      </Card>
    </Provider>
  );
}

export default App;
