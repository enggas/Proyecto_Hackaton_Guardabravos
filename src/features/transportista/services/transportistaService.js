import { supabase } from '@/config/supabaseClient'


export const getPedidosEntrega = async () => {
  const { data, error } = await supabase
    .from('pedido_entrega')
    .select(`
      id,
      destino_direccion,
      creado_en,
      estado_entrega,
      ordenes (
        id,
        comprador_id,
        perfiles (
          nombre_completo,
          telefono
        )
      )
    `)
    .eq('estado_entrega', 'asignado') // 👈 Cambiado a 'pending' (o el valor en inglés de tu ENUM)
    .order('creado_en', { ascending: false })

  if (error) {
    console.error('Error detallado de Supabase:', error)
    throw error
  }

  return data
}




