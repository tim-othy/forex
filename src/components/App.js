import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button, Card } from 'antd';

import SourceCurrencySelector from '../containers/SourceCurrencySelector';
import TargetCurrencySelector from '../containers/TargetCurrencySelector';

import 'antd/dist/antd.css'


class App extends React.Component {
  render() {
    return (
      <Card>
        <SourceCurrencySelector />
        <TargetCurrencySelector />
        <Button>Convert</Button>
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
