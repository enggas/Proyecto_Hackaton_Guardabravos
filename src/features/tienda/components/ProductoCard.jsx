import { MapPin } from 'lucide-react'
import { ProductImage } from '../../landing/components/ProductImage'
import { normalizarLote } from '../utils/normalizarLote'

export const ProductoCard = ({ lote }) => {
  const producto = normalizarLote(lote)

  return (
    <div className="border border-line rounded-2xl overflow-hidden hover:shadow-md transition-shadow bg-white">
      <div className="relative aspect-square">
        <ProductImage alt={producto.nombre} className="absolute inset-0 w-full h-full" />
        {producto.descuentoTexto && (
          <span className="absolute top-2 left-2 bg-sale text-white text-xs font-bold rounded-lg px-2.5 py-1">
            {producto.descuentoTexto}
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="font-semibold text-strong">{producto.nombre}</p>
        <p className="text-sm text-muted-2 mb-1">
          {producto.calidad}
          {producto.ubicacion ? ` · ${producto.ubicacion}` : ''}
        </p>
        <p className="flex items-center gap-1 text-xs text-muted mb-2">
          <MapPin className="w-3 h-3" />
          {producto.productorNombre}
        </p>

        <p className="text-lg font-bold text-brand-700 mb-1">
          {producto.tieneRemate ? producto.precioRemateTexto : producto.precioBaseTexto}{' '}
          {producto.tieneRemate && (
            <span className="text-sm text-faint line-through font-normal">{producto.precioBaseTexto}</span>
          )}
        </p>
        <p className="text-xs text-muted">{producto.stock} {producto.unidad} disponibles</p>
      </div>
    </div>
  )
}
