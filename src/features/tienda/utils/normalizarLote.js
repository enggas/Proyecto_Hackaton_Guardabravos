export const CATEGORIA_LABELS = {
  frutas: 'Frutas',
  vegetales: 'Vegetales',
  tuberculos: 'Tubérculos',
  granos_basicos: 'Granos básicos',
}

const formatCordobas = (monto) => `C$ ${Number(monto).toLocaleString('es-NI', { maximumFractionDigits: 2 })}`

export const normalizarLote = (lote) => {
  const cosecha = Array.isArray(lote.cosechas) ? lote.cosechas[0] : lote.cosechas
  const cultivo = cosecha?.cultivo
  const productor = cosecha?.perfiles
  const remateRaw = Array.isArray(lote.alerta_remates) ? lote.alerta_remates[0] : lote.alerta_remates
  const remate = remateRaw?.esta_activa ? remateRaw : null
  const unidad = cosecha?.unidad_medida === 'libras' ? 'lb' : 'u'

  return {
    id: lote.id,
    nombre: cultivo?.nombre || 'Producto',
    categoria: cultivo?.categoria || null,
    calidad: lote.calidad_clasificacion,
    productorNombre: productor?.nombre_completo || 'Productor',
    ubicacion: productor?.direccion_general || null,
    stock: Number(lote.stock_disponible),
    unidad,
    precioBase: Number(lote.precio_base_lote),
    precioBaseTexto: `${formatCordobas(lote.precio_base_lote)}/${unidad}`,
    tieneRemate: Boolean(remate),
    precioRemateTexto: remate ? `${formatCordobas(remate.precio_descuento)}/${unidad}` : null,
    descuentoTexto: remate
      ? `-${Math.round((1 - remate.precio_descuento / lote.precio_base_lote) * 100)}% remate`
      : null,
  }
}
