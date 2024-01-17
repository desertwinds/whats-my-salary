'use client'

import { useState } from "react";
import { useFetch } from "use-http"
import CurrencyInput from "./currencyInput";
import type { currencyTables as currencyTablesType } from "../types/currencyTables"

type availableCurrencies =  string[];
type currencyValues = {
  [index:string]: number
};

const createDefaultValues = (currencies: string[]) => {
  const values: {[index: string]: number} = {};
  for (let currency of currencies) {
    values[currency] = 0;
  }
  return values;
}


const CurrencyHolder = () => {
  const [currencies, setCurrencies] = useState<availableCurrencies>([])
  const [currentValues, setCurrentValues] = useState<currencyValues>(() => createDefaultValues(currencies))
  const [currencyTables, setCurrencyTables] = useState<currencyTablesType>({})

  const options = {
    interceptors: {
      response: async ({ response }: any) => {
        const res = response
        if (res.data) {
          const tables : currencyTablesType = res.data
          const currencies : availableCurrencies = Object.keys(tables)
          setCurrencyTables(tables)
          setCurrencies(currencies)
          setCurrentValues(createDefaultValues(currencies))
        }
        return res
      }
    }
  }
  const { loading, error } = useFetch('/currencyTables.json', options, [])

  const onChangeCurrency = (value: number, currency: string) => {
    const newValues = JSON.parse(JSON.stringify(currentValues));

    for (let valueCurrency of Object.keys(newValues)) {
      newValues[valueCurrency] = value * currencyTables[currency].Rates[valueCurrency];
    }

    setCurrentValues(newValues);
  }

  return(
    <>
      { error && 'Error!' }
      { loading && 'Loading...' }
      { currencies.map((currency) =>
        <CurrencyInput
          key={`${currency}-input`}
          currency={currency}
          onChange={onChangeCurrency}
          value={currentValues[currency]}
        />
      )}
    </>
  )
}

export default CurrencyHolder;