import { Bookmark } from 'lucide-react'
import { ProductImage } from './ProductImage'

export const ProductCard = ({ producto }) => {
  const { nombre, detalle, precio, precioAnterior, etiqueta, imagen } = producto

  return (
    <div className="border border-line rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <ProductImage src={imagen} alt={nombre} className="absolute inset-0 w-full h-full" />
        {etiqueta && (
          <span className="absolute top-2 left-2 bg-sale text-white text-xs font-bold rounded-lg px-2.5 py-1">
            {etiqueta}
          </span>
        )}
        <button
          type="button"
          aria-label="Guardar producto"
          className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-body hover:text-ink transition-colors"
        >
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4">
        <p className="font-semibold text-strong">{nombre}</p>
        <p className="text-sm text-muted-2 mb-2">{detalle}</p>
        <p className="text-lg font-bold text-brand-700">
          {precio}{' '}
          {precioAnterior && (
            <span className="text-sm text-faint line-through font-normal">
              {precioAnterior}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
