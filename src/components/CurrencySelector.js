import PropTypes from 'prop-types';
import { InputNumber, Select } from 'antd';

const { Option } = Select;

const CurrencySelector = (props) => (
  <>
    <Select
      defaultValue={props.defaultValueSelect}
      style={{ width: 240 }}
      onChange={props.onSelectorChange}
      showSearch={true}
    >
    {
        Object.entries(props.currencies)
          .map(
            ([key,value]) => 
              <Option 
                key={key} 
                value={value}
              >
                {`${key} (${value})`}
              </Option>
          )
    }
    </Select>
    <InputNumber
      value={props.inputNumberValue}
      min={0}
      disabled={!!props.inputDisabled}
      onChange={props.onInputChange}
    />
  </>
);

CurrencySelector.propTypes = {
  defaultValueSelect: PropTypes.string.isRequired,
  onSelectorChange: PropTypes.func.isRequired,
  currencies: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputDisabled: PropTypes.bool,
  inputNumberValue: PropTypes.number
}

export default CurrencySelector;
