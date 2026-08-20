import { useQuery } from '@tanstack/react-query'
import { getLotesDisponibles } from '../services/tiendaService'

export const useLotes = () => {
  return useQuery({
    queryKey: ['lotes-disponibles'],
    queryFn: getLotesDisponibles,
    staleTime: 1000 * 60 * 2,
  })
}
