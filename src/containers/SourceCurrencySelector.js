import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSourceCurrency, setSourceAmount } from '../actions';
import CurrencySelector from '../components/CurrencySelector';

const SourceCurrencySelector = (props) => (
  <CurrencySelector
    defaultValueSelect="FromCurrency"
    currencies={props.currencies}
    onSelectorChange={(e) => props.setSourceCurrency(e)}
    onInputChange={(e) => props.setSourceAmount(e)}
  />
);

const mapStateToProps = (state) => ({
  currencies: state.currencies
});

const mapDispatchToProps = (dispatch) => ({
  setSourceCurrency: (sourceCurrency) => dispatch(setSourceCurrency(sourceCurrency)),
  setSourceAmount: (sourceAmount) => dispatch(setSourceAmount(sourceAmount))
});

SourceCurrencySelector.propTypes = {
  currencies: PropTypes.object.isRequired,
  setSourceCurrency: PropTypes.func.isRequired,
  setSourceAmount: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceCurrencySelector);
