import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSourceCurrency, setSourceAmount } from '../actions';
import CurrencySelector from '../components/CurrencySelector';
import { 
  SOURCE_CURRENCY_DEFAULT_VALUE,
  physicalCurrencies
} from '../constants';

const SourceCurrencySelector = (props) => (
  <CurrencySelector
    defaultValueSelect={SOURCE_CURRENCY_DEFAULT_VALUE}
    currencies={physicalCurrencies}
    onSelectorChange={(e) => props.setSourceCurrency(e)}
    onInputChange={(e) => props.setSourceAmount(e)}
    inputNumberValue={props.sourceAmount}
  />
);

const mapStateToProps = (state) => ({
  sourceAmount: state.sourceAmount
})

const mapDispatchToProps = (dispatch) => ({
  setSourceCurrency: (sourceCurrency) => dispatch(setSourceCurrency(sourceCurrency)),
  setSourceAmount: (sourceAmount) => dispatch(setSourceAmount(sourceAmount))
});

SourceCurrencySelector.propTypes = {
  setSourceCurrency: PropTypes.func.isRequired,
  setSourceAmount: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceCurrencySelector);
