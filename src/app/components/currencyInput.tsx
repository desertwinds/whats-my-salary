import { Input } from 'antd';

type Props = {
  currency: string;
  value: number;
  onChange: (v: number, c: string) => void;
}

const CurrencyInput = ({ currency, value, onChange }: Props) => {
  return(
    <div>
      <p>{currency}</p>
      <Input
        value={value}
        type="number"
        min="0.00"
        onChange={(e) => onChange(e.target.valueAsNumber, currency)}
      />
    </div>
  )
}

export default CurrencyInput;