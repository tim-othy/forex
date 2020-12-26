import { connect } from 'react-redux';
import CurrencySelector from '../components/CurrencySelector';

const TargetCurrencySelector = (props) => (
  <CurrencySelector
    defaultValueSelect="ToCurrency"
    currencies={props.currencies}
    onSelectorChange={() => {console.log('onSelectorChange')}}
    onInputChange={() => {console.log('onInputChange')}}
    inputDisabled={true}
  />
);

const mapStateToProps = (state) => ({
  currencies: state.currencies
});

export default connect(mapStateToProps)(TargetCurrencySelector);
