import { connect } from 'react-redux';
import CurrencySelector from '../components/CurrencySelector';
import { setTargetCurrency } from '../actions';

const TargetCurrencySelector = (props) => (
  <CurrencySelector
    defaultValueSelect="ToCurrency"
    currencies={props.currencies}
    onSelectorChange={(e) => props.setTargetCurrency(e)}
    onInputChange={() => {console.log('onInputChange')}}
    inputDisabled={true}
  />
);

const mapStateToProps = (state) => ({
  currencies: state.currencies
});

const mapDispatchToProps = (dispatch) => ({
  setTargetCurrency: (targetCurrency) => dispatch(setTargetCurrency(targetCurrency))
});

export default connect(mapStateToProps, mapDispatchToProps)(TargetCurrencySelector);
