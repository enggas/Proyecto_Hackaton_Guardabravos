import { Bookmark } from 'lucide-react'

export const ProductCard = ({ producto }) => {
  const { nombre, detalle, precio, precioAnterior, etiqueta } = producto

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-square bg-slate-100">
        {etiqueta && (
          <span className="absolute top-2 left-2 bg-slate-900 text-white text-xs font-semibold rounded px-2 py-1">
            {etiqueta}
          </span>
        )}
        <button
          type="button"
          aria-label="Guardar producto"
          className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4">
        <p className="font-semibold text-slate-800">{nombre}</p>
        <p className="text-sm text-slate-500 mb-2">{detalle}</p>
        <p className="font-semibold text-slate-900">
          {precio}{' '}
          {precioAnterior && (
            <span className="text-sm text-slate-400 line-through font-normal">
              {precioAnterior}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
