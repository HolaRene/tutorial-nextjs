import React from 'react'
import { fetchGanancias } from '../helpers/api'
import { RevenueChart } from 'anjrot-components'

async function ChartWrapper() {
  const data = await fetchGanancias()
  return (
    <RevenueChart revenues={data} chartHeight={350} className='bg-slate-600' />
  )
}
export default ChartWrapper
