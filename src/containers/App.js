import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button, Card, notification, Row } from 'antd';

import { fetchExchangeRateRequested } from '../actions';
import SourceCurrencySelector from './SourceCurrencySelector';
import TargetCurrencySelector from './TargetCurrencySelector';
import {
  SOURCE_CURRENCY_DEFAULT_VALUE,
  TARGET_CURRENCY_DEFAULT_VALUE
} from '../constants';

import 'antd/dist/antd.css'


class App extends React.Component {
  handleClick = () => {
    if (this.props.sourceCurrency === SOURCE_CURRENCY_DEFAULT_VALUE) {
      notification['warning']({
        message: 'Please select a source currency'
      });
    }

    if (this.props.targetCurrency === TARGET_CURRENCY_DEFAULT_VALUE) {
      notification['warning']({
        message: 'Please select a target currency'
      });
    }

    if (this.props.sourceCurrency === this.props.targetCurrency) {
      notification['warning']({
        message: 'Please select a target currency which differs from your source currency'
      });
    }

    if (
      this.props.sourceCurrency !== this.props.targetCurrency &&
      this.props.targetCurrency !== TARGET_CURRENCY_DEFAULT_VALUE &&
      this.props.sourceCurrency !== SOURCE_CURRENCY_DEFAULT_VALUE
    ) {
      this.props.fetchExchangeRate(this.props.sourceCurrency, this.props.targetCurrency);
    }
  }

  render() {
    return (
      <Card title={this.props.headerMessage}>
        <Row style={{ marginBottom: 8 }}>
          <SourceCurrencySelector />
        </Row>
        <Row style={{ marginBottom: 8 }}>
          <TargetCurrencySelector />
        </Row>
        <Button onClick={this.handleClick}>Convert</Button>
      </Card>  
    );
  }
}

const mapStateToProps = (state) => ({
  sourceCurrency: state.sourceCurrency,
  targetCurrency: state.targetCurrency,
  exchangeRate: state.exchangeRate,
  headerMessage: state.headerMessage
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchangeRate: (sourceCurrency, targetCurrency) => dispatch(fetchExchangeRateRequested(sourceCurrency, targetCurrency))
});

App.propTypes = {
  sourceCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  fetchExchangeRate: PropTypes.func.isRequired,
  headerMessage: PropTypes.string,
  exchangeRate: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
