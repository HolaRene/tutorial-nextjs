import CardWrpper from '../components/CardWrpper'
import ChartWrapper from '../components/ChartWrapper'
import UltimosInvoices from '../components/UltimosInvoices'
import { bebas_neue } from '../ui/font'

export default function Dashboard() {
  console.log('Datos de los custumer: ')
  return (
    <main>
      <h1 className={`${bebas_neue.className} mb-3 text-xl md:text-2xl `}>
        Dashboard
      </h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <CardWrpper />
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <div className='w-full md:col-span-4'>
          <h1 className={`${bebas_neue.className} mb-3 text-xl md:text-2xl `}>
            Ventas recientes
          </h1>
          <ChartWrapper />
        </div>
        <div className='w-full md:col-span-4'>
          <h1 className={`${bebas_neue.className} mb-3 text-xl md:text-2xl `}>
            Ultimos invoices
          </h1>
          <UltimosInvoices />
        </div>
      </div>
    </main>
  )
}
