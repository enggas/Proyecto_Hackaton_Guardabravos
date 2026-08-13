import { MessageCircle } from 'lucide-react'
import { ProductImage } from './ProductImage'

const STATS = [
  { valor: '120+', etiqueta: 'productores activos' },
  { valor: '8', etiqueta: 'departamentos' },
  { valor: 'C$ 2M+', etiqueta: 'en ventas 2026' },
]

const PREVIEW_PRODUCTOS = [
  { nombre: 'Naranjas', detalle: 'Grande · Matagalpa', precio: 'C$ 25/lb', descuento: '-20%', imagen: '/productos/naranjas.jpg' },
  { nombre: 'Tomates', detalle: 'Mediano · Jinotega', precio: 'C$ 10/lb', imagen: '/productos/tomates.jpg' },
  { nombre: 'Plátanos', detalle: 'Grande · Rivas', precio: 'C$ 10/docena', imagen: '/productos/platanos.jpg' },
  { nombre: 'Aguacates', detalle: 'Extra · Estelí', precio: 'C$ 30/u', imagen: '/productos/aguacates.jpg' },
]

export const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <span className="inline-block text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-3 py-1 mb-6">
          Hecho en Nicaragua
        </span>

        <h1 className="text-5xl font-bold text-ink leading-tight tracking-tight mb-6">
          Del campo directo a tu mesa
        </h1>

        <p className="text-body mb-10 max-w-md">
          Comprá productos frescos de productores nicaragüenses. Contacto
          directo por WhatsApp, sin intermediarios ni precios inflados.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#productos"
            className="px-6 py-3 bg-brand-500 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors"
          >
            Explorar productos
          </a>
          <a
            href="#productor"
            className="px-6 py-3 border-2 border-ink hover:bg-ink hover:text-white text-ink font-semibold rounded-lg transition-colors"
          >
            Soy productor
          </a>
        </div>

        <div className="flex gap-10">
          {STATS.map((stat) => (
            <div key={stat.etiqueta}>
              <p className="text-2xl font-bold text-ink">{stat.valor}</p>
              <p className="text-sm text-muted">{stat.etiqueta}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mb-6">
        <div className="bg-white border border-line rounded-2xl shadow-lg p-5 pb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-strong">Managua</span>
            <span className="text-sm text-muted">42 productos</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PREVIEW_PRODUCTOS.map((producto) => (
              <div key={producto.nombre} className="relative border border-line rounded-lg p-3">
                {producto.descuento && (
                  <span className="absolute top-2 left-2 bg-sale text-white text-xs font-bold rounded-lg px-2 py-1">
                    {producto.descuento}
                  </span>
                )}
                <ProductImage src={producto.imagen} alt={producto.nombre} className="aspect-[3/2] rounded-lg mb-2 w-full" />
                <p className="text-sm font-semibold text-strong">{producto.nombre}</p>
                <p className="text-xs text-muted-2">{producto.detalle}</p>
                <p className="text-base font-bold text-brand-700">{producto.precio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-5 left-6 right-6 bg-white border border-line rounded-2xl shadow-md px-4 py-3 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-50 text-brand-700">
            <MessageCircle className="w-4 h-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-strong">Contacto directo</p>
            <p className="text-xs text-muted-2">Al productor por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
