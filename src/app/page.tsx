import { availableCurrencies } from './constants/availableCurrencies';
import CurrencyHolder from './components/currencyHolder';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CurrencyHolder currencies={availableCurrencies}/>
    </main>
  )
}
