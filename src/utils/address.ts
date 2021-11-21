import axios from 'axios'

interface Address {
  street: string
  district: string
  city: string
  uf: string
}

export const findAddressByCep = async (cep: string): Promise<Address | undefined> => {
  const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)

  if (!response.data) {
    console.error('não encontrado')
    return
  }

  const { street, neighborhood, city, state } = response.data
  return {
    street,
    district: neighborhood,
    city,
    uf: state
  }
}
