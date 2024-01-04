type currencyTable = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: {
    [index: string]: number;
  }
}

export const EUR: currencyTable = {
  "success":true,
  "timestamp":1704383824,
  "base":"EUR",
  "date":"2024-01-04",
  "rates":{
    "USD":1.095692,
    "EUR":1,
    "GBP":0.86286
  }
};

export const USD: currencyTable = {
  "success":true,
  "timestamp":1704383824,
  "base":"USD",
  "date":"2024-01-04",
  "rates":{
    "USD":1,
    "EUR":0.91,
    "GBP":0.79
  }
};

export const GBP: currencyTable = {
  "success":true,
  "timestamp":1704383824,
  "base":"GBP",
  "date":"2024-01-04",
  "rates":{
    "USD":1.27,
    "EUR":1.16,
    "GBP":1
  }
};

export const currencyTables: {[index: string]: currencyTable} = {
  EUR: EUR,
  USD: USD,
  GBP: GBP
};