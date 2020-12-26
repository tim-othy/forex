import { connect } from 'react-redux';

import { setSourceCurrency } from '../actions';
import CurrencySelector from '../components/CurrencySelector';

const SourceCurrencySelector = (props) => (
  <CurrencySelector
    defaultValueSelect="FromCurrency"
    currencies={props.currencies}
    onSelectorChange={(e) => props.setSourceCurrency(e)}
    onInputChange={() => {console.log('onInputChange')}}
  />
);

const mapStateToProps = (state) => ({
  currencies: state.currencies
});

const mapDispatchToProps = (dispatch) => ({
  setSourceCurrency: (sourceCurrency) => dispatch(setSourceCurrency(sourceCurrency))
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceCurrencySelector);
