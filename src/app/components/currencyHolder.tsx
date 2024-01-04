'use client'

import { useState } from "react";
import CurrencyInput from "./currencyInput";
import { currencyTables } from "../constants/currencyTables";

type Props = {
  currencies: string[]
}

const createDefaultValues = (currencies: string[]) => {
  const values: {[index: string]: number} = {};
  for (let currency of currencies) {
    values[currency] = 0;
  }
  return values;
}


const CurrencyHolder = ({ currencies }: Props) => {
  const [currentValues, setCurrentValues] = useState(() => createDefaultValues(currencies))

  const onChangeCurrency = (value: number, currency: string) => {
    const newValues = JSON.parse(JSON.stringify(currentValues));

    for (let valueCurrency of Object.keys(newValues)) {
      newValues[valueCurrency] = value * currencyTables[currency].rates[valueCurrency];
    }

    setCurrentValues(newValues);
  }

  return(
    <>
      { currencies.map((currency) =>
        <CurrencyInput
          currency={currency}
          onChange={onChangeCurrency}
          value={currentValues[currency]}
        />
      )}
    </>
  )
}

export default CurrencyHolder;