import { MessageCircle } from 'lucide-react'

const STATS = [
  { valor: '120+', etiqueta: 'productores activos' },
  { valor: '8', etiqueta: 'departamentos' },
  { valor: 'C$ 2M+', etiqueta: 'en ventas 2026' },
]

const PREVIEW_PRODUCTOS = [
  { nombre: 'Naranjas', detalle: 'Grande · Matagalpa', precio: 'C$ 25/lb', descuento: '-20%' },
  { nombre: 'Tomates', detalle: 'Mediano · Jinotega', precio: 'C$ 10/lb' },
  { nombre: 'Plátanos', detalle: 'Grande · Rivas', precio: 'C$ 10/docena' },
  { nombre: 'Aguacates', detalle: 'Extra · Estelí', precio: 'C$ 30/u' },
]

export const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-block text-xs font-semibold text-slate-600 border border-slate-300 rounded-full px-3 py-1 mb-6">
          Hecho en Nicaragua
        </span>

        <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
          Del campo directo a tu mesa
        </h1>

        <p className="text-slate-600 mb-8 max-w-md">
          Comprá productos frescos de productores nicaragüenses. Contacto
          directo por WhatsApp, sin intermediarios ni precios inflados.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#productos"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
          >
            Explorar productos
          </a>
          <a
            href="#productor"
            className="px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            Soy productor
          </a>
        </div>

        <div className="flex gap-10">
          {STATS.map((stat) => (
            <div key={stat.etiqueta}>
              <p className="text-2xl font-bold text-slate-900">{stat.valor}</p>
              <p className="text-sm text-slate-500">{stat.etiqueta}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-slate-700">Managua</span>
            <span className="text-sm text-slate-500">42 productos</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PREVIEW_PRODUCTOS.map((producto) => (
              <div key={producto.nombre} className="relative border border-slate-200 rounded-lg p-3">
                {producto.descuento && (
                  <span className="absolute top-2 left-2 bg-slate-900 text-white text-xs font-semibold rounded px-1.5 py-0.5">
                    {producto.descuento}
                  </span>
                )}
                <div className="aspect-square bg-slate-100 rounded-md mb-2" />
                <p className="text-sm font-semibold text-slate-800">{producto.nombre}</p>
                <p className="text-xs text-slate-500">{producto.detalle}</p>
                <p className="text-sm font-semibold text-slate-900">{producto.precio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-5 left-6 right-6 bg-white border border-slate-200 rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700">
            <MessageCircle className="w-4 h-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-800">Contacto directo</p>
            <p className="text-xs text-slate-500">Al productor por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
