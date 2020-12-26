import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button, Card, notification } from 'antd';

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
  }

  render() {
    return (
      <Card>
        <SourceCurrencySelector />
        <TargetCurrencySelector />
        <Button onClick={this.handleClick}>Convert</Button>
      </Card>  
    );
  }
}

const mapStateToProps = (state) => ({
  sourceCurrency: state.sourceCurrency,
  targetCurrency: state.targetCurrency
});

const mapDispatchToProps = (dispatch) => ({

});

App.propTypes = {
  sourceCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
