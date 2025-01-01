import React from 'react'
import { fetchUser } from '../helpers/api'
import { LatestInvoices } from 'anjrot-components'

async function UltimosInvoices() {
  const data = await fetchUser()
  return (
    <LatestInvoices
      latestInvoices={data}
      className='bg-slate-700'
      footer={{ className: 'text-white' }}
    />
  )
}

export default UltimosInvoices
