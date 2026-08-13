import { ProductCard } from '../ProductCard'
import { productosDestacados } from '../../data/productosDestacados'

export const MobileFeaturedProducts = () => {
  return (
    <section id="productos" className="py-5 border-t border-dashed border-line">
      <div className="flex items-end justify-between px-4 mb-3">
        <h2 className="text-lg font-bold text-ink">Destacados hoy</h2>
        <a href="#productos" className="text-sm font-semibold text-brand-700">
          Ver todos →
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory">
        {productosDestacados.map((producto) => (
          <div key={producto.id} className="w-36 shrink-0 snap-start">
            <ProductCard producto={producto} />
          </div>
        ))}
      </div>
    </section>
  )
}
