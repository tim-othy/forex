import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import CurrencySelector from '../components/CurrencySelector';
import { setTargetCurrency } from '../actions';
import { TARGET_CURRENCY_DEFAULT_VALUE } from '../constants';

const TargetCurrencySelector = (props) => (
  <CurrencySelector
    defaultValueSelect={TARGET_CURRENCY_DEFAULT_VALUE}
    currencies={props.currencies}
    onSelectorChange={(e) => props.setTargetCurrency(e)}
    onInputChange={() => null}
    inputDisabled={true}
  />
);

const mapStateToProps = (state) => ({
  currencies: state.currencies
});

const mapDispatchToProps = (dispatch) => ({
  setTargetCurrency: (targetCurrency) => dispatch(setTargetCurrency(targetCurrency))
});

TargetCurrencySelector.propTypes = {
  currencies: PropTypes.object.isRequired,
  setTargetCurrency: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetCurrencySelector);
