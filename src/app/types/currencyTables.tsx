type currencyTable = {
  Success: boolean;
  Timestamp: number;
  Base: string;
  Rates: {
    [index: string]: number;
  }
}

type currencyTables = {
  [index: string]: currencyTable
}

export type {
  currencyTables
}