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
      Object.keys(props.currencies)
        .map(currency => <Option key = {currency} value={currency}>{currency}</Option>)
    }
    </Select>
    <InputNumber
      defaultValue={1}
      disabled={!!props.disableInput}
      onChange={props.onInputChange}
    />
  </>
);

export default CurrencySelector;
