'use client'

import CurrencyHolder from './components/currencyHolder';
import { Typography } from 'antd';

const { Title } = Typography;

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <Title className="text-center">Salary Convertor</Title>
      <Title level={3} className="text-center mt-2">Your salary, any currency, instantly.</Title>
      <div className="flex flex-row items-center justify-between pt-16">
        <CurrencyHolder/>
      </div>
    </main>
  )
}
