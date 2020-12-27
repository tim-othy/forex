import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import CurrencySelector from '../components/CurrencySelector';
import { setTargetCurrency } from '../actions';
import { 
  TARGET_CURRENCY_DEFAULT_VALUE,
  physicalCurrencies
} from '../constants';

const TargetCurrencySelector = (props) => (
  <CurrencySelector
    defaultValueSelect={TARGET_CURRENCY_DEFAULT_VALUE}
    currencies={physicalCurrencies}
    onSelectorChange={(e) => props.setTargetCurrency(e)}
    onInputChange={() => null}
    inputNumberValue={props.targetAmount}
    inputDisabled={true}
  />
);

const mapStateToProps = (state) => ({
  targetAmount: state.targetAmount
})

const mapDispatchToProps = (dispatch) => ({
  setTargetCurrency: (targetCurrency) => dispatch(setTargetCurrency(targetCurrency))
});

TargetCurrencySelector.propTypes = {
  setTargetCurrency: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetCurrencySelector);
