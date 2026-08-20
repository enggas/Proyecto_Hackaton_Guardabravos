import { supabase } from '../../../config/supabaseClient'

export const getLotesDisponibles = async () => {
  const { data, error } = await supabase
    .from('lotes')
    .select(`
      id,
      calidad_clasificacion,
      precio_base_lote,
      stock_disponible,
      creado_en,
      cosechas (
        id,
        unidad_medida,
        cultivo ( nombre, categoria ),
        productor_id,
        perfiles ( nombre_completo, direccion_general )
      ),
      alerta_remates ( precio_descuento, esta_activa )
    `)
    .gt('stock_disponible', 0)
    .order('creado_en', { ascending: false })

  if (error) throw error
  return data
}
