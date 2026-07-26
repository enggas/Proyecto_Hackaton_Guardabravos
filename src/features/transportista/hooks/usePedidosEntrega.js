import { useQuery } from '@tanstack/react-query'
import { getPedidosEntrega } from '../services/transportistaService'

export const usePedidosEntrega = () => {
  return useQuery({
    queryKey: ['pedidos-pendientes-transportista'],
    queryFn: getPedidosEntrega,
    staleTime: 1000 * 60 * 5, // Cache de 5 minutos
  })
}