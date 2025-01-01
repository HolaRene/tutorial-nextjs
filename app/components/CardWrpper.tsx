import { InfoCard } from 'anjrot-components'
import { fechtCard } from '../helpers/api'

export default async function CardWrpper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fechtCard()
  return (
    <>
      <InfoCard
        title='Coleccion'
        value={totalPaidInvoices}
        type='collected'
        currency={{ locale: 'en-US', currency: 'USD' }}
      />
      <InfoCard
        title='Pendiente'
        value={totalPendingInvoices}
        type='pending'
        currency={{ locale: 'en-US', currency: 'USD' }}
      />
      <InfoCard
        title='Total de invoices'
        value={numberOfInvoices}
        type='invoices'
      />
      <InfoCard
        title='Total de clientes'
        value={numberOfCustomers}
        type='customers'
      />
    </>
  )
}
