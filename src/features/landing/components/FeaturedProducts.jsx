import { ProductCard } from './ProductCard'
import { productosDestacados } from '../data/productosDestacados'

export const FeaturedProducts = () => {
  return (
    <section id="productos" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Productos destacados</h2>
          <p className="text-sm text-slate-500">Los más buscados esta semana</p>
        </div>
        <a href="#productos" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
          Ver todo el catálogo →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {productosDestacados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  )
}
