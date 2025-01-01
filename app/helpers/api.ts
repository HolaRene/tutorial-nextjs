const header = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzA3ZjFkOTBhODJiZDQ1YWUwYjVhMiIsImVtYWlsIjoiam9lZG9uQHRlc3QuY29tIiwibmFtZSI6ImpvZWRvbiIsImlhdCI6MTczNTQyNjAzNX0.ajKzuS3B8bjt4PSbkY8KScb2C913BYHcpNUa5Uphs60',
}

export const fechtCard = async () => {
  try {
    const [getClientesCount, getInvoicesCount, getInvoicesStatus] =
      await Promise.all([
        fetch(`${process.env.BACKEND_URL}/customer/count`, { headers: header }),
        fetch(`${process.env.BACKEND_URL}/invoices/count`, { headers: header }),
        fetch(`${process.env.BACKEND_URL}/invoices/status-count`, {
          headers: header,
        }),
      ])
    const resultClientesCount = await getClientesCount.json()
    const resultInvoicesCount = await getInvoicesCount.json()
    const resultInvoicesStatus = await getInvoicesStatus.json()

    const numberOfInvoices = Number(resultClientesCount ?? '0')
    const numberOfCustomers = Number(resultInvoicesCount ?? '0')
    const totalPaidInvoices = resultInvoicesStatus.paid ?? '0'
    const totalPendingInvoices = resultInvoicesStatus.pending ?? '0'

    return {
      numberOfCustomers,
      totalPaidInvoices,
      totalPendingInvoices,
      numberOfInvoices,
    }
  } catch (error) {
    console.log('Ha ocurrido un error: ', error)
    throw new Error('Ha fallado la peticion')
  }
}

export const fetchGanancias = async () => {
  try {
    const getGanancias = await fetch(`${process.env.BACKEND_URL}/revenues`, {
      headers: header,
    })
    const resultGanancias = await getGanancias.json()

    return resultGanancias
  } catch (error) {
    console.log('Ha ocurrido un error: ', error)
    throw new Error('Ha fallado la peticion')
  }
}

export const fetchUser = async () => {
  try {
    const user = await fetch(process.env.BACKEND_URL + '/invoices', {
      headers: header,
    })
    const resultUser = await user.json()
    return resultUser
  } catch (error) {
    console.log('Ha ocurrido un error: ', error)
    throw new Error('Ha fallado la peticion')
  }
}
