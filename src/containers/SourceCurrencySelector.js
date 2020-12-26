import { connect } from 'react-redux';
import CurrencySelector from '../components/CurrencySelector';

const SourceCurrencySelector = (props) => (
  <CurrencySelector
    defaultValueSelect="FromCurrency"
    currencies={props.currencies}
    onSelectorChange={() => {console.log('onSelectorChange')}}
    onInputChange={() => {console.log('onInputChange')}}
  />
);

const mapStateToProps = (state) => ({
  currencies: state.currencies
});

export default connect(mapStateToProps)(SourceCurrencySelector);
